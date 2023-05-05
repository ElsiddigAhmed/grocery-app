/**
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import * as Screens from '../screens';
import BaseNavigation from '../navigations/Base.Navigation';
const App = () => {
  return (
    <NavigationContainer>
      <BaseNavigation />
    </NavigationContainer>
  );
};

export default App;
