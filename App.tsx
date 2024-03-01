import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {colors} from './src/theme/colors';
import {BreweryApp} from './src/BreweryApp';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={'light-content'} />
      <BreweryApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {flex: 1, backgroundColor: colors.black},
});

export default App;
