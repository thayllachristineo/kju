import {
  Registration,
  RegistrationStatus,
} from '../types/registration';

const url = 'http://localhost:3000/registrations';

export const addRegistration = async ({
  employeeName,
  email,
  cpf,
  admissionDate,
}: Registration): Promise<Registration | undefined> => {
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
        employeeName: employeeName,
        email: email,
        cpf: cpf,
        admissionDate: formattedDate,
        status: 'REVIEW',
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
