export interface ButtonProps {
    text?: string;
    onClick?: any;
    type?: "button" | "submit" | "reset" | undefined;
    tag?: any;
    to?: string;
    className?: string;
    disabled?: boolean;
    theme?: string
  }