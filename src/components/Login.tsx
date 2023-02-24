import React from "react";
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";


const Login: React.FC = () => {
  const { globalFontFamily } = GlobalStyles();

  const styles = StyleSheet.create({
    fatherView: {
      flex: 1,
    },
    logoView: {
      flex: 1,
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
    
    <View style={styles.fatherView}>   

      
      <View style={styles.logoView}>
      </View>

      <View style={styles.inputsAndSubmitButtonView}>
        <Text>2</Text>
      </View>

      <View style={styles.socialMediaView}>
        <Text>3</Text>
      </View>
    
    </View>
  );
};

export default Login;
