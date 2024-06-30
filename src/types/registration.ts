export type Registration = {
  id: string;
  status?: string;
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
};

export type RegistrationFormData = {
  name: string;
  email: string;
  cpf: string;
  admissionDate: Date;
};

export enum RegistrationStatus {
  REVIEW = 'REVIEW',
  APPROVED = 'APPROVED',
  REPROVED = 'REPROVED',
}
