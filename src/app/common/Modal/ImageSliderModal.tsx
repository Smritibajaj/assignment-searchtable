import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useCommonStyles } from "../../assets/styles/common";
import ImageSlider from "../ImageSlider";
import { ImageSliderProps } from "./interfaces";
/**
 *
 * @param props { open, setOpen }
 * @returns Modal JSX
 */
const ImageSliderModal: React.FC<ImageSliderProps> = (props) => {
  const classes = useCommonStyles();
  const { open, setOpen, headingText, maxWidth } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth={maxWidth} fullWidth>
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

        <DialogContent
          className={classes.p32px}
          style={{ paddingBottom: "0rem", paddingTop: "0rem" }}
        >
          <div className="flex justify-center my-8">
            <ImageSlider images={props.product.images} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ImageSliderModal;
