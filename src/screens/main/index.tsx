import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Home from '../home';
import { LocAppLogo } from '../../assets/icons/icons';
import useColorMode from '../../common/hooks/useColorMode';

const Main = () => {
  const { color, backgroundColor } = useColorMode();
  const { container, contentLogo, logo, title } = styles;

  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  console.log(color);

  return (
    <View style={[container, { backgroundColor }]}>
      <Text style={[title, { color }]}>LocApp</Text>
      <View style={contentLogo}>
        <Image source={LocAppLogo} style={logo} />
      </View>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  contentLogo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginVertical: 10,
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'PaletteMosaic-Regular',
  },
});

export default Main;
