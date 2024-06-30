import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background: rgb(255, 117, 0);
  background: linear-gradient(
    258deg,
    rgba(255, 117, 0, 1) 8%,
    rgba(232, 5, 55, 1) 53%
  );
  display: flex;
  height: 64px;
  padding: 0px 24px;
  position: fixed;
  top: 0;
  width: 100%;

  h1 {
    color: #fff;
    font-size: 24px;
  }
`;
