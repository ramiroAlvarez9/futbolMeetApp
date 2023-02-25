import React from "react";
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { StyleSheet, View, Button, Text, Image } from "react-native";
import BackgroundLogin from '../assets/svgImages/backgroundImageLogin.svg'
import LogoFutMatch  from '../assets/svgImages/LogoFutbolMatch.svg'

const Login: React.FC = () => {

  const { globalFontFamily } = GlobalStyles();

  const styles = StyleSheet.create({

    //pixel size : 393 x 830
    backgroundLogin : { 
      position : 'absolute',
      zIndex : -1,
      height : '100%',
      width  : '100%',
      left   : '-10%'
    },
    fatherView: {
      width: "100%",
      height: "100%",
    },
    logoView: {
      height : '22.52%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    inputsAndSubmitButtonView: {
      flex: 2,
      display: "flex",
      alignItems: "center",

      inputs: {
        width: "90%",
      },
    },
    socialMediaView: {
      flex: 1,
    },
  });

  return (
    <>
  
      <View style = {styles.backgroundLogin} >
        <BackgroundLogin 
          width = {'100%'}
          height = {'100%'}
        />
      </View>
  
      <View 
        style={styles.fatherView}

      >

        <View style={styles.logoView}>

        <LogoFutMatch 
          width = {69}
          height = {69}
        />

        </View>

        <View style={styles.inputsAndSubmitButtonView}>
          <Text>2</Text>
        </View>

        <View style={styles.socialMediaView}>
          <Text>3</Text>
        </View>
      </View>
    </>
  );
};

export default Login;
