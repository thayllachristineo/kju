import styled from 'styled-components';

export const Button = styled.button<{
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
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
  gap: 8px;
  height: ${(props) => props.height};
  outline: none;
  padding: ${(props) => props.padding};
  pointer-events: ${(props) => props.pointerEvents};
  text-decoration: none;
`;
