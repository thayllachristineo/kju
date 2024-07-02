import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import routes from '~/router/routes';

import Button from '.';

describe('<Button />', () => {
  it('renders correctly with small size', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '400',
      padding: '4px 16px',
    });
  });

  it('renders correctly with large size', () => {
    render(<Button size="large">Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      borderRadius: '36px',
      fontSize: '16px',
      fontWeight: 600,
      height: '48px',
      padding: '8px 32px',
    });
  });

  it('calls onClick prop when clicked', async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const button = screen.getByRole('button', {
      name: 'Click me',
    });

    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders as disabled when disabled prop is true', async () => {
    render(<Button disabled>Click me</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveStyle({
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      color: 'rgba(0, 0, 0, 0.26)',
      pointerEvents: 'none',
    });
  });

  it('renders as a Link when "to" prop is provided', () => {
    render(
      <>
        <MemoryRouter>
          <Button size="large" to={routes.newUser}>
            Click me
          </Button>
        </MemoryRouter>
      </>,
    );

    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('href', routes.newUser);
  });
});
