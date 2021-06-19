import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Title,
  InfoContainer,
  Info,
  InfoTitle,
  InfoText,
  AnswerContainer,
  ButtonContainer,
} from './styles';

const LoanInfo = ({ route }) => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const { loanInfo } = route.params;

  const handleSubmit = useCallback(async () => {
    console.log(user._id);

    try {
      await api.post('/loans', { loanInfo, userId: user._id });
      navigation.navigate('LoanCreated');
    } catch (err) {
      console.log(err.response.data);
    }
  }, [loanInfo, navigation, user]);

  return (
    <Container>
      <Title>Informações do Empréstimo</Title>
      <InfoContainer>
        <Info>
          <InfoTitle>Quantidade desejada de empréstimo</InfoTitle>
          <InfoText>{loanInfo.loan}</InfoText>
        </Info>
        <Info>
          <InfoTitle>Juros</InfoTitle>
          <InfoText>{loanInfo.interest}% ao mês</InfoText>
        </Info>
        <Info>
          <InfoTitle>Quantidade de parcelas</InfoTitle>
          <InfoText>
            {loanInfo.installmentsQuantity} parcelas de{' '}
            {loanInfo.installmentValue}
          </InfoText>
        </Info>
        <Info>
          <InfoTitle>Primeira parcela</InfoTitle>
          <InfoText>{loanInfo.firstInstallment}</InfoText>
        </Info>
        <Info>
          <InfoTitle>Total a pagar</InfoTitle>
          <InfoText>{loanInfo.loanTotal}</InfoText>
        </Info>

        <AnswerContainer>
          <ButtonContainer>
            <Button cancelButton onPress={() => navigation.goBack()}>
              Cancelar
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button onPress={handleSubmit}>Confirmar Empréstimo</Button>
          </ButtonContainer>
        </AnswerContainer>
      </InfoContainer>
    </Container>
  );
};

export default LoanInfo;
