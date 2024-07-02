import * as React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import TextField from '.';

describe('<TextField />', () => {
  it('renders with label and input correctly', () => {
    render(<TextField id="test-input" label="Nome" />);

    const label = screen.getByLabelText('Nome');
    expect(label).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('displays error message when error prop is provided', () => {
    render(
      <TextField
        id="test-input"
        label="Nome"
        error="Campo obrigatório"
      />,
    );

    const error = screen.getByText('Campo obrigatório');
    expect(error).toBeInTheDocument();
  });

  it('calls onChange prop when input value changes', async () => {
    const handleChange = jest.fn();
    render(
      <TextField
        id="test-input"
        label="Nome"
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    await fireEvent.change(input, {
      target: { value: 'Novo valor' },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'Novo valor',
        }),
      }),
    );
  });

  it('passes other input props correctly', () => {
    render(
      <TextField
        id="test-input"
        label="Nome"
        type="email"
        placeholder="Digite seu email"
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute(
      'placeholder',
      'Digite seu email',
    );
  });

  it('works with ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <TextField id="test-input" label="Nome" ref={ref} />,
    );

    expect(ref.current).toBeInTheDocument();
  });
});
