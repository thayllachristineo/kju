import { FC } from 'react';

import * as Style from './IconButton.styled';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: FC<Props> = ({
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: {
      borderColor: 'transparent',
    },
    outline: {
      borderColor: '#64a98c',
    },
  }[variant];

  return (
    <Style.IconButton {...variants} {...props}>
      {props.children}
    </Style.IconButton>
  );
};

export default IconButton;
