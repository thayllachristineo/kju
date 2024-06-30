export type Registration = {
  id: string;
  status?: string;
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
};

export enum RegistrationStatus {
  REVIEW = 'REVIEW',
  APPROVED = 'APPROVED',
  REPROVED = 'REPROVED',
}
