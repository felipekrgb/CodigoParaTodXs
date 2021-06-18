import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';

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
} from './styles';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(() => {
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
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [sliderAmount, setSliderAmount] = useState(1000);
  const [sliderInstallments, setSliderInstallments] = useState(6);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state);
  }, []);

  const handleDateChanged = useCallback((event, changedDate) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

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

    const day =
      changedDate.getDate() < 10
        ? `0${changedDate.getDate()}`
        : changedDate.getDate();

    setDate(changedDate);
    setFormattedDate(`${day} ${months[changedDate.getMonth()]}`);
  }, []);

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
            amount: sliderAmount,
            installments: sliderInstallments,
            firstInstallment: date,
          }}
          onSubmit={values => {
            console.log('entrei');
            console.log(values);
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <LoanTitle>Empréstimo</LoanTitle>
              <LoanQuestion>De quanto você precisa?</LoanQuestion>
              <LoanText>R$ {sliderAmount}</LoanText>
              <Slider
                name="amount"
                value={values.amount}
                onValueChange={value => {
                  setSliderAmount(value);
                  values.amount = value;
                }}
                onChangeText={handleChange('amount')}
                style={{ width: '100%', height: 60 }}
                minimumValue={1000}
                maximumValue={50000}
                step={500}
                thumbTintColor="#8a1bc6"
                minimumTrackTintColor="#8a1bc6"
                maximumTrackTintColor="#e63888"
              />
              <LoanQuestion>Em quantas parcelas você quer pagar?</LoanQuestion>
              <LoanText>{sliderInstallments} parcelas</LoanText>
              <Slider
                name="installments"
                value={values.installments}
                onValueChange={value => {
                  setSliderInstallments(value);
                  values.installments = value;
                }}
                onChangeText={handleChange('installments')}
                style={{ width: '100%', height: 60 }}
                minimumValue={6}
                maximumValue={72}
                step={6}
                thumbTintColor="#8a1bc6"
                minimumTrackTintColor="#8a1bc6"
                maximumTrackTintColor="#e63888"
              />
              <LoanQuestion>Quando você deseja começar a pagar?</LoanQuestion>
              <DateButton onPress={handleToggleDatePicker}>
                <DateButtonText>{formattedDate}</DateButtonText>
                {showDatePicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
                    onChange={(event, value) => {
                      if (event.type === 'dismissed') {
                        handleToggleDatePicker();
                        return;
                      }

                      values.firstInstallment = value;

                      handleDateChanged(event, value);
                    }}
                    value={values.firstInstallment}
                  />
                )}
              </DateButton>

              <Button onPress={handleSubmit}>Visualizar informações</Button>
            </>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Dashboard;
