import { FC, PropsWithChildren } from 'react';

import * as Styled from './Header.styled';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.Header>{children}</Styled.Header>;
};

export default Header;
