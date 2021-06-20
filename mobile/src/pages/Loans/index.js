import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useIsFocused } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Title,
  LoansList,
  LoanContainer,
  LoanLine,
  LoanText,
} from './styles';

const Loans = () => {
  const [loans, setLoans] = useState();
  const { user } = useAuth();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getLoans() {
      const response = await api.get(`/loans/${user._id}`);

      setLoans(response.data.loans);
    }

    getLoans();
  }, [isFocused, user._id]);

  return (
    <Container>
      <Title>Empréstimos Solicitados</Title>
      <LoansList
        data={loans}
        keyExtractor={loan => loan._id}
        renderItem={({ item: loan }) => (
          <LoanContainer>
            <LoanLine>
              <Icon name="dollar-sign" size={16} color="#e63888" />
              <LoanText>{loan.loan}</LoanText>
            </LoanLine>

            <LoanLine>
              <Icon name="percent" size={16} color="#e63888" />
              <LoanText>{loan.interest}% ao mês</LoanText>
            </LoanLine>

            <LoanLine>
              <Icon name="calendar" size={16} color="#e63888" />
              <LoanText>{loan.firstInstallment}</LoanText>
            </LoanLine>

            <LoanLine>
              <Icon name="credit-card" size={16} color="#e63888" />
              <LoanText>
                {loan.installmentsQuantity} parcelas de {loan.installmentValue}
              </LoanText>
            </LoanLine>

            <LoanLine>
              <Icon name="dollar-sign" size={16} color="#e63888" />
              <LoanText>{loan.loanTotal}</LoanText>
            </LoanLine>
          </LoanContainer>
        )}
      />
    </Container>
  );
};

export default Loans;
