import { FC } from 'react';
import Modal from 'react-responsive-modal';

import Button from '~/components/Button';

import * as Styled from './ConfirmationModal.styled';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

const ConfirmationModal: FC<Props> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose} center>
      <Styled.Title>{title}</Styled.Title>
      <p>{message}</p>
      <Styled.ButtonGroup>
        <Button onClick={onConfirm} color="green">
          Confirmar
        </Button>
        <Button onClick={onClose}>Cancelar</Button>
      </Styled.ButtonGroup>
    </Modal>
  );
};

export default ConfirmationModal;
