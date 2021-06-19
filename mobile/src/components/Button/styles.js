import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background-color: #8a1bc6;
  border-radius: 10px;
  margin-top: 12px;

  justify-content: center;
  align-items: center;

  ${props =>
    props.cancelButton &&
    css`
      background-color: #b20000;
    `}
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  text-align: center;
  color: #fff;
  font-size: 18px;
`;
