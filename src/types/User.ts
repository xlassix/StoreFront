export interface User {
  UserId: number;
  IsFirstLogon: boolean;
  UserType: number;
  isAuthenticated?: boolean;
}

export interface UserInput {
  UserName: string;
  Password: string;
  UserType: number;
}

export interface UserState {
  user?: User;
  loading: boolean;
}
