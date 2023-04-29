export interface ObjSubmitType {
  id: number;
  email: string;
  password: string;
}

export interface ObjSubmitTypeRegister extends ObjSubmitType {
  name: string;
}

export interface UserEdit extends ObjSubmitTypeRegister {
  avatar: any;
}
