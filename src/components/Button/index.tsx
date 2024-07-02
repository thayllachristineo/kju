import {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
} from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './Button.styled';

type Props = {
  size?: 'small' | 'large';
  color?: 'pink' | 'orange' | 'green' | 'darkGreen';
  loading?: boolean;
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  color = 'pink',
  disabled,
  size = 'small',
  to,
  ...props
}) => {
  const sizes = {
    small: {
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 400,
      height: 'auto',
      padding: '4px 16px',
    },
    large: {
      borderRadius: '36px',
      fontSize: '16px',
      fontWeight: 600,
      height: '48px',
      padding: '8px 32px',
      mobile: {
        fontSize: '12px',
        fontWeight: 500,
        height: '24px',
        padding: '4px 16px',
        width: '90px',
      },
    },
  }[size];

  const black = '#000';
  const white = '#fff';

  const colors = {
    darkGreen: { backgroundColor: '#64a98c', color: white },
    green: { backgroundColor: '#9be59b', color: black },
    orange: { backgroundColor: '#ffbe87', color: black },
    pink: { backgroundColor: '#ff919a', color: black },
  }[color];

  const disabledStyles = disabled
    ? {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        color: 'rgba(0, 0, 0, 0.26)',
        pointerEvents: 'none',
      }
    : {};

  return (
    <Styled.Button
      {...sizes}
      {...colors}
      {...disabledStyles}
      {...props}
      to={to}
      as={to ? Link : 'button'}
      disabled={disabled}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
