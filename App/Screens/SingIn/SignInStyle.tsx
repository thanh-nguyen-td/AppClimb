import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Climb: {
        fontWeight: '700',
        fontSize: 30,
        color: Colors.blue,
        marginTop: Dimensions.get('window').height / 5
    },
    ViewInput: {

        height: Dimensions.get('window').height / 18,

        width: Dimensions.get('window').width * 5 / 8,
        backgroundColor: Colors.white,

        borderRadius: 35,
        shadowColor: "#000",
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height / 35,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    icon: {
        position: 'relative',
        right: 70,
        top: Dimensions.get('window').height * 2 / 29,
        zIndex: 1,
        marginRight: Dimensions.get('window').width / 8

    },
    input: {
        marginRight: Dimensions.get('window').width / 5,
        fontSize: 16,
        left: Dimensions.get('window').width / 8,
        flexGrow: 1,
    },
    touchSigin: {
        backgroundColor: Colors.blue,
        height: 45,
        width: 200,
        borderRadius: 30,
        marginTop: Dimensions.get('window').height / 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SignIn: {
        color: Colors.white,
        fontSize: 18
    },
    forget: {
        fontSize: 16,
        color: Colors.grayy,
        marginTop: 30,
    },
    Viewbottom: {
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height / 6,
    },
    viewFG: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        marginLeft: 50,
        marginBottom: 20
    },
    ViewF: {
        width: 50,
        height: 50,
        backgroundColor: Colors.fb,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10

    },
    TextF: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: '800'
    },
    viewG: {
        width: 50,
        height: 50,
        backgroundColor: Colors.red,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    touchSignUp: {
        width: 150,
        height: 50,
        backgroundColor: '#e1e1e1',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    or: {
        fontSize: 16
    }
})