import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, ButtonProps } from 'react-native';
import { GREEN, WHITE } from '../../common/colors';

const Button: FunctionComponent<ButtonProps> = ({ title, ...props }) => {
  const { btn, titleStyle } = styles;
  return (
    <TouchableOpacity {...props} style={btn}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
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
