import React, { FunctionComponent } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { GREY } from '../../common/colors';
import useColorMode from '../../common/hooks/useColorMode';

const Input: FunctionComponent<TextInputProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
}) => {
  const { color } = useColorMode();

  const { input } = styles;
  return (
    <TextInput
      style={[input, { color }]}
      placeholder={placeholder}
      placeholderTextColor={GREY}
      autoCapitalize="none"
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 17,
    marginVertical: 8,
    paddingLeft: 8,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: GREY,
  },
});

export default Input;
