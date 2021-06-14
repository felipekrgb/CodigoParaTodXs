import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #eee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-family: 'Roboto-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #e63888;
  font-family: 'Roboto-Medium';
`;
