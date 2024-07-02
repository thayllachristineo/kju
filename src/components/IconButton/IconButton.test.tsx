import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import IconButton from '.';

describe('<IconButton />', () => {
  it('renders correctly with default variant', () => {
    render(<IconButton>Click me</IconButton>);
    const button = screen.getByRole('button', {
      name: 'Click me',
    });
    expect(button).toHaveStyle('border-color: transparent');
  });

  it('renders correctly with outline variant', () => {
    render(
      <IconButton variant="outline">Click me</IconButton>,
    );
    const button = screen.getByRole('button', {
      name: 'Click me',
    });
    expect(button).toHaveStyle('border-color: #64a98c');
  });

  it('calls onClick prop when clicked', async () => {
    const onClickMock = jest.fn();
    render(
      <IconButton onClick={onClickMock}>
        Click me
      </IconButton>,
    );

    const button = screen.getByRole('button', {
      name: 'Click me',
    });

    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders as a Link when "to" prop is provided', () => {
    render(
      <MemoryRouter>
        <IconButton to="/some-page">Click me</IconButton>
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', {
      name: 'Click me',
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/some-page');
  });
});
