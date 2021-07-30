import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GREEN, WHITE } from '../common/colors';

interface ButtonState {
  title: string;
  onSubmit: () => void;
}

const Button: FunctionComponent<ButtonState> = ({ title, onSubmit }) => {
  const { btn, titleStyle } = styles;
  return (
    <TouchableOpacity style={btn} onPress={onSubmit}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: GREEN,
    borderRadius: 7,
  },
  titleStyle: {
    fontSize: 20,
    color: WHITE,
  },
});

export default Button;
