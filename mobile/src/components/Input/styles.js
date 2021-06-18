import styled, { css } from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #fff;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    !props.isFilled &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #8a1bc6;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #8a1bc6;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
