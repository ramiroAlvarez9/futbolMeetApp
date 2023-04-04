import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LogoFutMatch from "../../assets/svgImages/LogoFutbolMatch.svg";

const LogoContainer = () => {
  return (
    <>
      
      <View style={styles.logoView}>
        <LogoFutMatch width={69} height={69} />
      </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  //Container del logo
  logoView: {
    height: "25.59%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogoContainer;
