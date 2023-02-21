import React from 'react'
import { StyleSheet } from 'react-native';


export default function GlobalStyles() {
     

    //Pallete of colors
    interface paletteColorsTypes {
        red1 : string,

    }

    let styles : paletteColorsTypes = {

        //palette of colors . 
        red1: "#D71E49",
        //-----------
    }

    //Global Fonts
    const fontStyles  = StyleSheet.create({
        customFont: {
            fontFamily: 'OpenSans-VariableFont_wdth,wght',
        }

    })



    //functions that returns the values of paletteOfColors, or other data.
    
    const red1 = (): string => styles.red1;

    const globalFontFamily = () => fontStyles.customFont;


    //----------------------------------




    //return an object with the above functions 
    return {
        red1,
        globalFontFamily
    }

}

