import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ConfirmationModal from '.';

describe('<ConfirmationModal />', () => {
  const getButtonByRole = (name: string) =>
    screen.getByRole('button', { name: name });

  it('renders correctly when open', () => {
    render(
      <ConfirmationModal
        isOpen
        onClose={jest.fn()}
        onConfirm={jest.fn()}
        title="Confirmação"
        message="Deseja realmente prosseguir?"
      />,
    );

    expect(
      screen.getByText('Confirmação'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Deseja realmente prosseguir?'),
    ).toBeInTheDocument();
    expect(
      getButtonByRole('Confirmar'),
    ).toBeInTheDocument();
    expect(getButtonByRole('Cancelar')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    const onCloseMock = jest.fn();
    render(
      <ConfirmationModal
        isOpen
        onClose={onCloseMock}
        onConfirm={jest.fn()}
        title="Confirmação"
        message="Deseja realmente prosseguir?"
      />,
    );

    await userEvent.click(getButtonByRole('Cancelar'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when the confirm button is clicked', async () => {
    const onConfirmMock = jest.fn();
    render(
      <ConfirmationModal
        isOpen
        onClose={jest.fn()}
        onConfirm={onConfirmMock}
        title="Confirmação"
        message="Deseja realmente prosseguir?"
      />,
    );

    await userEvent.click(getButtonByRole('Confirmar'));
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
