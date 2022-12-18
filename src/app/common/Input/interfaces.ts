import { FormikErrors } from "formik";
import { ChangeEvent } from "react";

export interface CommonMaterialInputProps {
    name?: string;
    value?: string | number;
    onChange?: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur?: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    label?: string;
    validationKey?: string | boolean |  string[] | FormikErrors<any> | FormikErrors<any>[];
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    rupee?: boolean;
    searchIcon?: boolean;
    style?: string;
    multiline?: boolean;
    rows?: number;
    numberGap?: number;
  }