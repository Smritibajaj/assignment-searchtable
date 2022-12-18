export interface IUser {
  name: string;
  email: string;
  role: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IUserState {
  data: any;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}
