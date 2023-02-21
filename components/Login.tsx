import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyles from '../globalStyles/GlobalStyles';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput,

} from 'react-native';





const Login: React.FC = () => {


    const { globalFontFamily } = GlobalStyles();

    console.log(globalFontFamily());

    const styles = StyleSheet.create({
        fatherView: {
            flex: 1,
        },
        logoView: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        inputsAndSubmitButtonView: {
            flex: 2,
            display: 'flex',
            alignItems: 'center',

            inputs: {
                width: '90%',
            }

        },
        socialMediaView: {
            flex: 1,
        }
    });


    return (

        <View
            style={styles.fatherView}
        >
            <View
                style={styles.logoView}
            >
                <Text>

                    <Icon

                        name='soccer-field'
                        size={60}
                        color='green'

                    />

                </Text>
            </View>

            <View
                style={styles.inputsAndSubmitButtonView}
            >
                <TextInput
                    placeholder='User'
                    style=
                    {[
                        styles.inputsAndSubmitButtonView.inputs,
                    globalFontFamily()
                    ]}

                >


                </TextInput>

                <TextInput
                    placeholder='Password'
                    style=
                    {[
                        styles.inputsAndSubmitButtonView.inputs,
                        globalFontFamily()
                    ]}

                ></TextInput>

                <Button
                    title="Submit"
                    color="#841584"
                    accessibilityLabel="Submit"
                />


            </View>

            <View
                style={styles.socialMediaView}
            >

            </View>


        </View>




    )



};

export default Login;