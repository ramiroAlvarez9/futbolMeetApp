import React, { useEffect, useState } from "react";
import Login from "./src/components/Login";
import CreaTuCuenta from "./src/components/CreaTuCuenta";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Home from "./src/components/Home";

const AppStackNavigation = createNativeStackNavigator();

const App: React.FC = () => {
  const [isSignedInGoogleState, setIsSignedInGoogleState] =
    useState<boolean>(false);

  /* Google Login  */
  const isSignedInGoogle = async () => {
    const isSignedIn: boolean = await GoogleSignin.isSignedIn();
    setIsSignedInGoogleState(isSignedIn);
  };
  /*-------------------------------------*/

  useEffect(() => {
    isSignedInGoogle();
    console.log(isSignedInGoogleState);
  }, []);

  return (
    <>
      <SafeAreaProvider>
        {!isSignedInGoogleState ?
          <NavigationContainer>
            <AppStackNavigation.Navigator>
              <AppStackNavigation.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />

              <AppStackNavigation.Screen
                name="Crea tu cuenta"
                component={CreaTuCuenta}
                options={{
                  title: "",
                  presentation: "modal",
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                  headerTransparent: true,
                }}
              />
            </AppStackNavigation.Navigator>
          </NavigationContainer>
        
        : 
        
          <NavigationContainer>
            <AppStackNavigation.Navigator>
              <AppStackNavigation.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </AppStackNavigation.Navigator>
          </NavigationContainer>
        }
      </SafeAreaProvider>
    </>
  );
};

export default App;
