export interface ParamsTypes {
  param?: string;
}

export interface RouteObject {
  key: string;
  path: Function;
  navIcon: string;
  navIconHover: string;
  subRoutes: Array<string>;
}

export interface SubstateObject {
  data?: any;
  status: number;
}

export interface UserObject {
  area?: string;
  address?: string;
  city_col?: string;
  city_id?: string;
  company_name?: string;
  contact_number?: string;
  country_col?: string;
  country_id?: string;
  created_at?: string;
  email?: string;
  first_name?: string;
  gst_number?: string;
  id?: string;
  last_name?: string;
  name?: string;
  pan_number?: string;
  pincode_col?: string;
  pincode_id?: string;
  role?: string;
  state_col?: string;
  state_id?: string;
  type?: string;
  _city?: any;
  _state?: any;
  _pincode?: any;
  _country?: any;
  _hq?: any;
}

export interface IUpdateUserObject {
  body: {
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    pin_code?: string;
    city?: string;
    state?: string;
    country?: string;
    gst_number?: string;
    pan_number?: string;
    pincode_id?: string;
    city_id?: string;
    state_id?: string;
    country_id?: string;
    type?: string;
    contact_number?: string;
    address?: string;
    area?: string;
    company_name?: string;
  };
  id: string;
  user: string;
}
