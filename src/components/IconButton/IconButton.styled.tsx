import styled from 'styled-components';

export const IconButton = styled.button<{
  borderColor?: string;
}>`
  align-items: center;
  background-color: transparent;
  border: 2px solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4px;
  width: fit-content;

  svg {
    color: #64a98c;
  }
`;
