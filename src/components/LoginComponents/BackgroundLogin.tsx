import React from "react";
import BackgroundLogin from "../../assets/svgImages/backgroundImageLogin.svg"
import { StyleSheet,View, } from "react-native";


const BackgroundLoginComponent = () => {
    return ( 
        <View style={styles.backgroundLogin}>
            <BackgroundLogin />
        </View>

    );
}



const styles = StyleSheet.create({

    backgroundLogin: {
        position: "absolute",
        zIndex: -1,
      },


})
 
export default BackgroundLoginComponent;

