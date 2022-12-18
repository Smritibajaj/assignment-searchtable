import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import { useCommonStyles } from "../../assets/styles/common";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SearchIcon from "@mui/icons-material/Search";
import { CommonMaterialInputProps } from "./interfaces";
import { inputStyles, textFieldStyles } from "./styles";



const CommonMaterialInput: React.FC<CommonMaterialInputProps> = (props) => {
  const classes = useCommonStyles();
  const {
    name,
    value,
    onChange,
    label,
    validationKey,
    type,
    placeholder,
    disabled,
    rupee,
    searchIcon,
    onBlur,
    multiline,
    rows,
    numberGap,
  } = props;
  return (
    <div
      className={`mt-4 flex justify-start w-full flex-col ${
        props.style ? props.style : ""
      }`}
    >
      {label && (
        <span className="text-brand-text-primary font-medium text-sm mb-1">
          {label}
        </span>
      )}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          fontFamily: classes.fontFamily,
        }}
        className="flex"
      >
        <TextField
          fullWidth
          type={type}
          placeholder={placeholder}
          value={value || ""}
          name={name}
          multiline={multiline}
          rows={rows}
          className={classes.inputDisabled}
          onChange={(
            e
          ) => onChange ? onChange(e) :void 0}
          onBlur={(
            e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => (onBlur ? onBlur(e) : void 0)}
          InputProps={{
            className: `${classes.bg_white} ${classes.p3px} 
              ${classes.pr0} ${classes.pl0} ${classes.fontSizeSmall} ${
              !multiline ? classes.inputHeight : ""
            } ring-0 ring-offset-0`,
            startAdornment:
              (rupee && (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon
                    fontSize="small"
                    className={classes.mlpt5}
                  />
                </InputAdornment>
              )) ||
              (searchIcon && (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" className={classes.mlpt5} />
                </InputAdornment>
              )),
            inputProps:
              type === "number" ? { min: 0, step: numberGap || 0.01 } : {},
            sx: textFieldStyles(classes),
          }}
          sx={inputStyles}
          disabled={disabled}
          helperText={validationKey as string}
          error={validationKey ? true : false}
          FormHelperTextProps={{
            className: classes.ml0,
            style: { marginLeft: "0" },
          }}
        />
      </Box>
    </div>
  );
};

export default CommonMaterialInput;
