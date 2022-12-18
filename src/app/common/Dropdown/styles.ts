export const autoCompleteStyles = (classes: any) => {
  return {
    fontFamily: classes.fontFamily,
    "& .MuiInputBase-root": {
      borderRadius: "2px",
    },
    "& .MuiOutlinedInput-root": {
      padding: "3px !important",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #EBEEF3",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #3466E5 !important",
    },
    "&:focus-within .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #3466E5 !important",
    },
  };
};

export const searchStyles = (classes: any) => {
  return {
    "& .MuiInputBase-root": {
      borderRadius: "2px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "3px 3px 3px 0px !important",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-root": {
      paddingLeft: "0px",
    },
    "& .MuiOutlinedInput-root:focus-visible": {
      outline: "0px !important",
      border: "0px solid !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0px solid #EBEEF3",
    },
    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #EBEEF3 !important",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px !important",
      borderColor: "unset !important",
    },
    fontFamily: classes.fontFamily,
  };
};

export const singleSearchStyles = (classes: any) => {
  return {
    "& .MuiInputBase-root": {
      borderRadius: "2px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "3px !important",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #EBEEF3",
    },
    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #EBEEF3 !important",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #3466E5 !important",
    },
    "&:focus-within .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #3466E5 !important",
    },
    fontFamily: classes.fontFamily,
  };
};
export const dropdownStyles = {
  marginTop: "0rem",
  borderRadius: "2px",
};
