import React from 'react'
import { StyleSheet } from 'react-native';


export default function GlobalStyles() {


    //Global pallete of colors
    interface paletteColorsTypes 
        { green1: string, green2: string, green3: string, green4: string }

    let styles: paletteColorsTypes = {

        green1: "#3C6E57",
        green2: "#469B4C",
        green3: "#7CB855",
        green4: "#BBE06C"
    }

    //-----------

    //Global general styles
    const fontStyles = StyleSheet.create({
        //fontFamily
        gloockRegular :{
            fontFamily: 'Gloock-Regular',
        },
        interRegular: {
            fontFamily: 'Inter-Regular',
        },
        interMedium: {
            fontFamily: 'Inter-Medium',
        },
        interSemiBold: {
            fontFamily: 'Inter-SemiBold',
        },
        interBold: {
            fontFamily: 'Inter-Bold',
        },

        globalRadius: {
            borderRadius: 13,
        },

    })



    //Colors

    const green1 = (): string => styles.green1;
    const green2 = (): string => styles.green2;
    const green3 = (): string => styles.green3;
    const green4 = (): string => styles.green4;
    
    //----------------------------------
    
    
    //fonts 
    const interRegular  = ()  => fontStyles.interRegular;
    const interMedium = () => fontStyles.interMedium;
    const interSemiBold = () => fontStyles.interSemiBold;
    const interBold = () => fontStyles.interBold;
    const gloockRegular = () => fontStyles.gloockRegular;

    //----------------------------------




    //return an object with the above functions 
    return {
        green1,
        green2,
        green3,
        green4,
        interRegular,
        interMedium,
        interSemiBold,
        interBold,
        gloockRegular
    }

}

