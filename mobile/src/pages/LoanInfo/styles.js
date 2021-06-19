import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${getStatusBarHeight() + 24}px 30px 40px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #e63888;
  font-family: 'Roboto-Medium';
  margin-bottom: 6px;
  text-align: center;
`;

export const InfoContainer = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 8px;
  margin-bottom: 16px;

  border-bottom-width: 1px;
  border-color: grey;
`;

export const InfoTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  color: #e63888;
  font-family: 'Roboto-Medium';
`;

export const InfoText = styled.Text`
  font-size: 20px;
  color: #8a1bc6;
  font-family: 'Roboto-Medium';
`;

export const AnswerContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 48%;
`;
