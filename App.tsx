import React from 'react';
import {StatusBar} from 'react-native';

import {BreweryApp} from './src/BreweryApp';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <BreweryApp />
    </>
  );
}

export default App;
