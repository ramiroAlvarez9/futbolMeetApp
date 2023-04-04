import React from "react";
import BackgroundLoginComponent from "./LoginComponents/BackgroundLogin";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import GlobalStyles from "../globalStylesHooks/GlobalStyles";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "@rneui/themed";
import LogoFutMatch from "../assets/svgImages/LogoFutbolMatch.svg";

const CreaTuCuenta: React.FC = () => {
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
            <View>
              <Input
                placeholder="Correo electronico"
                inputStyle={{
                  height: "11.27%",
                  fontFamily: interRegular().fontFamily,
                  fontSize: 16,
                }}
                leftIcon={<Fontisto name="email" size={24} color="#DADADA" />}
              />
            </View>

            <Input
              placeholder="Nombre de usuario"
              inputStyle={{
                height: "11.27%",
                fontFamily: interRegular().fontFamily,
                fontSize: 16,
              }}
              secureTextEntry={true}
              leftIcon={
                <Ionicons name="person-outline" size={24} color="#DADADA" />
              }
            />
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
            <Input
              placeholder="Repetir contraseña"
              inputStyle={{
                height: "11.27%",
                fontFamily: interRegular().fontFamily,
                fontSize: 16,
              }}
              secureTextEntry={true}
              leftIcon={<Octicons name="lock" size={24} color="#DADADA" />}
            />
            {/*------*/}

            {/* -------- Contenedor padre de Mantener conectado y olvido su contrasenia ------- */}
            <View
              style={{
                width: "100%",
                height: "4.05%",
                marginLeft: "3.1%",
              }}
            >
              {/* --------------- */}
            </View>

            {/* Boton iniciar sesion*/}
            <View style={styles.buttonContainerView}>
              <Button
                title="Crear Cuenta"
                loading={false}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerStyleButton}
                titleStyle={styles.titleButtonStyle}
              />
            </View>
            {/* ----------------------*/}
          </View>
        </View>
      </View>
    </>
  );
};

//STYLES
const { interRegular, interMedium, green1, green2, green3, globalRadius } =
  GlobalStyles();

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
});

export default CreaTuCuenta;
