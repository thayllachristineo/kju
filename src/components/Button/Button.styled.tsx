import styled, { css } from 'styled-components';

export const Button = styled.button<{
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  mobile?: {
    fontSize?: string;
    fontWeight?: string;
    height?: string;
    padding?: string;
    width?: string;
  };
  padding?: string;
  pointerEvents?: string;
}>`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  color: ${(props) => props.color};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  justify-content: center;
  height: ${(props) => props.height};
  outline: none;
  padding: ${(props) => props.padding};
  pointer-events: ${(props) => props.pointerEvents};
  text-decoration: none;

  ${({ mobile }) =>
    mobile &&
    css`
      @media only screen and (max-width: 768px) {
        font-size: ${mobile?.fontSize};
        font-weight: ${mobile?.fontWeight};
        height: ${mobile?.height};
        padding: ${mobile?.padding};
        width: ${mobile?.width};
      }
    `};
`;
