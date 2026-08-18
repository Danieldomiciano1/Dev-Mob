import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

function ComponenteLogin({ placeholder }) {
  const [valor, setValor] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={valor}
      onChangeText={setValor}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default ComponenteLogin;
