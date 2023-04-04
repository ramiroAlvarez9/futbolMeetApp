import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import CreaTuCuenta from "./CreaTuCuenta";

const AppStackNavigation = createNativeStackNavigator();

const LoginStackNavigation: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default LoginStackNavigation;
