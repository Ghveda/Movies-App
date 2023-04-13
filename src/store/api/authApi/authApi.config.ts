export interface IAuth {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

export interface IError {
  status: number;
  data: string;
}
