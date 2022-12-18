import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, Box } from "@mui/material";
import { useCommonStyles } from "../../assets/styles/common";

export default function DateInput(props: {
  name: string;
  label: string;
  value?: Date | null;
  onChange: any;
  style?: string;
  validationKey?: any;
  minDate?: any;
  maxDate?: any;
}) {
  const [value, setValue] = React.useState<Date | null>(null);
  const classes = useCommonStyles();
  return (
    <div
      className={`mt-4 flex justify-start w-full flex-col ${
        props.style ? props.style : ""
      }`}
    >
      {props.label && (
        <span className="text-brand-text-primary font-medium text-sm mb-1">
          {props.label}
        </span>
      )}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
        }}
        className="flex"
      >
        <LocalizationProvider dateAdapter={AdapterDateFns} className={"w-full"}>
          <DatePicker
            value={props.value}
            inputFormat="dd/MM/yyyy"
            minDate={props.minDate}
            maxDate={props.maxDate}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  sx={{
                    fontFamily: classes.fontFamily,
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #EBEEF3",
                    },
                    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #EBEEF3 !important",
                    },
                    "& input": {
                      padding: "7.5px 14px",
                      paddingLeft: "9px",
                      fontSize: "14px",
                    },
                  }}
                  helperText={props.validationKey}
                  error={props.validationKey ? true : false}
                />
              );
            }}
            InputProps={{
              className:
                classes.fontFamily + 
                " " +
                classes.wfull +
                " " +
                classes.bg_white +
                " " +
                classes.pl0 +
                " " +
                classes.fontSizeSmall +
                " " +
                classes.inputHeight +
                " " +
                "ring-0 ring-offset-0",
              sx: {
                "&:hover": {
                  border: "1px solid #0D4DC6",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "0px solid",
                },
                "&:focus-within": {
                  border: "1px solid #0D4DC6",
                },
                "&:focus-within .MuiOutlinedInput-notchedOutline": {
                  border: "0px solid",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "2px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #EBEEF3",
                },
                "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #EBEEF3 !important",
                },
                "& input": {
                  padding: "7.5px 14px",
                  paddingLeft: "9px",
                  fontSize: "14px",
                },
              },
            }}
            onChange={(newValue) => {
              props.onChange(newValue);
            }}
          />
        </LocalizationProvider>
      </Box>
    </div>
  );
}
