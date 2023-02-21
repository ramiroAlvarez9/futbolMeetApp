
import React from 'react';
import Login from './components/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet, Text } from 'react-native';
import GlobalStyles from './globalStyles/GlobalStyles';


const App = () => {



  return (
    <>
      <SafeAreaProvider  >

          <Login
          />
        
      </SafeAreaProvider >
    </>
  );
};


export default App;
