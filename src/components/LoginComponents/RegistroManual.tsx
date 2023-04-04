import React, { useState, useEffect } from "react";
import { View, Keyboard, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import GlobalStyles from "../../globalStylesHooks/GlobalStyles";

interface Props {
  navigation: any;
}

type DisplayValue = "flex" | "none";

const RegistroManualComponent  = ({ navigation }: Props) => {


  const [creaTuCuentaViewVisibility, setCreaTuCuentaViewVisibility] =
  
  useState<DisplayValue>("flex");

  useEffect(() => {
    const deleteCrearTuCuenta = Keyboard.addListener("keyboardDidShow", () =>
      setCreaTuCuentaViewVisibility("none")
    );
    const mostrarCrearTuCuenta = Keyboard.addListener("keyboardDidHide", () =>
      setCreaTuCuentaViewVisibility("flex")
    );

    return () => {
      deleteCrearTuCuenta;
      mostrarCrearTuCuenta;
    };
  }, []);



  console.log(creaTuCuentaViewVisibility);
  return (
    <View>
      <View style={{
            marginTop: "5%",
            display: `${creaTuCuentaViewVisibility}`,
            alignItems: "center",
      }}>
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
          onPress={() =>
            navigation.navigate("Crea tu cuenta", { name: "Jane" })
          }
        />
      </View>
    </View>
  );
};

//STYLES
const { interMedium, green1, globalRadius } = GlobalStyles();


export default RegistroManualComponent;
