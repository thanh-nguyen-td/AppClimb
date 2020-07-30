import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    Climb: {
        fontSize: 30,
        fontWeight: '700',
        color: Colors.blue
    },
    ViewBody: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewInput: {

        height: Dimensions.get('window').height / 18,

        width: Dimensions.get('window').width * 5 / 8,
        backgroundColor: Colors.white,

        borderRadius: 35,
        shadowColor: "#000",
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height / 60,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    input: {
        marginRight: Dimensions.get('window').width / 5,
        fontSize: 16,
        left: Dimensions.get('window').width / 8,
        flexGrow: 1,

    },
    icon: {
        position: 'relative',
        right: 70,
        top: Dimensions.get('window').height * 2 / 35,
        zIndex: 1,
        marginRight: Dimensions.get('window').width / 8

    },
    ViewNext: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 10
    },
    touchNext: {
        height: 50, width: 200,
        backgroundColor: Colors.blue,
        borderRadius: 25, justifyContent: 'center',
        alignItems: 'center'
    },
    Next: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: '700'
    },
    Bottom: {
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height / 6,
    },
    Bottommini: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    ViewSignin: {
        height: 50,
        backgroundColor: '#e1e1e1',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signin: {
        fontSize: 16,
    },
    Fg: {
        flex: 1,
        flexDirection: 'row',
        left: 40
    },
    viewF: {
        width: 50,
        height: 50,
        backgroundColor: Colors.fb,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        right: 10,
    },
    textF: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: '800'
    },
})