import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCommonStyles } from "../../assets/styles/common";
import CommonButton from "../Button";
import InvertedButton from "../Button/InvertedButton";
import { ConfirmModalProps } from "./interfaces";

const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const classes = useCommonStyles();
  const {
    open,
    setOpen,
    content,
    agreeButtonText,
    cancelButtonText,
    headingText,
    onClickAgree,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle
            className={classes.p32px}
            style={{ paddingBottom: "0.5rem" }}
          >
            <p className="text-2xl">{headingText}</p>
          </DialogTitle>
          <DialogContent
            className={classes.p32px}
            style={{ paddingBottom: "0rem", paddingTop: "0rem" }}
          >
            <p className="text-brand-text-title text-base">{content}</p>
          </DialogContent>
          <DialogActions className={classes.p32px}>
            {cancelButtonText && (
              <InvertedButton
                className=" box-border w-32 text-brand-text-tableHead bg-brand-text-white mt-0 mr-1  hover:bg-brand-extra-background"
                onClick={handleClose}
                text={cancelButtonText}
              />
            )}
            {agreeButtonText && (
              <CommonButton
                className="w-32 mt-0"
                onClick={onClickAgree}
                text={agreeButtonText}
              />
            )}
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default ConfirmModal;
