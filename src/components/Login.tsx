import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons"
import GlobalStyles from "../globalStyles/GlobalStyles";
import { StyleSheet, View, Button, Text, Image } from "react-native";
import BackgroundLogin from '../assets/svgImages/backgroundImageLogin.svg'
import LogoFutMatch from '../assets/svgImages/LogoFutbolMatch.svg'
import { Input } from '@rneui/themed';


const Login: React.FC = () => {


  const { interRegular } = GlobalStyles();

  const styles = StyleSheet.create({

    //pixel size : 393 x 830
    backgroundLogin: {
      position: 'absolute',
      zIndex: -1,
    },

    fatherView: {
      width: "100%",
      height: "100%",
    },
    logoView: {
      height: '25.59%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    },
    inputsAndSubmitButtonView: {
      height: ' 53.08%',
      display: "flex",
      alignItems: 'center',

      inputsSubmitContainer: {

        width: '69.74%',
        height: '100%',
        display: 'flex',

      }

    },
    socialMediaView: {
      flex: 1,
    },
  });

  return (
    <>

      <View style={styles.backgroundLogin} >
        <BackgroundLogin

        />
      </View>

      <View
        style={styles.fatherView}

      >
        {/*LOGO CONTAINER */}
        <View style={styles.logoView}>

          <LogoFutMatch
            width={69}
            height={69}
          />

        </View>
        {/*-------------- */}

        {/*INPUTS, SUBMIT BUTTON, SOCIAL NETWORKS CONTAINER*/}

        <View style={styles.inputsAndSubmitButtonView} >

          <View style={styles.inputsAndSubmitButtonView.inputsSubmitContainer}>

            <View style={{ marginBottom: '11.1%' }}>
              <Input
                placeholder='Usuario'
                inputStyle={{
                  height: '11.27%',
                  fontFamily: interRegular().fontFamily,
                  fontSize: 16
                }}
                leftIcon={
                  <Ionicons
                    name='person-outline'
                    size={24}
                    color='#DADADA'
                  />
                }

              />
            </View>


            <Input
              placeholder='Contraseña'
              inputStyle={{
                height: '11.27%',
                fontFamily: interRegular().fontFamily,
                fontSize: 16
              }}
              leftIcon={
                <Octicons
                  name='lock'
                  size={24}
                  color='#DADADA'
                />
              }
            />




          </View>
        </View>
        {/*----------------------------------------------- */}

      </View>
    </>
  );
};

export default Login;
