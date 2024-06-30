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
      <div>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        <Styled.Input {...props} ref={ref} />
        <Styled.Error>{error}</Styled.Error>
      </div>
    );
  },
);

export default TextField;
