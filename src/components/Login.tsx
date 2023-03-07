import React, { useState } from "react";
import BackgroundLoginComponent from "./LoginComponents/BackgroundLogin";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { StyleSheet, View, Text } from "react-native";
import { Input, Switch, Button, SocialIcon } from "@rneui/themed";
import LogoFutMatch from "../assets/svgImages/LogoFutbolMatch.svg";
import RegistroManualComponent from "./LoginComponents/RegistroManual";

interface Props  {
  navigation : any;
}

const Login = ( ) => 
{
  const [switchStateIsOpen, setSwitchStateIsOpen] = useState<boolean>(false);

  return (
    <>
      <BackgroundLoginComponent />

      <View style={styles.fatherView}>
        {/*LOGO CONTAINER */}

        <View style={styles.logoView}>
          <LogoFutMatch width={69} height={69} />
        </View>

        {/*-------------- */}

        {/*INPUTS, SUBMIT BUTTON, SOCIAL NETWORKS CONTAINER*/}

        <View style={styles.inputsAndSubmitButtonView}>
          <View style={styles.inputsSubmitContainer}>
            {/*Inputs */}
            <View style={{ marginBottom: "11.1%" }}>
              <Input
                placeholder="Usuario"
                inputStyle={{
                  height: "11.27%",
                  fontFamily: interRegular().fontFamily,
                  fontSize: 16,
                }}
                leftIcon={
                  <Ionicons name="person-outline" size={24} color="#DADADA" />
                }
              />
            </View>

            <Input
              placeholder="Contraseña"
              inputStyle={{
                height: "11.27%",
                fontFamily: interRegular().fontFamily,
                fontSize: 16,
              }}
              secureTextEntry={true}
              leftIcon={<Octicons name="lock" size={24} color="#DADADA" />}
            />
            {/*------*/}

            {/*Mantener conectado - olvido su contraseña*/}

            {/* -------- Contenedor padre de Mantener conectado y olvido su contrasenia ------- */}
            <View
              style={{
                width: "100%",
                height: "4.05%",
                marginLeft: "3.1%",
              }}
            >
              {/* --------------- */}

              <View style={styles.mantenerConectadoView}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "55.72%",
                  }}
                >
                  <Text
                    style={styles.mantenerConectadoView.mantenerConectadoText}
                  >
                    Mantener Conectado
                  </Text>
                  <Switch
                    value={switchStateIsOpen}
                    onValueChange={setSwitchStateIsOpen}
                    color={green4()}
                    style={{ height: 10 }}
                  />
                </View>

                <Text
                  style={
                    styles.mantenerConectadoView.olvidasteTuContraseniaText
                  }
                >
                  ¿Olvidaste tu contraseña?
                </Text>
              </View>
            </View>

            {/* Boton iniciar sesion*/}
            <View style={styles.buttonContainerView}>
              <Button
                title="Inicia sesión"
                loading={false}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerStyleButton}
                titleStyle={styles.titleButtonStyle}
              />
            </View>
            {/* ----------------------*/}

            {/* Registro con redes sociales */}

            <View style={styles.socialMediaContainerView}>
              <View style={styles.socialMediaTextAndIconsView}>
                <View style={styles.socialMediaTextContainer}>
                  <Text style={styles.socialMediaText}>
                    O registrate usando
                  </Text>
                </View>

                <View style={styles.socialMediaIconsContainer}>
                  <SocialIcon
                    type={"facebook"}
                    style={{ width: 32, height: 32 }}
                    onPress={() => console.log("facebook")}
                  />
                  <SocialIcon
                    type={"google"}
                    style={{ width: 32, height: 32 }}
                    onPress={() => console.log("google")}
                  />
                  <SocialIcon
                    type={"instagram"}
                    style={{ width: 32, height: 32 }}
                    onPress={() => console.log("ins")}
                  />
                </View>
              </View>
            </View>

            {/* ----------------------*/}
          </View>
        </View>

        <RegistroManualComponent 
          
          
        
        
        />
        
      </View>
    </>
  );
};

//STYLES
const {
  interRegular,
  interMedium,
  green1,
  green2,
  green3,
  green4,
  globalRadius,
} = GlobalStyles();

const styles = StyleSheet.create({
  //pixel size : 393 x 830

  //Container general
  fatherView: {
    width: "100%",
    height: "100%",
  },
  //Container del logo
  logoView: {
    height: "25.59%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  /*Container de mantener conectado y olvide su contrasenia */
  inputsAndSubmitButtonView: {
    height: " 52.61%",
    display: "flex",
    alignItems: "center",
  },

  inputsSubmitContainer: {
    width: "70%",
    height: "100%",
    display: "flex",
  },
  /*------------------------------------------------*/

  /*Container de mantener conectado y olvide su contrasenia */
  mantenerConectadoView: {
    width: "96.5%",
    height: "130%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    mantenerConectadoText: {
      fontFamily: interRegular().fontFamily,
      fontSize: 8,
      color: green2(),
    },
    olvidasteTuContraseniaText: {
      fontFamily: interMedium().fontFamily,
      fontSize: 10,
      color: green1(),
    },
  },

  /*------------------------------------------------*/

  /*Buttons -- button containers */
  buttonContainerView: {
    height: "19.37%",
    marginTop: "1%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerStyleButton: {
    width: "96.68%",
    height: 35,
  },
  buttonStyle: {
    borderRadius: globalRadius().borderRadius,
    fontSize: 12,
    backgroundColor: green3(),
  },
  titleButtonStyle: {
    fontFamily: interRegular().fontFamily,
    fontSize: 12,
  },
  /*-----------------------------*/

  /*Social media - ingreso con redes sociales */
  socialMediaContainerView: {
    height: "18.69%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  socialMediaTextAndIconsView: {
    height: "57.3%",
    width: "53.07%",
  },
  socialMediaTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  socialMediaText: {
    fontSize: 12,
    fontFamily: interRegular().fontFamily,
    color: "#D9D9D9",
  },
  socialMediaIconsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  /*-----------------------------*/

  /*Registro manual*/
  registroManualView: {
    marginTop: "5%",
    display: "flex",
    alignItems: "center",
  },
  registroManualTextRegistrateUsando: {},
  registroManualTextCreaTuCuenta: {},

  /*-----------------------------*/
});

export default Login;
