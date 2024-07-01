import styled from 'styled-components';

export const Form = styled.form`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;

  @media only screen and (min-width: 768px) {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    margin-top: 16px;
    padding: 48px;
    width: 500px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;
