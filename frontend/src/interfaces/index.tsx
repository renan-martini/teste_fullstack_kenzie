import { MouseEventHandler, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IChildren {
  children: ReactNode;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserData extends IUserLogin {
  fullName: string;
  phone: number;
}

export interface IUser extends IUserData {
  id: string;
  contacts: IContact[];
}

export interface IContactCreate {
  fullName: string;
  phone: string;
  email: string;
}

export interface IContact extends IContactCreate {
  id: string;
}

export interface IAccount {
  id: string;
  balance: number;
}

export interface IUserContext {
  user: IUser;
  logar: (data: IUserLogin) => void;
  deslogar: () => void;
  registrar: (data: IUserData) => void;
  loadProfile: () => void;
  createContact: (data: IContactCreate, handleClose: () => void) => void;
}

export interface ITransactionData {
  username: string;
  value: number;
}

export interface IInputProps {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  type?: string;
  step?: string;
}

export interface IFormProps extends IChildren {
  handleSubmit: any;
  props?: any;
}

export interface IButtonProps {
  name: string;
  type: "button" | "reset" | "submit" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: string;
  className?: string;
}

export interface IStyledButtonProps {
  width?: string;
}

export interface IHeaderProps {
  logOutButton?: boolean;
}

export interface IModal {
  open: boolean;
  handleClose: () => void;
}
