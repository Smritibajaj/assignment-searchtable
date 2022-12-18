import React, { useCallback } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useCommonStyles } from "../../assets/styles/common";
import { debounceMethod } from "../../utils/common";
import { SingleSearchDropdownProps } from "./interfaces";
import { dropdownStyles, searchStyles, singleSearchStyles } from "./styles";

const SingleSearchDropdown: React.FC<SingleSearchDropdownProps> = (props) => {
  const classes = useCommonStyles();
  const {
    id,
    value,
    onChange,
    validationKey,
    label,
    options,
    onChangeText,
    disabled,
    placeholder,
    //searchType,
    outline,
  } = props;

  const handleChangeInput = (e: any, value: any) => {
    onChange(value?.value);
  };

  // Debounce OnChange Text
  const updateDebouceText = useCallback((e: any) => {
    e?.target && onChange(e.target.value);
    e?.target && debounceMethod(onChangeText(e), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Stack spacing={3} className=" w-full mt-4 font-dm_sans">
        <label className="flex flex-col">
          {label && (
            <span className="text-brand-text-primary font-medium text-sm mb-1">
              {label}
            </span>
          )}
        </label>
        <Autocomplete
          id={id}
          aria-label={label}
          options={options.length ? options : [{ text: "", value: "" }]}
          renderOption={(props, option) => (
            <li {...props} className="text-sm px-2 py-2 cursor-pointer">
              {option.text}
            </li>
          )}
          getOptionLabel={(option: any) => option.value}
          inputValue={value}
          onChange={handleChangeInput}
          filterSelectedOptions
          disabled={disabled}
          onInputChange={updateDebouceText}
          style={{ ...dropdownStyles }}
          sx={outline ? searchStyles(classes) : singleSearchStyles(classes)}
          className={classes.mpt5}
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
              // value={textChange}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default SingleSearchDropdown;
