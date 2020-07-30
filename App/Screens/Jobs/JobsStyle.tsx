import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@themes'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    Applytr: {
        backgroundColor: Colors.grayy,
        width: 100,
        height: 60,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Applyfa: {
        backgroundColor: Colors.blue,
        width: 100,
        height: 60,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewFlat: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 10,
    },
    title: {
        fontWeight: '700'
    },
    touch: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.white
    },
    image: {
        height: Dimensions.get('window').height / 9,
        width: Dimensions.get('window').width / 4,
        margin: 10,
    },
    basic: {
        marginTop: Dimensions.get('window').height / 33,
        marginBottom: Dimensions.get('window').height / 60,
    },
    viewApply: {
        position: 'absolute',
        right: -1,
        bottom: 25,
    },
    apply: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.white
    },
    top: {
        flexDirection: 'row',
        marginTop: 50
    },
    icons: {
        width: 50
    },
    jobs: {
        flexGrow: 1,
        alignItems: 'center'
    },
    viewInput: {
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 15
    },
    input: {
        borderWidth: 0.5,
        height: 40,
        width: Dimensions.get('window').width * 3 / 4,
        borderColor: '#c1c1c1'
    },
    slyder: {
        width: 300,
        height: 80
    },
    flexdirection: {
        flexDirection: 'row'
    }
})