import React from 'react'
import { StyleSheet } from 'react-native';


export default function GlobalStyles() {
     

    //Pallete of colors
    interface paletteColorsTypes 
        { green1 : string, green2 : string, green3 : string, green4 : string }

    let styles : paletteColorsTypes = { 
        
        green1: "#3C6E57",
        green2: "#469B4C",
        green3: "#7CB855",
        green4: "#BBE06C"

        
    }

    //-----------
    
    //Global Styles
    const fontStyles  = StyleSheet.create({
        customFont: {
            fontFamily: 'OpenSans-VariableFont_wdth,wght',
        },
        globalRadius: {
            borderRadius : 13,
        },

    })



    //functions that returns the values of paletteOfColors, or other data.
    
    const red1 = (): string => styles.green1;

    const globalFontFamily = () => fontStyles.customFont;


    //----------------------------------




    //return an object with the above functions 
    return {
        red1,
        globalFontFamily
    }

}

