import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FirebaseSocialAuth from "./src/FirebaseConfigCustomHooks/FirebaseSocialAuth";
import LoginStackNavigation from "./src/components/LoginStackNavigation";
import HomeStackNavigation from "./src/components/HomeStackNavigation";

const App: React.FC = () => {

  const { isSignedInGoogle } = FirebaseSocialAuth();
  
  useEffect(() => {
    isSignedInGoogle();
  }, []);

  return (
    <>
      <SafeAreaProvider>
        
        { !isSignedInGoogle() ?  <HomeStackNavigation /> : <LoginStackNavigation /> }

      </SafeAreaProvider>
    </>
  );
};

export default App;
