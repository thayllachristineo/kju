import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import { toast } from 'react-toastify';

import TextField from '~/components/TextField';
import Button from '~/components/Button';
import IconButton from '~/components/IconButton';
import routes from '~/router/routes';
import { addRegistration } from '~/services/registration';
import { RegistrationFormData } from '~/types/registration';
import { cpfMask } from '~/utils';

import * as Styled from './NewUser.styled';

const NewUserPage = () => {
  const schema: ZodType<RegistrationFormData> = z.object({
    name: z
      .string()
      .min(2, {
        message:
          'O nome deve conter pelo menos 2 caracteres',
      })
      .regex(/^[^0-9].* [a-zA-Z]+.*$/, {
        message: 'O nome deve conter nome e sobrenome',
      }),
    email: z.string().email({
      message: 'Insira um e-mail válido!',
    }),
    cpf: z
      .string()
      .refine((cpf) => cpfValidator.isValid(cpf), {
        message: 'CPF inválido',
      }),
    admissionDate: z.coerce.date({
      message: 'Data inválida',
    }),
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      admissionDate: new Date(),
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const history = useHistory();

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      setIsLoading(true);
      await addRegistration({
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        admissionDate: data.admissionDate,
      });

      toast.success('Registro adicionado', {
        position: 'bottom-center',
        autoClose: 2000,
      });

      setIsLoading(false);

      history.push(routes.dashboard);
    } catch (e) {
      console.error(e);

      toast.error('Erro ao adicionar registro', {
        position: 'bottom-center',
        autoClose: 2000,
      });

      setIsLoading(false);
    }
  };

  return (
    <Styled.Container onSubmit={handleSubmit(onSubmit)}>
      <Styled.Card>
        <IconButton
          variant="outline"
          to={routes.dashboard}
          aria-label="back"
        >
          <HiOutlineArrowLeft size={16} />
        </IconButton>
        <TextField
          placeholder="ex: João da Silva"
          label="Nome completo"
          error={errors?.name?.message}
          {...register('name')}
        />
        <TextField
          placeholder="ex: email@email.com"
          label="Email"
          type="email"
          error={errors?.email?.message}
          {...register('email')}
        />
        <Controller
          control={control}
          name="cpf"
          render={({ field: { value, onChange } }) => (
            <TextField
              placeholder="ex: 111.111.111-11"
              label="CPF"
              error={errors?.cpf?.message}
              inputMode="numeric"
              onChange={(e) => {
                onChange(cpfMask(e.target.value));
              }}
              value={value}
            />
          )}
        />
        <TextField
          label="Data de admissão"
          type="date"
          error={errors?.admissionDate?.message}
          {...register('admissionDate')}
        />
        <Styled.ButtonGroup>
          <Button
            type="submit"
            disabled={isLoading}
            color="darkGreen"
            size="large"
          >
            Cadastrar
          </Button>
        </Styled.ButtonGroup>
      </Styled.Card>
    </Styled.Container>
  );
};

export default NewUserPage;
