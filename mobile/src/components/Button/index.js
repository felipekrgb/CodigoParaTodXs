import React from 'react';

import { Container, ButtonText } from './styles';

const Button = ({ children, cancelButton = false, ...rest }) => (
  <Container cancelButton={cancelButton} {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
