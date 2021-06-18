import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';

import { PrivateValueStore } from '@react-navigation/native';
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
  ButtonText,
} from './styles';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [sliderAmount, setSliderAmount] = useState(1000);
  const [sliderInstallments, setSliderInstallments] = useState(6);

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
            email: '',
            amount: sliderAmount,
            installments: sliderInstallments,
            firstInstallment: new Date(),
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
              <DateButton>
                <ButtonText>30 jan</ButtonText>
                {showDatePicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
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
