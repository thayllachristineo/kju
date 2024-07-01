import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 4px solid #fff;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px;
  padding: 16px;

  h3,
  p {
    margin: 0;
  }

  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const IconAndText = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const Email = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  margin-top: 8px;

  div {
    display: flex;
    gap: 4px;
  }

  svg {
    cursor: pointer;
  }
`;
