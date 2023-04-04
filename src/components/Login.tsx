import React from "react";
import BackgroundLoginComponent from "./LoginComponents/BackgroundLogin";
import LogoContainer from "./LoginComponents/LogoContainer";
import RegistroManualComponent from "./LoginComponents/RegistroManual";
import { View } from "react-native";
import InputsLoginContainer from "./LoginComponents/InputsLoginContainer";

interface Props {
  navigation: any;
}

const Login = ({ navigation }: Props) => {
  return (
    <>
    
    <BackgroundLoginComponent />

      <View style={{ width : '100%', height : '100%',}}>
        
        <LogoContainer />
        
        <InputsLoginContainer />
     
        <RegistroManualComponent navigation={navigation} />
      
      </View>
    
    </>
  );
};

export default Login;
