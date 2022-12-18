export interface AddImageModalProps {
  open: boolean;
  setOpen?: any;
  agreeButtonText?: string;
  cancelButtonText?: string;
  headingText?: string;
  maxWidth?: any;
  initialData: any;
  onSubmitFunction?: any;
}

export interface DeleteModalProps {
  open?: boolean;
  setOpen?: any;
  content?: any;
  agreeButtonText?: string;
  cancelButtonText?: string;
  headingText?: string;
  onClickAgree?: any;
}

export interface CommonModalProps {
  open: boolean;
  setOpen?: any;
  content?: any;
  agreeButtonText?: string;
  cancelButtonText?: string;
  headingText?: string;
  onClickAgree?: any;
  maxWidth?: any;
  type?: any;
}
export interface ImageSliderProps {
  open: boolean;
  setOpen?: any;
  headingText?: string;
  maxWidth?: any;
  product?: any;
}

export interface ConfirmModalProps {
  open?: boolean;
  setOpen?: any;
  content?: any;
  agreeButtonText?: string;
  cancelButtonText?: string;
  headingText?: string;
  onClickAgree?: any;
}
