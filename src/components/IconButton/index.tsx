import { FC } from 'react';
import { Link } from 'react-router-dom';

import * as Style from './IconButton.styled';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  to?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: FC<Props> = ({
  variant = 'default',
  to,
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
    <Style.IconButton
      as={to ? Link : 'button'}
      to={to}
      {...props}
      {...variants}
    >
      {props.children}
    </Style.IconButton>
  );
};

export default IconButton;
