import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import { BLACK, BLUE, GREY, WHITE, RED } from '../common/colors';
import Button from '../components/Button';
import Loading from '../components/Loading';
import ConvertMd5 from '../helpers/ConvertMd5';

const Home = () => {
  const { content, title } = styles;
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    if (password !== null && password !== '' && password.length >= 8) {
      setLoading(true);
      const encodedVal = ConvertMd5(password);
      setResult(encodedVal);
      setError('');
      if (encodedVal) {
        setLoading(false);
      }
    } else {
      setError('The password needs more than 8 characters');
    }
  };
  const colorScheme = useColorScheme();
  const colorInput = colorScheme === 'light' ? BLACK : WHITE;
  return (
    <View style={{ justifyContent: 'center' }}>
      <View style={styles.contentInput}>
        <TextInput
          style={[styles.input, { color: colorInput }]}
          placeholder="Pass"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={GREY}
          secureTextEntry
        />
        <TextInput
          style={[styles.input, { color: colorInput }]}
          placeholder="Confirm"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          placeholderTextColor={GREY}
          secureTextEntry
        />
        {error !== '' && (
          <Text style={{ textAlign: 'center', color: RED }}>{error}</Text>
        )}
      </View>
      <Button title="Click me" onSubmit={handleSubmit} />
      {loading && <Loading isEnabled={true} />}
      {!loading && result !== '' && (
        <View style={content}>
          <Text style={title}>{result}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: BLUE,
  },
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
  },
  contentInput: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    fontSize: 17,
    margin: 8,
    paddingLeft: 8,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: GREY,
  },
});
export default Home;
