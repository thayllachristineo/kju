import { FC, InputHTMLAttributes } from 'react';

import * as Styled from './TextField.styled';

type Props = {
  label?: string;
  error?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: FC<Props> = ({
  id,
  label,
  error,
  ...props
}) => {
  return (
    <div>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.Input {...props} />
      <Styled.Error>{error}</Styled.Error>
    </div>
  );
};

export default TextField;
