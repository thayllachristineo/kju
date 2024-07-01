import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(36, 28, 21, 0.3);
  font-size: 16px;
  font-weight: normal;
  line-height: 18px;
  margin-top: 4px;
  min-height: 36px;
  padding: 0 8px;
  transition: all 0.2s ease-in-out 0s;
  :focus {
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
    outline: none;
  }
`;

export const Label = styled.label`
  color: #24261a;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
`;

export const Error = styled.span`
  color: #ff0000;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  margin-top: 4px;
`;
