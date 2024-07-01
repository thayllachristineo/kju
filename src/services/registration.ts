import {
  Registration,
  RegistrationFormData,
  RegistrationStatus,
} from '~/types/registration';
import { cpfToNumber } from '~/utils/cpf';

const url = 'http://localhost:3000/registrations';

export const addRegistration = async ({
  name,
  email,
  cpf,
  admissionDate,
}: RegistrationFormData): Promise<
  Registration | undefined
> => {
  try {
    const date = new Date(admissionDate);
    const formattedDate = date.toLocaleDateString('pt-BR', {
      timeZone: 'UTC',
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employeeName: name,
        email: email,
        cpf: cpfToNumber(cpf),
        admissionDate: formattedDate,
        status: RegistrationStatus.REVIEW,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

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

export const setRegistrationStatus = async (
  id: string,
  status: RegistrationStatus,
) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRegistration = async (id: string) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
