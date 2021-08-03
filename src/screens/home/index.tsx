import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BLUE, WHITE } from '../../common/colors';
import ConvertMd5 from '../../helpers/ConvertMd5';
import Form from '../../components/forms/Form';
import { FormProps } from '../../components/forms/types';
import useColorMode from '../../common/hooks/useColorMode';

const Home = () => {
  const [result, setResult] = useState<string>('');
  const { color } = useColorMode();
  const { content, title, contentIcon } = styles;

  const handleOnSubmit = ({ values: { password } }: FormProps) => {
    const encodedVal = ConvertMd5(password);
    setResult(encodedVal);
  };
  const handleClipBoard = () => {
    Clipboard.setString(result);
    return Alert.alert('Copied code', `${result}`);
  };

  return (
    <>
      <Form handleOnSubmit={values => handleOnSubmit(values)} />
      {result !== '' && (
        <TouchableOpacity style={content} onPress={handleClipBoard}>
          <Text style={[title, { color }]}>{result}</Text>
          <View style={contentIcon}>
            <Icon name="clipboard-text-multiple" size={28} color={WHITE} />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: BLUE,
  },
  contentIcon: {
    position: 'absolute',
    bottom: 7,
    right: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginRight: 15,
  },
});
export default Home;
