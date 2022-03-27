import { IUser } from '../user.interface';

export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegistrationBody {
  name: string;
  email: string;
  password: string;
}

interface IAuthResponseError {
  value: string;
  msg: string;
  param: string;
}

export interface IRegistrationResponse {
  success: boolean;
  message: string;
  error?: IAuthResponseError[];
}

export interface ILoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user: IUser;
}
