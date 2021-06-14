// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImage from '../../assets/logo.png';

import { Container, Image, BackButton, BackButtonText } from './styles';

const SignUp = () => {
  const navigation = useNavigation();

  const incomeInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const signUpValidationSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    income: Yup.string().required('Renda mensal obrigatória'),
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string().required('Senha obrigatória'),
  });

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImage} />

            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                name: '',
                income: '',
                email: '',
                password: '',
              }}
              onSubmit={values => console.log(values)}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                  {console.log(errors)}
                  <Input
                    autoCapitalize="words"
                    name="name"
                    icon="user"
                    placeholder="Nome"
                    onChangeText={handleChange('name')}
                    value={values.name}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      incomeInputRef.current.focus();
                    }}
                    error={!!errors.name && !!touched.name}
                  />

                  <Input
                    ref={incomeInputRef}
                    currency
                    keyboardType="number-pad"
                    name="income"
                    icon="dollar-sign"
                    placeholder="Renda mensal"
                    onChangeText={handleChange('income')}
                    value={values.income}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      emailInputRef.current.focus();
                    }}
                    error={!!errors.income && !!touched.income}
                  />

                  <Input
                    ref={emailInputRef}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    name="email"
                    icon="mail"
                    placeholder="E-mail"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordInputRef.current.focus();
                    }}
                    error={!!errors.email && !!touched.email}
                  />

                  <Input
                    ref={passwordInputRef}
                    secureTextEntry
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                    textContentType="newPassword"
                    error={!!errors.password && !!touched.password}
                  />

                  <Button onPress={handleSubmit}>Criar conta</Button>
                </>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackButtonText>Voltar</BackButtonText>
      </BackButton>
    </>
  );
};

export default SignUp;
