import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useCommonStyles } from "../../assets/styles/common";
import { MultipleSearchDropdownProps } from "./interfaces";
import { debounceMethod } from "../../utils/common";
import { autoCompleteStyles, dropdownStyles } from "./styles";

/**
 *
 * @param props { value, onChange, validationKey, label, options, onChangeText, disabled, searchType, placeholder }
 * @returns JSX
 */
const MultipleSearchDropdown: React.FC<MultipleSearchDropdownProps> = (props) => {
  // common style for material Ui components
  const classes = useCommonStyles();
  // props destructuring
  const {
    id,
    value,
    onChange,
    validationKey,
    label,
    options,
    onChangeText,
    disabled,
    //searchType,
    placeholder,
  } = props;
  // input chnage value in input field
  const handleChangeInput = (e: any, value: any) => {
    onChange(value);
  };

  const updateDebouceText = React.useCallback(
    debounceMethod(onChangeText, 500),
    []
  );

  return (
    <>
      <Stack spacing={3} className=" w-full mt-4 font-dm_sans">
        <label
          htmlFor="mui_search_multiple_select"
          className="text-brand-text-primary font-medium text-sm"
        >
          {label}
        </label>
        <Autocomplete
          multiple
          id={id}
          aria-label={label}
          options={options?.length ? options : [{ text: "", value: "" }]}
          renderOption={(props, option) => (
            <li {...props} className="text-sm px-2 py-2 cursor-pointer">
              {option.text}
            </li>
          )}
          getOptionLabel={(option: any) => {
            return option?.text}}
          value={value ?? []}
          onChange={handleChangeInput}
          filterSelectedOptions
          disabled={disabled}
          //onInputChange={updateDebouceText}
          style={{ ...dropdownStyles }}
          sx={autoCompleteStyles(classes)}
          renderInput={(params) => (
            <TextField
              {...params}
              // label={label}
              placeholder={placeholder || "Type to search"}
              onChange={updateDebouceText}
              helperText={validationKey}
              error={validationKey ? true : false}
              FormHelperTextProps={{
                className: classes.ml0,
              }}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default MultipleSearchDropdown;
