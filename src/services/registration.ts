import {
  Registration,
  RegistrationStatus,
} from '../types/registration';

const url = 'http://localhost:3000/registrations';


export const getRegistrations = async (): Promise<
  Registration[] | undefined
> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRegistrationByCpf = async (
  cpf: string,
): Promise<Registration[] | undefined> => {
  try {
    const response = await fetch(`${url}?cpf=${cpf}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

