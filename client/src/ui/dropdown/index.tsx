import React, {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { prepareQueryParams } from "../../utils/common";
import { useFetch } from "../../hooks/useFetch";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { AutocompleteOption, AutocompleteProps } from "./types";
import { PAGE_LIMIT, SEARCH_PARAM_MIN_CHARACTERS } from "../../constants";
import debounce from "lodash/debounce";
import pick from "lodash/pick";
import { DROPDOWN_LIMIT } from "./utils";
import { StyledPaper } from "../autocomplete/styled";
/* istanbul ignore next */
const Dropdown = ({
  onSelectOption,
  id,
  label,
  placeholder,
  optionLabel = "name",
  optionValue = "id",
  getOptions,
  onClear,
  defaultOption = [],
  error,
  helperText,
  value,
  defaultValue,
  otherOptions = [],
  propertyId,
  isAreaSearch = false,
  enableReInitialization,
  dontLoad = false,
  isShowAllOption = false,
  required = false,
  ...rest
}: AutocompleteProps): ReactElement => {
  const { data, run, isLoading: startingOptionsLoading } = useFetch<any[]>();
  const [searchOptionsLoading, setSearchOptionsLoading] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<AutocompleteOption | null>(
      defaultValue
        ? { ...defaultValue, name: defaultValue?.[optionLabel] }
        : null
    );
  const [options, setOptions] = useState<AutocompleteOption[]>([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (isAreaSearch && !propertyId) return;
    isAreaSearch && setOptions([]);
    isAreaSearch && setSelectedOption(null);
    isAreaSearch && onSelectOption("");
    const params = prepareQueryParams("", {
      limit: isShowAllOption ? PAGE_LIMIT._50 : DROPDOWN_LIMIT,
      property_id: isAreaSearch && propertyId ? propertyId : undefined,
    });
    getOptions && !dontLoad && run(getOptions(params));
  }, [propertyId]);

  useEffect(() => {
    if (!open) resetOptions();
  }, [open]);

  const memoOptions = useMemo(() => {
    if (!data) return [];
    const auxOptions = data.map((option) =>
      pick(option, [optionValue, optionLabel, ...otherOptions])
    );
    defaultOption?.forEach((option) => {
      auxOptions.unshift(option);
    });
    return auxOptions;
  }, [data]);

  useEffect(() => {
    if (!memoOptions) return;
    setOptions(memoOptions);
  }, [memoOptions]);

  useEffect(() => {
    if (enableReInitialization) {
      setSelectedOption(
        defaultValue
          ? { ...defaultValue, name: defaultValue?.[optionLabel] }
          : null
      );
    }
  }, [enableReInitialization, defaultValue]);

  const resetOptions = useCallback((): void => {
    setOptions(memoOptions);
  }, [memoOptions]);

  const onSelect = async (event: AutocompleteOption | null): Promise<void> => {
    let value;
    if (!event?.[optionValue]) {
      value = undefined;
    } else if (event?.[optionValue] === -1) {
      value = "";
    } else {
      value = String(event?.[optionValue]);
    }
    onSelectOption(value, event);
  };

  const onSearchFieldTextChange = React.useCallback(
    debounce(async (search: string): Promise<void> => {
      if (search.length < SEARCH_PARAM_MIN_CHARACTERS) return resetOptions();
      try {
        if (!getOptions) return;
        setSearchOptionsLoading(true);
        const params = prepareQueryParams("", {
          search,
          property_id: isAreaSearch && propertyId ? propertyId : undefined,
        });
        const response = await getOptions(params);
        const { data } = await response.json();
        const auxOptions = data?.map((option: AutocompleteOption) =>
          pick(option, [optionValue, optionLabel, ...otherOptions])
        );
        defaultOption?.forEach((option) => {
          auxOptions.unshift(option);
        });
        setOptions(auxOptions);
        setSearchOptionsLoading(false);
      } catch (e) {
        resetOptions();
      }
    }, 0),
    [resetOptions, getOptions, defaultOption, propertyId]
  );

  const isLoading = startingOptionsLoading || searchOptionsLoading;

  return (
    <Autocomplete
      size="small"
      id={id}
      open={open}
      value={selectedOption}
      loading={isLoading}
      options={options}
      onOpen={(): void => setOpen(true)}
      onClose={(): void => setOpen(false)}
      data-testid="search-user"
      getOptionLabel={(option) =>
        `${option?.[optionLabel as keyof AutocompleteOption]}`
      }
      onChange={(_, value) => {
        setSelectedOption(value);
        onSelect(value);
      }}
      isOptionEqualToValue={(option, value) =>
        option?.[optionValue] === value?.[optionValue]
      }
      renderOption={(props, option) => (
        <li {...props} key={option?.[optionValue]}>
          {option?.[optionLabel as keyof AutocompleteOption]}
        </li>
      )}
      sx={{ minHeight: "0" }}
      componentsProps={{
        clearIndicator: {
          onClick: () => {
            onSelectOption("", null);
            setSelectedOption(null);
            onClear && onClear();
          },
        },
      }}
      PaperComponent={StyledPaper}
      renderInput={(params) => (
        <TextField
          {...params}
          data-testid="search-property"
          name={rest.name}
          label={label}
          value={value}
          placeholder={placeholder}
          fullWidth
          required={required}
          error={error}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
          helperText={helperText}
          onChange={(e): Promise<void> | undefined =>
            onSearchFieldTextChange(e.target.value)
          }
        />
      )}
      {...rest}
    />
  );
};

export default Dropdown;
