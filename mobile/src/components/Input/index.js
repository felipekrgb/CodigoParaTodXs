import React, { useState, useCallback, forwardRef } from 'react';
import CurrencyInput from 'react-native-currency-input';

import { Container, TextInput, Icon } from './styles';

const Input = ({ name, icon, value, currency, error, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [valueCurrency, setValueCurrency] = React.useState();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={
          error ? '#c53030' : isFocused || isFilled ? '#8a1bc6' : '#666360'
        }
      />

      {!currency ? (
        <TextInput
          ref={ref}
          placeholderTextColor="#666360"
          value={value}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      ) : (
        <CurrencyInput
          ref={ref}
          placeholderTextColor="#666360"
          style={{ fontSize: 16, fontFamily: 'Roboto-Regular' }}
          value={valueCurrency}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeValue={setValueCurrency}
          prefix="R$"
          delimiter="."
          separator=","
          precision={2}
          {...rest}
        />
      )}
    </Container>
  );
};

export default forwardRef(Input);
