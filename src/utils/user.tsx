export interface ObjSubmitType {
  email: string;
  password: string;
}

export interface ObjSubmitTypeRegister extends ObjSubmitType {
  name: string;
}

export interface UserEdit extends ObjSubmitTypeRegister {
  avatar: any;
}

export interface EventType {
  id: number;
  user_id: number;
  name: string;
  date: string;
  hostedby: string;
  event_image: any;
}

export interface EventDataType {
  id: number;
  event_image: any;
  name: string;
  hostedby: string;
  date: string;
  place: string;
  description: string;
  typeofticket: boolean;
  ticket: string;
  price: string;
  goalquota: number;
  currentqouta: string;
  user_id: number;
}

export interface AddDataEvent {
  event_image: any;
  event_name: string;
  hostedby: string;
  event_date: string;
  place: string;
  description: string;
  ticket: string;
  price: number;
  qouta: number;
}

export interface UpdateDataEvent extends EventDataType {
  id: number;
}

export interface UserComment extends EventDataType {
  avatar: any;
  content: string;
  id: number;
}
