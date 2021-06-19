import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderWelcoming,
  HeaderScore,
  Score,
  UserName,
  FormContainer,
  LoanTitle,
  LoanQuestion,
  LoanText,
  DateButton,
  DateButtonText,
  LoanInfo,
  LoanInfoText,
  DateButtonView,
} from './styles';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  const formatDate = useCallback(date => {
    const months = [
      'jan',
      'fev',
      'mar',
      'abr',
      'maio',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ];

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${day} ${months[date.getMonth()]}`;
  }, []);

  const [timestampDate, setTimestampDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(formatDate(timestampDate));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loanAmount, setLoanAmount] = useState(1000);
  const [loanTotal, setLoanTotal] = useState(
    loanAmount + (loanAmount * user.interest) / 100,
  );
  const [installmentsQuantity, setInstallmentsQuantity] = useState(6);
  const [installmentValue, setInstallmentValue] = useState(
    loanTotal / installmentsQuantity,
  );

  const handleLoanAmountChange = useCallback(
    value => {
      setLoanAmount(value);
      setLoanTotal(value + (value * user.interest) / 100);
      setInstallmentValue(
        (value + (value * user.interest) / 100) / installmentsQuantity,
      );
    },
    [installmentsQuantity, user.interest],
  );

  const handleInstallmentsQuantityChange = useCallback(
    value => {
      setInstallmentsQuantity(value);
      setInstallmentValue(loanTotal / value);
    },
    [loanTotal],
  );

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state);
  }, []);

  const handleDateChanged = useCallback(
    value => {
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }

      const changedDate = formatDate(value);

      setTimestampDate(value);
      setFormattedDate(changedDate);
    },
    [formatDate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          <HeaderWelcoming>
            Bem vindo, <UserName>{user.name}</UserName>
          </HeaderWelcoming>
          <HeaderScore>
            Seu score é{'  '}
            <Score
              colorScore={
                user.score <= 300
                  ? '#8e0000'
                  : user.score <= 700
                  ? '#DBA800'
                  : '#198c19'
              }
            >
              {user.score}
            </Score>
          </HeaderScore>
        </HeaderTitle>

        <TouchableOpacity onPress={signOut}>
          <Icon
            name="power"
            size={20}
            color="#e63888"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
      </Header>

      <FormContainer>
        <Formik
          initialValues={{
            loanAmount,
            installmentsQuantity,
            firstInstallment: timestampDate,
          }}
          onSubmit={values => {
            const loanInfo = {
              loan: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(values.loanAmount),
              loanTotal: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(loanTotal),
              firstInstallmentFormatted: formatDate(values.firstInstallment),
              installmentsQuantity,
              installmentValue: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(installmentValue),
              interest: user.interest,
            };

            navigation.navigate('LoanInfo', { loanInfo });
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <LoanTitle>Empréstimo</LoanTitle>
              <LoanQuestion>De quanto você precisa?</LoanQuestion>
              <LoanText>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(loanAmount)}
              </LoanText>
              <Slider
                name="loanAmount"
                value={values.loanAmount}
                onValueChange={value => {
                  handleLoanAmountChange(value);
                  values.loanAmount = value;
                }}
                onChangeText={handleChange('loanAmount')}
                style={{ width: '100%', height: 60 }}
                minimumValue={1000}
                maximumValue={50000}
                step={500}
                thumbTintColor="#8a1bc6"
                minimumTrackTintColor="#8a1bc6"
                maximumTrackTintColor="#e63888"
              />
              <LoanQuestion>Em quantas parcelas você quer pagar?</LoanQuestion>
              <LoanText>
                {installmentsQuantity} parcelas de{' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(installmentValue)}
              </LoanText>
              <Slider
                name="installmentsQuantity"
                value={values.installmentsQuantity}
                onValueChange={value => {
                  handleInstallmentsQuantityChange(value);
                  values.installmentsQuantity = value;
                }}
                onChangeText={handleChange('installmentsQuantity')}
                style={{ width: '100%', height: 60 }}
                minimumValue={6}
                maximumValue={72}
                step={6}
                thumbTintColor="#8a1bc6"
                minimumTrackTintColor="#8a1bc6"
                maximumTrackTintColor="#e63888"
              />
              <LoanQuestion>Quando você deseja começar a pagar?</LoanQuestion>
              <DateButtonView>
                <DateButton onPress={handleToggleDatePicker}>
                  <DateButtonText>{formattedDate}</DateButtonText>
                  {showDatePicker && (
                    <DateTimePicker
                      minimumDate={new Date()}
                      mode="date"
                      display="calendar"
                      onChange={(event, value) => {
                        if (event.type === 'dismissed') {
                          handleToggleDatePicker();
                          return;
                        }

                        values.firstInstallment = value;

                        handleDateChanged(value);
                      }}
                      value={values.firstInstallment}
                    />
                  )}
                </DateButton>
              </DateButtonView>

              <LoanInfo>
                <LoanInfoText>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(loanTotal)}
                </LoanInfoText>
                <LoanInfoText>{user.interest}% a.m</LoanInfoText>
              </LoanInfo>

              <Button onPress={handleSubmit}>Visualizar informações</Button>
            </>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Dashboard;
