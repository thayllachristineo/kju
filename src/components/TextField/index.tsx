import { InputHTMLAttributes, forwardRef } from 'react';

import * as Styled from './TextField.styled';

type Props = {
  label?: string;
  error?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <Styled.Container>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        <Styled.Input {...props} id={id} ref={ref} />
        <Styled.Error>{error}</Styled.Error>
      </Styled.Container>
    );
  },
);

export default TextField;
