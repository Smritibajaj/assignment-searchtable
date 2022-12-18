import { FormControl, FormHelperText } from "@mui/material";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useCommonStyles } from "../../assets/styles/common";
interface Props {
  name: string;
  id: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
  label?: string;
  validationKey?: any;
  type?: string;
  placeholder?: string;
  options?: Array<object>;
  disabled?: any;
}

interface DropdownOption {
  key?: string;
  value?: string;
  text?: string;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #EBEEF3",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "1px solid #3466E5",
      boxShadow: "none",
    },
  },
}));

const CommonDropdown: React.FC<Props> = (props) => {
  const classes = useCommonStyles();
  const {
    name,
    value,
    onChange,
    onBlur,
    label,
    validationKey,
    type,
    placeholder,
    options,
    disabled,
  } = props;
  return (
    <div className={`mt-4 flex justify-start w-full flex-col `}>
      <label className="flex flex-col">
        {label && (
          <span className="text-brand-text-primary font-medium text-sm mb-1">
            {label}
          </span>
        )}
      </label>
      <FormControl fullWidth error={validationKey ? true : false}>
        <Select
          name={name}
          fullWidth
          placeholder={placeholder}
          value={value || ""}
          disabled={disabled}
          onChange={(event: SelectChangeEvent) => {onChange(event)
            if (onBlur) {
              onBlur(event);
            }
          }}
          variant="outlined"
          input={<BootstrapInput />}
          sx={{
            fontFamily: classes.fontFamily,
            "& .MuiSelect-select": {
              padding: "8px 26px 9px 12px",
              fontSize: "14px",
              border: validationKey ? "1px solid #FF3C31" : "",
              borderRadius: "1px",
            },
          }}
        >
          {options &&
            options.map((opt: DropdownOption) => (
              <MenuItem key={opt.key} value={opt.value} dense={true}>
                {opt.text}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {validationKey && (
        <FormHelperText sx={{ color: "#FF3C31" }}>
          {validationKey}
        </FormHelperText>
      )}
    </div>
  );
};

export default CommonDropdown;
