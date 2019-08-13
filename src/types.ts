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
}

export interface INewEmployee {
  id?: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: Date;
}
