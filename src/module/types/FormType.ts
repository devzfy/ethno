export interface FormType {
  fullName: string;
  phone: string;
  comment: string;
}

export interface IModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
