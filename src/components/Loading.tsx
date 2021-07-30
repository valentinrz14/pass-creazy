import React, { FunctionComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { BLUE } from '../common/colors';

interface LoadingState {
  isEnabled: boolean;
}

const Loading: FunctionComponent<LoadingState> = ({ isEnabled }) => {
  return (
    <View style={styles.container}>
      {isEnabled && <ActivityIndicator size="large" color={BLUE} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
  },
});
export default Loading;
