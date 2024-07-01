import styled from 'styled-components';
import Button from '~/components/Button';
import IconButton from '~/components/IconButton';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;

  @media only screen and (min-width: 768px) {
    gap: 16px;
    flex-direction: initial;
  }
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    gap: 16px;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const CustomIconButton = styled(IconButton)`
  display: flex;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const CustomButton = styled(Button)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
