import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";

const AppStackNavigation = createNativeStackNavigator();

const HomeStackNavigation: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <AppStackNavigation.Navigator>
          <AppStackNavigation.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </AppStackNavigation.Navigator>
      </NavigationContainer>
    </>
  );
};

export default HomeStackNavigation;
