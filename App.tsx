import React from "react";
import Login from "./src/components/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";


const App = () => {
  return (
    <>
      <SafeAreaProvider>
        
          <Login />
        
      </SafeAreaProvider>
    </>
  );
};

export default App;
