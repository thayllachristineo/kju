import { ChangeEvent, FC, useState } from 'react';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import { HiRefresh } from 'react-icons/hi';

import Button from '~/components/Button';
import IconButton from '~/components/IconButton';
import TextField from '~/components/TextField';
import routes from '~/router/routes';
import { cpfMask } from '~/utils/cpf';

import * as Styled from './styles';

type Props = {
  fetchRegistrationByCpf: (cpf: string) => void;
  fetchRegistrations: () => void;
};

export const SearchBar: FC<Props> = ({
  fetchRegistrationByCpf,
  fetchRegistrations,
}) => {
  const [cpfValue, setCpfValue] = useState('');
  const [cpfError, setCpfError] = useState(false);
  const [madeRequest, setMadeRequest] = useState(false);

  const handleCpfChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setCpfValue(cpfMask(value));

    if (value && !cpfValidator.isValid(value)) {
      setCpfError(true);
    }

    if (!value) setCpfError(false);

    if (!value && madeRequest) {
      setMadeRequest(false);
      fetchRegistrations();
      setCpfError(false);
    }

    if (cpfValidator.isValid(value)) {
      setCpfError(false);
      setMadeRequest(true);
      fetchRegistrationByCpf(value.replace(/[^0-9]+/g, ''));
    }
  };
  return (
    <Styled.Container>
      <TextField
        placeholder="Digite um CPF válido"
        onChange={handleCpfChange}
        value={cpfValue}
        error={cpfError ? 'CPF inválido' : undefined}
      />
      <Styled.Actions>
        <IconButton
          variant="outline"
          aria-label="refetch"
          onClick={fetchRegistrations}
        >
          <HiRefresh />
        </IconButton>
        <Button
          size="large"
          color="darkGreen"
          to={routes.newUser}
        >
          Nova Admissão
        </Button>
      </Styled.Actions>
    </Styled.Container>
  );
};
