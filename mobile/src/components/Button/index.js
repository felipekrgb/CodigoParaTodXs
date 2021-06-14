// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Container, ButtonText } from './styles';

const Button = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
