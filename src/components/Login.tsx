import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { StyleSheet, View, Text } from "react-native";
import BackgroundLogin from "../assets/svgImages/backgroundImageLogin.svg";
import LogoFutMatch from "../assets/svgImages/LogoFutbolMatch.svg";
import { Input, Switch } from "@rneui/themed";

const Login: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

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

            
          </View>
        </View>
      </View>
      {/*----------------------------------------------- */}
    </>
  );
};

const { interRegular, interMedium, green1, green2, green4 } = GlobalStyles();

const styles = StyleSheet.create({
  //pixel size : 393 x 830
  backgroundLogin: {
    position: "absolute",
    zIndex: -1,
  },

  fatherView: {
    width: "100%",
    height: "100%",
  },
  logoView: {
    height: "25.59%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
  //Crear responsive  font-size
  mantenerConectadoView: {
    width: "96.5%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor : 'blue',

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
});

export default Login;
