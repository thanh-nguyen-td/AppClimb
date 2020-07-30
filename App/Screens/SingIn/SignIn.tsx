import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Dimensions, Alert } from 'react-native'
import { Colors } from '@themes'
import styles from './SignInStyle'
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack/types'
import { ParamListBase } from '@react-navigation/native'
import { Screens } from '@config';

interface SignInProps {
    navigation: NativeStackNavigationProp<ParamListBase>,
}
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';
import { signInByFacebook } from './signInByFacebook'


export const SignIn = (
    props: SignInProps
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
    const SignInFacebook = async () => {
        await signInByFacebook((accesstoken: string) => {
            navigation.navigate(Screens.MyTabs, {
                screens: Screens.JobsNavigator
            })
        })
    }
    const { navigation } = props;
    const [useName, setuseName] = useState('contact@abc.com'),
        [password, setpassword] = useState('ABC@123');

    const checkMail = () => {
        if (useName !== 'contact@abc.com') {
            Alert.alert('not Name');
            return false;
        }
        if (password !== 'ABC@123') {
            Alert.alert('not password');
            return false;
        }
        AsyncStorage.setItem('useName', useName).then(() => {
            navigation.navigate(Screens.MyTabs, {
                screens: Screens.JobsNavigator,
                params: {

                }
            })
        }).catch(() => {
            Alert.alert('not file')
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Climb}>CLIMB</Text>
            </View>
            <View style={{ position: 'relative', }}>

                <Icon name='ios-person-outline' type='ionicon' containerStyle={styles.icon} size={20} />

                <View style={styles.ViewInput}>


                    <TextInput
                        value={useName}
                        style={styles.input}
                        placeholder="Gmail.com!"
                        onChangeText={(text) => setuseName(text)} />
                </View>
                <Icon name='ios-key' type='ionicon' containerStyle={styles.icon} />
                <View style={styles.ViewInput}>

                    <TextInput
                        value={password}
                        style={styles.input}
                        placeholder="Password!"
                        secureTextEntry={true}
                        onChangeText={(text) => setpassword(text)}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.touchSigin} onPress={() => checkMail()} >
                    <Text style={styles.SignIn}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.forget}>Forget password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Viewbottom}>
                <View style={styles.viewFG}>
                    <TouchableOpacity style={styles.ViewF} onPress={() => { SignInFacebook() }}>
                        <Text style={styles.TextF}>f</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewG} onPress={() => { signIn() }}>
                        <Text style={styles.TextF}>G</Text>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.navigate(Screens.SignUpNavigator, {
                        screens: Screens.SignUp,
                        params: {

                        }
                    })} style={styles.touchSignUp}>
                        <Text style={[styles.or, { right: 10 }]}>Or</Text>
                        <Text style={[styles.or, { fontWeight: '600' }]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}