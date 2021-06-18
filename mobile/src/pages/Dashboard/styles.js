import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

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

export const HeaderTitle = styled.View`
  display: flex;
  flex-direction: column;
`;

export const HeaderWelcoming = styled.Text`
  color: #000;
  font-size: 20px;
  font-family: 'Roboto-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #e63888;
  font-family: 'Roboto-Medium';
`;

export const HeaderScore = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  line-height: 32px;
`;

export const Score = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';

  ${props =>
    props.colorScore &&
    css`
      color: ${props.colorScore};
    `};
`;

export const FormContainer = styled.View`
  flex: 1;
  padding: 16px 30px;
`;

export const LoanTitle = styled.Text`
  font-size: 24px;
  color: #e63888;
  font-family: 'Roboto-Medium';
  margin-bottom: 6px;
`;

export const LoanQuestion = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 18px;
  color: #000;
  font-family: 'Roboto-Regular';
`;

export const LoanText = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
  color: #e63888;
  font-family: 'Roboto-Medium';
`;

export const DateButton = styled(BorderlessButton)`
  width: 20%;
  height: 26px;
`;

export const DateButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #e63888;
  font-size: 18px;
`;
