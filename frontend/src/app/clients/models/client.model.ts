export interface Client {
  id?: number;
  rut: string;
  first_name: string;
  paternal_lastname: string;
  maternal_lastname: string;
  password?: string;
  level: string;
  email: string;
  mobile_number: string;
}
