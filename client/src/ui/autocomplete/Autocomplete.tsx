import * as React from "react";
import TextField from "@mui/material/TextField";
import MUIAutocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { AutocompleteOption, AutocompleteProps } from "./types";
import { SEARCH_PARAM_MIN_CHARACTERS } from "../../constants";
import { useTranslation } from "react-i18next";
import debounce from "lodash/debounce";
import { Dropdown } from "./styled";
import {
  AutocompleteListItem,
  AutocompletePropertyName,
  AutocompletePropertyAddress,
} from "./styled";
import { Grid } from "@mui/material";
/* istanbul ignore next */
function Autocomplete({
  id,
  name,
  label,
  handleOnChangeInputText,
  handleOptionSelect,
  placeholder,
  handleBlur,
  value,
  error,
  helperText,
  autocompleteValue,
  disabled = false,
  debounceTime = 500,
  sx = { minHeight: "74px", mb: 1 },
  size = "medium",
  optionValue,
  optionLabel,
  preloadOptions,
}: AutocompleteProps): ReactElement {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = React.useState<
    readonly AutocompleteOption[] | null
  >(null);

  useEffect(() => {
    if (!open && !preloadOptions) setOptions(null);
  }, [open, preloadOptions]);

  useEffect(() => {
    if (preloadOptions) setOptions(preloadOptions);
  }, [preloadOptions]);

  const onSearchFieldTextChange = React.useCallback(
    debounce(async (search: string): Promise<void> => {
      if (search.length < SEARCH_PARAM_MIN_CHARACTERS) {
        setOptions(preloadOptions ? preloadOptions : null);
      } else {
        setLoading(true);

        try {
          const response = await handleOnChangeInputText(search);
          setOptions([...response]);
          setLoading(false);
        } catch (e) {
          setOptions([]);
        }
      }
    }, debounceTime),

    [handleOnChangeInputText, preloadOptions]
  );

  /* istanbul ignore next */
  const autocompletePaperComponent = ({
    children,
  }: {
    children?: ReactNode;
  }): ReactElement | null => <Dropdown>{children}</Dropdown>;

  return (
    <>
      <MUIAutocomplete
        id={id}
        open={open}
        options={options ?? []}
        value={autocompleteValue}
        loading={loading}
        disabled={disabled}
        onOpen={(): void => setOpen(true)}
        onClose={(): void => setOpen(false)}
        onChange={(e, value): void => handleOptionSelect(value)}
        getOptionLabel={
          optionLabel === "full_name"
            ? (option): string => `${option.first_name} ${option.last_name}`
            : optionLabel
            ? (option): string => option?.[optionLabel]
            : undefined
        }
        getOptionDisabled={(option) =>
          preloadOptions ? option.id === -1 : false
        }
        isOptionEqualToValue={(option, value): boolean => {
          return (
            option?.[optionValue] == value?.[optionValue] ||
            (autocompleteValue?.[optionValue] &&
              autocompleteValue?.[optionValue] === option?.[optionValue])
          );
        }}
        noOptionsText={!options ? t("startTyping") : undefined}
        PaperComponent={autocompletePaperComponent}
        renderOption={
          optionLabel === "object_name"
            ? (props, option) => (
                <AutocompleteListItem {...props} key={option.id}>
                  <Grid container direction={"column"}>
                    <Grid item>
                      <AutocompletePropertyName>
                        {option.object_name}
                      </AutocompletePropertyName>
                    </Grid>
                    <Grid item>
                      <AutocompletePropertyAddress>
                        {option.location.full_address}
                      </AutocompletePropertyAddress>
                    </Grid>
                  </Grid>
                </AutocompleteListItem>
              )
            : undefined
        }
        renderInput={(params): ReactElement => (
          <TextField
            {...params}
            name={name}
            sx={sx}
            label={label || placeholder}
            size={size}
            placeholder={t(placeholder)}
            fullWidth
            disabled={disabled}
            value={value}
            error={error}
            helperText={helperText}
            onBlur={handleBlur}
            onChange={(e): Promise<void> | undefined =>
              onSearchFieldTextChange(e.target.value)
            }
            InputLabelProps={{ shrink: true }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  );
}

export default Autocomplete;
