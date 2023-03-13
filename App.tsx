import React,{useEffect} from "react";
import Login from "./src/components/Login";
import CreaTuCuenta from "./src/components/CreaTuCuenta";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import Home from "./src/components/Home";

const AppStackNavigation = createNativeStackNavigator();

const App = () => {

  /* Google Login  */
  const isSignedInGoogle = async () => {
    
    const isSignedIn : boolean = await GoogleSignin.isSignedIn();
    console.log(isSignedIn);
  };
  /*-------------------------------------*/ 
  
  useEffect (() =>{
    
    isSignedInGoogle();
    

  },[])
  /*
     <SafeAreaProvider>
        <NavigationContainer>
          <AppStackNavigation.Navigator>
            
            
            <AppStackNavigation.Screen
              name="Login"
              component={Login}
              options=
              {{ 
                headerShown: false
              }}
            />
            <AppStackNavigation.Screen
              name="Crea tu cuenta"
              component={CreaTuCuenta}
              options= 
              {{
                  title : '',
                  presentation: "modal",
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                  headerTransparent: true,
              }}
              
            />


          </AppStackNavigation.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    
  */ 
  
    return (
    <>

    
      <Home />
    
    
      
    
    
    </>
  );
};

export default App;
