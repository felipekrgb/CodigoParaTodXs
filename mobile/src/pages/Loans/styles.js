import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 24}px 30px 40px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #e63888;
  font-family: 'Roboto-Medium';
  margin-bottom: 18px;
`;

export const LoansList = styled.FlatList`
  width: 100%;
  flex: 1;
`;

export const LoanContainer = styled.View`
  background-color: #8a1bc6;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;

  flex-direction: column;
`;

export const LoanLine = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const LoanText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 8px;
  font-family: 'Roboto-Medium';
`;

export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 24px;
`;

export const TitleEmpty = styled.Text`
  font-size: 32px;
  color: #e63888;
  font-family: 'Roboto-Medium';

  text-align: center;
`;
