import { FC, useState } from 'react';
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
import ConfirmationModal from '~/components/ConfirmationModal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState<
    RegistrationStatus | 'DELETE'
  >();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentAction(undefined);
  };

  const handleOpenModal = (
    action: RegistrationStatus | 'DELETE',
  ) => {
    setCurrentAction(action);
    openModal();
  };

  const handleReprove = async () => {
    closeModal();
    if (status === RegistrationStatus.REPROVED) return;

    await setRegistrationStatus(
      id,
      RegistrationStatus.REPROVED,
    );
    setCurrentAction(undefined);

    onMutation?.();
  };

  const handleApprove = async () => {
    closeModal();
    if (status === RegistrationStatus.APPROVED) return;

    await setRegistrationStatus(
      id,
      RegistrationStatus.APPROVED,
    );
    setCurrentAction(undefined);

    onMutation?.();
  };

  const handleReviewAgain = async () => {
    closeModal();
    if (status === RegistrationStatus.REVIEW) return;

    await setRegistrationStatus(
      id,
      RegistrationStatus.REVIEW,
    );

    setCurrentAction(undefined);

    onMutation?.();
  };

  const handleDelete = async () => {
    closeModal();
    await deleteRegistration(id);

    setCurrentAction(undefined);


    onMutation?.();
  };

  const confirmationModalProps = {
    [RegistrationStatus.REPROVED]: {
      title: 'Reprovar registro',
      message:
        'Tem certeza que deseja reprovar esse registro?',
      onConfirm: handleReprove,
    },
    [RegistrationStatus.APPROVED]: {
      title: 'Aprovar registro',
      message:
        'Tem certeza que deseja aprovar esse registro?',
      onConfirm: handleApprove,
    },
    [RegistrationStatus.REVIEW]: {
      title: 'Revisar registro novamente',
      message:
        'Tem certeza que deseja revisar novamente esse registro?',
      onConfirm: handleReviewAgain,
    },
    DELETE: {
      title: 'Excluir registro',
      message:
        'Tem certeza que deseja excluir esse registro?',
      onConfirm: handleDelete,
    },
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
              onClick={() =>
                handleOpenModal(RegistrationStatus.REPROVED)
              }
              disabled={isLoading}
            >
              Reprovar
            </Button>
          )}
          {status !== RegistrationStatus.APPROVED && (
            <Button
              color="green"
              onClick={() =>
                handleOpenModal(RegistrationStatus.APPROVED)
              }
              disabled={isLoading}
            >
              Aprovar
            </Button>
          )}
          {status !== RegistrationStatus.REVIEW && (
            <Button
              color="orange"
              onClick={() =>
                handleOpenModal(RegistrationStatus.REVIEW)
              }
              disabled={isLoading}
            >
              Revisar novamente
            </Button>
          )}
        </div>
        <IconButton
          onClick={() => handleOpenModal('DELETE')}
        >
          <HiOutlineTrash />
        </IconButton>
      </Styled.Actions>
      {currentAction && (
        <ConfirmationModal
          isOpen={isModalOpen}
          title={
            confirmationModalProps[currentAction].title
          }
          message={
            confirmationModalProps[currentAction].message
          }
          onConfirm={
            confirmationModalProps[currentAction].onConfirm
          }
          onClose={closeModal}
        />
      )}
    </Styled.Card>
  );
};

export default RegistrationCard;
