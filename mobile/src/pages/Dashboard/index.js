import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import { Container, Header, HeaderTitle, UserName } from './styles';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
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
    </Container>
  );
};

export default Dashboard;
