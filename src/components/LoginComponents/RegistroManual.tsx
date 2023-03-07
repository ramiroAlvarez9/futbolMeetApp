import React, { useState, useEffect } from "react";
import { View, Keyboard, Text } from "react-native";
import { Button } from "@rneui/themed";
import GlobalStyles from "../../globalStyles/GlobalStyles";



const RegistroManualComponent = () => {
  const [creaTuCuentaViewVisibility, setCreaTuCuentaViewVisibility] = useState<string>("80%");

  useEffect(() => {
    const deleteCrearTuCuenta = Keyboard.addListener("keyboardDidShow", () =>
      setCreaTuCuentaViewVisibility("999%")
    );
    const mostrarCrearTuCuenta = Keyboard.addListener("keyboardDidHide", () =>
      setCreaTuCuentaViewVisibility("80%")
    );

    return () => {
      deleteCrearTuCuenta;
      mostrarCrearTuCuenta;
    };
  }, []);

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        top: `${creaTuCuentaViewVisibility}`,
      }}
    >
      <View
        style={{
          marginTop: "5%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: interMedium().fontFamily,
            color: "black",
            textAlign: "center",
          }}
        >
          O
        </Text>

        <Button
          title="Crea tu cuenta"
          type="clear"
          containerStyle={{
            width: "38%",
            borderRadius: globalRadius().borderRadius,
          }}
          titleStyle={{ color: green1(), textDecorationLine: "underline" }}
         
        />
      </View>
    </View>
  );
};


//STYLES
const {interMedium, green1, globalRadius } = GlobalStyles();

export default RegistroManualComponent;
