import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Home from './src/screens/home';
import { BLACK, WHITE } from './src/common/colors';

const App = () => {
  const colorScheme = useColorScheme();
  const colorTitle = colorScheme === 'light' ? BLACK : WHITE;
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colorTitle }]}>LocApp</Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
});

export default App;
