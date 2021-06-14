import React, { useRef } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImage from '../../assets/logo.png';

import {
  Container,
  Image,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn = () => {
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);

  const { signIn, user } = useAuth();

  console.log(user);

  const signInValidationSchema = Yup.object().shape({
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
              validationSchema={signInValidationSchema}
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={async values => {
                try {
                  await signIn(values);

                  console.log('entrou na conta');
                } catch (err) {
                  Alert.alert(
                    'Ocorreu um erro ao realizar o login!',
                    err.response.data.error,
                  );
                }
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                  <Input
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
                    error={!!errors.password && !!touched.password}
                  />

                  <Button onPress={handleSubmit}>Entrar</Button>
                </>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#fff" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
