import { FC } from 'react';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
  HiOutlineIdentification,
} from 'react-icons/hi';

import * as Styled from './styles';

import Button from '~/components/Button';
import IconButton from '~/components/IconButton';
import {
  deleteRegistration,
  setRegistrationStatus,
} from '~/services/registration';
import {
  Registration,
  RegistrationStatus,
} from '~/types/registration';

type Props = {
  data: Registration;
  isLoading?: boolean;
  onMutation: () => void;
};

const RegistrationCard: FC<Props> = ({
  data: {
    admissionDate,
    id,
    email,
    employeeName,
    status,
    cpf,
  },
  isLoading,
  onMutation,
}) => {
  const handleReprove = async () => {
    if (status === RegistrationStatus.REPROVED) return;

    await setRegistrationStatus(
      id,
      RegistrationStatus.REPROVED,
    );

    onMutation?.();
  };

  const handleApprove = async () => {
    if (status === RegistrationStatus.APPROVED) return;

    await setRegistrationStatus(
      id,
      RegistrationStatus.APPROVED,
    );

    onMutation?.();
  };

  const handleReviewAgain = async () => {
    if (status === RegistrationStatus.REVIEW) return;

    await setRegistrationStatus(
      id,
      RegistrationStatus.REVIEW,
    );

    onMutation?.();
  };

  const handleDelete = async () => {
    await deleteRegistration(id);

    onMutation?.();
  };

  return (
    <Styled.Card>
      <Styled.IconAndText>
        <HiOutlineUser />
        <h3>{employeeName}</h3>
      </Styled.IconAndText>
      <Styled.IconAndText>
        <HiOutlineMail />
        <p>{email}</p>
      </Styled.IconAndText>
      <Styled.IconAndText>
        <HiOutlineCalendar />
        <span>{admissionDate}</span>
      </Styled.IconAndText>
      <Styled.IconAndText>
        <HiOutlineIdentification />
        <span>{cpfValidator.format(cpf)}</span>
      </Styled.IconAndText>
      <Styled.Actions>
        <div>
          {status !== RegistrationStatus.REPROVED && (
            <Button
              color="pink"
              onClick={handleReprove}
              disabled={isLoading}
            >
              Reprovar
            </Button>
          )}
          {status !== RegistrationStatus.APPROVED && (
            <Button
              color="green"
              onClick={handleApprove}
              disabled={isLoading}
            >
              Aprovar
            </Button>
          )}
          {status !== RegistrationStatus.REVIEW && (
            <Button
              color="orange"
              onClick={handleReviewAgain}
              disabled={isLoading}
            >
              Revisar novamente
            </Button>
          )}
        </div>
        <IconButton onClick={handleDelete}>
          <HiOutlineTrash />
        </IconButton>
      </Styled.Actions>
    </Styled.Card>
  );
};

export default RegistrationCard;
