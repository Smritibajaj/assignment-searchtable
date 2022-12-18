import { makeStyles } from "@mui/styles";

export const useCommonStyles = makeStyles({
  borderRadiusRight: {
    borderRadius: "5px 0px 0px 5px",
  },
  borderRadiusLeft: {
    borderRadius: "0px 5px 5px 0px",
  },
  bg_white: {
    backgroundColor: "white",
  },
  fontFamily: {
    fontFamily: "'Public Sans', 'sans-serif'",
  },
  p1: {
    padding: "1rem",
  },
  ml1: {
    marginLeft: "1rem",
  },
  mr1: {
    marginRight: "1rem",
  },
  p1t5: {
    padding: "1.5rem",
  },
  p2: {
    padding: "2rem",
  },
  pl3: {
    paddingLeft: "3rem",
  },
  pt0: {
    paddingTop: "0rem",
  },
  pb0: {
    paddingBottom: "0rem",
  },
  pl0: {
    paddingLeft: "0px",
  },
  p32px: {
    padding: "32px",
  },
  p3px: {
    padding: "3px",
  },
  pr0: {
    paddingRight: "0px",
  },
  pr39px: {
    paddingRight: "39px",
  },
  pl12px: {
    paddingLeft: "12px",
  },
  borderSecondary: {
    border: "1px solid #515A6E",
  },
  boxShadowNone: {
    boxShadow: "none",
  },
  fontSizeSmall: {
    fontSize: "small",
  },
  ml0: {
    marginLeft: "0px",
  },
  m1: {
    margin: "1rem",
  },
  mpt5: {
    margin: "0.5rem",
  },
  rateCardsBoxShadow: {
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.05)",
  },
  textAlignStart: {
    textAlign: "start",
  },
  inputHeight: {
    height: "42px",
  },
  borderRadiusInput: {
    borderRadius: "5px",
  },
  inputBorder: {
    border: "1px solid #DCDEE2",
  },
  borderLeft0: {
    borderLeft: "0px",
  },
  mainBackground: {
    backgroundColor: "#F8FAFB",
  },
  borderRounded: {
    borderRadius: "4px",
  },
  mlpt5: {
    marginLeft: "0.5rem",
  },
  mt1: {
    marginTop: "1rem",
  },
  mb1: {
    marginBottom: "1rem",
  },
  mb2: {
    marginBottom: "2rem",
  },
  mt1pt5: {
    marginTop: "1.5rem",
  },
  wfull: {
    width: "100%",
  },
  inputDisabled: {
    "& .MuiInputBase-input.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.5)",
      "-webkit-text-fill-color": "rgba(0, 0, 0, 0.5)",
    },
    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.5)"
    },
    "& input.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.5)"
    },
    "& .MuiOutlinedInput-root.Mui-disabled": {
      backgroundColor: "#f5f5f5",
      borderRadius: "2px",
    }
  }
});
