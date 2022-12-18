import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useCommonStyles } from "../../assets/styles/common";
import CommonButton from "../Button";
import InvertedButton from "../Button/InvertedButton";
import { CommonModalProps } from "./interfaces";

/**
 *
 * @param props { open, setOpen, content, agreeButtonText, cancelButtonText, headingText, onClickAgree }
 * @returns Modal JSX
 */
const CommonModal: React.FC<CommonModalProps> = (props) => {
  const classes = useCommonStyles();
  const {
    open,
    setOpen,
    content,
    agreeButtonText,
    cancelButtonText,
    headingText,
    onClickAgree,
    maxWidth,
    type,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth={maxWidth} sx={{
          fontFamily: classes.fontFamily,
        }} 
        fullWidth>
        <DialogTitle
          className={classes.p32px}
          style={{ paddingBottom: "0.5rem" }}
        >
          <p className="text-2xl">{headingText}</p>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 25,
              top: 25,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {type === "submit" ? (
          <form onSubmit={(e: React.SyntheticEvent) => onClickAgree()}>
            <DialogContent
              className={classes.p32px}
              style={{ paddingBottom: "0rem", paddingTop: "0rem" }}
            >
              <div className="text-brand-text-title text-base">
                {
                  content
                }
              </div>
            </DialogContent>
            <DialogActions
              className={classes.p32px}
              style={{ paddingTop: "1.2rem" }}
            >
              {cancelButtonText && (
                <>
                  <InvertedButton
                    className=" box-border w-32 text-brand-text-tableHead bg-brand-text-white mt-0 mr-1  hover:bg-brand-extra-background"
                    onClick={handleClose}
                    text={cancelButtonText}
                  />
                </>
              )}
              {agreeButtonText && (
                <>
                  <CommonButton
                    type={type ?? "button"}
                    className="w-32 mt-0"
                    //onClick={onClickAgree}
                    text={agreeButtonText}
                  />
                </>
              )}
            </DialogActions>
          </form>
        ) : (
          <>
            <DialogContent
              className={classes.p32px}
              style={{ paddingBottom: "0rem", paddingTop: "0rem" }}
            >
              <div className="text-brand-text-title text-base">
                {
                  content
                }
              </div>
            </DialogContent>
            <DialogActions
              className={classes.p32px}
              style={{ paddingTop: "1.2rem" }}
            >
              {cancelButtonText && (
                <>
                  <InvertedButton
                    className=" box-border w-32 text-brand-text-tableHead bg-brand-text-white mt-0 mr-1  hover:bg-brand-extra-background"
                    onClick={handleClose}
                    text={cancelButtonText}
                  />
                </>
              )}
              {agreeButtonText && (
                <>
                  <CommonButton
                    className="mt-0 w-32"
                    onClick={onClickAgree}
                    text={agreeButtonText}
                  />
                </>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};
export default CommonModal;
