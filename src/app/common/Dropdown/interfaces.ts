type Options = {
  value: string;
  text: string;
};

export interface MultipleSearchDropdownProps {
  id: string;
  name: string;
  value?: any[];
  onChange?: any;
  onChangeText?: any;
  validationKey?: any;
  label?: string;
  options?: Array<Options>;
  disabled?: boolean;
  searchType?: boolean;
  placeholder?: string;
}

export interface SingleSearchDropdownProps {
  id: any;
  name: string;
  value: any;
  onChange?: any;
  onChangeText?: any;
  validationKey: any;
  label: string;
  options: Array<Options>;
  disabled?: boolean;
  placeholder?: string;
  searchType?: boolean;
  outline?: boolean;
}
