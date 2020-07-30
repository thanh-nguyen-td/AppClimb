import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { Colors } from '@themes';
import styles from './SignUpStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack/types'
import { ParamListBase } from '@react-navigation/native'
import { Screens } from '@config';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';
import { signInByFacebook } from './SignInByFacebook';

interface SignUpProps {
    navigation: NativeStackNavigationProp<ParamListBase>,
}
export const SignUp = (
    props: SignUpProps
) => {
    useEffect(() => {
        GoogleSignin.configure({
            // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '945541427485-v231uhh6hstsvied566lge2m860m1li5.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            // accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }, [])
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            navigation.navigate(Screens.MyTabs, {
                screens: Screens.JobsNavigator
            })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    const { navigation } = props;
    const SignInFacebook = async () => {
        await signInByFacebook((accesstoken: string) => {
            navigation.navigate(Screens.MyTabs, {
                screens: Screens.JobsNavigator
            })
        })
    }
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.Climb}>CLIMB</Text>
            </View>

            <View style={styles.ViewBody}>

                <Icon name='ios-person-outline' type='ionicon' containerStyle={styles.icon} size={20} />

                <View style={styles.ViewInput}>


                    <TextInput

                        style={styles.input}
                        placeholder="Gmail.com!"
                    // onChangeText={(text) => setuseName(text)} 
                    />
                </View>
                <Icon name='ios-key' type='ionicon' containerStyle={styles.icon} />
                <View style={styles.ViewInput}>

                    <TextInput

                        style={styles.input}
                        placeholder="Email Address"
                        secureTextEntry={true}
                    // onChangeText={(text) => setpassword(text)}
                    />

                </View>
                <Icon name='ios-key' type='ionicon' containerStyle={styles.icon} />
                <View style={styles.ViewInput}>

                    <TextInput

                        style={styles.input}
                        placeholder="Password!"
                        secureTextEntry={true}
                    // onChangeText={(text) => setpassword(text)}
                    />

                </View>
                <Icon name='ios-key' type='ionicon' containerStyle={styles.icon} />
                <View style={styles.ViewInput}>

                    <TextInput

                        style={styles.input}
                        placeholder="Comfirm Password!"
                        secureTextEntry={true}
                    // onChangeText={(text) => setpassword(text)}
                    />

                </View>
            </View>
            <View style={styles.ViewNext}>
                <TouchableOpacity style={styles.touchNext}>
                    <Text style={styles.Next}>NEXT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Bottom}>
                <View style={styles.Bottommini}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.navigate(Screens.LoginNavigator, {
                            screens: Screens.SignIn,
                            params: {

                            }
                        })} style={styles.ViewSignin}>
                            <Text style={[styles.signin, { right: 10 }]}>Or</Text>
                            <Text style={[styles.signin, { fontWeight: '600' }]}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Fg}>

                        <TouchableOpacity style={styles.viewF} onPress={() => { SignInFacebook() }}>
                            <Text style={styles.textF}>f</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.viewF, { left: 10, backgroundColor: Colors.red }]} onPress={() => { signIn() }}>
                            <Text style={styles.textF}>G</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View >
    )
}