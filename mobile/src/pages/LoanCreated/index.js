import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';

import { Container, Title, Description } from './styles';

const LoanInfo = () => {
  const { reset } = useNavigation();

  return (
    <Container>
      <Icon name="check" size={120} color="#04d361" />

      <Title>Seu empréstimo foi realizado com sucesso!</Title>
      <Description>Cheque sua aba de empréstimo para acompanhar</Description>
      <Button
        onPress={() =>
          reset({
            routes: [{ name: 'Dashboard' }],
            index: 0,
          })
        }
      >
        Voltar
      </Button>
    </Container>
  );
};

export default LoanInfo;
