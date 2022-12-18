export const textFieldStyles = (classes: any) => {
  return {
    fontFamily: classes.fontFamily,
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
  };
};

export const inputStyles = {
  // width: "75%",
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
  "& textarea": {
    padding: "7.5px 14px",
    paddingLeft: "9px",
    fontSize: "14px",
  },
};
