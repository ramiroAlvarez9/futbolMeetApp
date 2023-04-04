import React from "react";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export default function GlobalStyles()  {
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
    const isSignedIn: boolean = await GoogleSignin.isSignedIn();
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

    /* Is sign in with  google account <boolean> ? */
    const isSignedInGoogle = async () => {

      let isSignedInG : boolean = await GoogleSignin.isSignedIn() 

    };
    /*-------------------------------------*/


  return {
    onFacebookButtonPress,
    googleLogin,
    isSignedInGoogle
  };
}
