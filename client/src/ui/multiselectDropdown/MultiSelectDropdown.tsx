import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Checkbox, CircularProgress } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { DDProps, Options } from "./types";
import { Chip, SelectBox } from "./styled";
import { useTranslation } from "react-i18next";

const icon = <CheckBoxOutlineBlankIcon fontSize="inherit" />;
const checkedIcon = <CheckBoxIcon fontSize="inherit" />;

const MultiSelectDropdown = ({
  label,
  placeholder,
  options,
  name,
  setFieldValue,
  isLoading,
}: DDProps): React.ReactElement => {
  const { t } = useTranslation();

  const onAutocompleteChange = (_: unknown, value: Options[]): void => {
    setFieldValue(name, value);
  };

  const renderTags = (list: Options[]): React.ReactElement => (
    <SelectBox>
      <Chip sx={{ maxHeight: 17 }} label={list[0].label} />
      {list.length > 1 && (
        <div className="more-info">{`${t("selectedMoreThenOneAnd")} ${
          list.length - 1
        } ${t("selectedMoreThenOneMore")}`}</div>
      )}
    </SelectBox>
  );

  return (
    <Autocomplete
      multiple
      limitTags={1}
      options={options}
      getOptionLabel={(option: Options) => option.label}
      disableCloseOnSelect
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderTags={renderTags}
      onChange={onAutocompleteChange}
      renderOption={(props, option, { selected }): React.ReactElement => (
        <li {...props}>
          <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
          {option.label}
        </li>
      )}
    />
  );
};

export default MultiSelectDropdown;
