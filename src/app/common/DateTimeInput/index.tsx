import * as React from "react";
import dayjs from 'dayjs';
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useCommonStyles } from "../../assets/styles/common";
import { Box } from "@mui/material";
import { DATETIME_FORMAT_STRINGS } from "../../utils/constants/constants";

export default function DateTimePickers(props: {
  name: string;
  label: string;
  value?: Date | null;
  onChange: any;
  style?: string;
  validationKey?: any;
  minDate?: any;
  maxDate?: any;
}) {
  const classes = useCommonStyles();
  const [open, setOpen] = React.useState(false);
  //var now = dayjs()

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            value={props.value && dayjs(props.value)}
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
                  onClick={(e) => setOpen(true)} 
                />
              );
            }}
            InputProps={{
              className:
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
            minDate={dayjs()}
            inputFormat={DATETIME_FORMAT_STRINGS.INPUT_FRIENDLY_STRING}
          />
        </LocalizationProvider>
      </Box>
    </div>
  );
}
