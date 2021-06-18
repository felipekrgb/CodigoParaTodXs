import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Loans = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button style={{ marginBottom: 20 }} title="Sair" onPress={signOut} />
    </View>
  );
};

export default Loans;
