import { FieldValidator } from "final-form";

export interface IEmployee {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: Date;
}

export interface IInputProps {
  fieldName: string;
  labelName: string;
  typeInput: string;
  placeholder?: string;
  pattern?: string;
  validate?: FieldValidator<string>;
}

export interface INewEmployee {
  id?: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: Date;
}
