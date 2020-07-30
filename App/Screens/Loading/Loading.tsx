import React, { useEffect } from 'react';
import { Text, View } from 'react-native'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack/types'
import { Screens } from '@config'
import AsyncStorage from '@react-native-community/async-storage';
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

export interface LoadingProps {
    navigation: NativeStackNavigationProp<ParamListBase>,
}
export const Loading: React.FunctionComponent<LoadingProps> = (
    props: LoadingProps,

) => {

    useEffect(() => {
        navigateCheck()
    }, [])
    const { navigation } = props
    const navigateCheck = async () => {
        (await isLogin()) ? navigateToMyTabs() : navigateToSignIn();
    }
    const navigateToSignIn = () => {
        navigation.navigate(Screens.LoginNavigator, {
            screens: Screens.SignIn,
            params: {

            }
        });
    }
    const navigateToMyTabs = () => {
        navigation.navigate(Screens.MyTabs, {
            screens: Screens.JobsNavigator,
            params: {

            }
        });
    }

    const isLogin = async () => {
        //Get id from storage. neu co return true nguoc lai returm false
        const value = AsyncStorage.getItem('@userName');
        console.log('value', value);
        if (value) {
            return true;
        }
        return false;
    };
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>Loading</Text>
        </View>
    )
}