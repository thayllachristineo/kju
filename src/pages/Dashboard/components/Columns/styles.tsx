import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  margin-top: 24px;
  overflow-x: auto;
`;

export const Column = styled.div<{
  backgroundColor?: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 32px;
  height: calc(100dvh - 200px);
`;

export const TitleColumn = styled.h3<{ color: string }>`
  color: ${(props) => props.color};
  margin: 24px;
`;

export const ColumnContent = styled.div`
  overflow: auto;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
`;
