import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { StyleSheet, View, Text } from "react-native";
import BackgroundLogin from "../assets/svgImages/backgroundImageLogin.svg";
import LogoFutMatch from "../assets/svgImages/LogoFutbolMatch.svg";
import GoogleSVGIcon from "../assets/svgImages/googleIconSVG.svg";
import InstagramSVGIcon from "../assets/svgImages/instagramIconSVG.svg";
import FacebookSVGIcon from "../assets/svgImages/facebookSVGIcon.svg";

import {
  Input,
  Switch,
  Button,
  SocialIcon,
  SocialIconProps,
} from "@rneui/themed";

//Crear responsive  font-size

const Login: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  //393 x 830

  /* 
  
      
  */

  return (
    <>
      <View style={styles.backgroundLogin}>
        <BackgroundLogin />
      </View>

      <View style={styles.fatherView}>
        {/*LOGO CONTAINER */}
        <View style={styles.logoView}>
          <LogoFutMatch width={69} height={69} />
        </View>
        {/*-------------- */}

        {/*INPUTS, SUBMIT BUTTON, SOCIAL NETWORKS CONTAINER*/}

        <View style={styles.inputsAndSubmitButtonView}>
          <View style={styles.inputsAndSubmitButtonView.inputsSubmitContainer}>
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
                    value={open}
                    onValueChange={setOpen}
                    color={green4()}
                    style={{ height: 10 }}
                  />
                </View>

                <Text
                  style={
                    styles.mantenerConectadoView.olvidasteTuContraseniaText
                  }
                >
                  Olvidaste tu contraseña?
                </Text>
              </View>
            </View>

            {/* Boton iniciar sesion*/}
            <View style={styles.buttonContainerView}>
              <Button
                title="Inicia sesión"
                loading={false}
                //loadingProps={{ size: "small", color: "white" }}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerStyleButton}
                titleStyle={styles.titleButtonStyle}
                //onPress={() => console.log("iniciar sesion")}
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
                    
                    onPress={() => console.log('facebook')}
                  />
                  <SocialIcon
                    type={"google"}
                    style={{ width: 32, height: 32 }}
                    
                    onPress={() => console.log('google')}
                  />
                  <SocialIcon
                    type={"instagram"}
                    style={{ width: 32, height: 32 }}
                    
                    onPress={() => console.log('ins')}
                  
                  />
                </View>
              </View>
            </View>

            {/* ----------------------*/}
          </View>

          {/*Registro manual*/}
          <View style={styles.registroManualView}>
            <Text style={styles.registroManualTextRegistrateUsando}>O </Text>

            <Button
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              title="Crea tu cuenta"
              type="clear"
              titleStyle={{ color: green1(), textDecorationLine: "underline" }}
            />
          </View>

          {/* ----------------------*/}
        </View>
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
  backgroundLogin: {
    position: "absolute",
    zIndex: -1,
  },
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

    inputsSubmitContainer: {
      width: "70%",
      height: "100%",
      display: "flex",
    },
  },
  /*------------------------------------------------*/

  /*Container de mantener conectado y olvide su contrasenia */
  mantenerConectadoView: {
    width: "96.5%",
    height: "100%",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerStyleButton: {
    width: "96.68%",
    height: "50%",
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
    //backgroundColor :'red',
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
  },
  registroManualTextRegistrateUsando: {
    fontSize: 12,
    fontFamily: interMedium().fontFamily,
    color: "black",
    textAlign: "center",
  },
  registroManualTextCreaTuCuenta: {},

  /*-----------------------------*/
});

export default Login;
