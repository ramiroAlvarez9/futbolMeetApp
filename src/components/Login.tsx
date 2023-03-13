import React, { useEffect, useState } from "react";
import BackgroundLoginComponent from "./LoginComponents/BackgroundLogin";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { StyleSheet, View, Text } from "react-native";
import { Input, Switch, Button, SocialIcon } from "@rneui/themed";
import LogoFutMatch from "../assets/svgImages/LogoFutbolMatch.svg";
import RegistroManualComponent from "./LoginComponents/RegistroManual";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import Home from "./Home";

interface Props {
  navigation: any;

}

const Login = ({ navigation}: Props) => {

  type User = any  

  const [switchStateIsOpen, setSwitchStateIsOpen] = useState<boolean>(false);

  /*Google Login*/
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
    webClientId: "<FROM DEVELOPER CONSOLE>", // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: "", // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: "", // [Android] specifies an account name on the device that should be used
    iosClientId: "<FROM DEVELOPER CONSOLE>", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  GoogleSignin.configure();

  const isSignedIn = async () => {
    
    const isSignedIn : boolean = await GoogleSignin.isSignedIn();
    console.log(isSignedIn);
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      isSignedIn();
     
      
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  /*-------------------------*/

  /* Facebook Login */
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

  

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  /*-------------------------*/

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
                    onPress={() =>
                      onFacebookButtonPress().then(() =>
                        console.log("Signed in with Facebook!")
                      )
                    }
                  />
                  <SocialIcon
                    type={"google"}
                    style={{ width: 32, height: 32 }}
                    onPress={googleLogin}
                  />
                  <SocialIcon
                    type={"instagram"}
                    style={{ width: 32, height: 32 }}
                    onPress={() =>
                      onFacebookButtonPress().then(() =>
                        console.log("Signed in with Facebook!")
                      )
                    }
                  />
                </View>
              </View>
            </View>

            {/* ----------------------*/}
          </View>
        </View>

        <RegistroManualComponent navigation={navigation} />
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
