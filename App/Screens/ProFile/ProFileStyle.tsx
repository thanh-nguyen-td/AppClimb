import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@themes'

export default StyleSheet.create({
    container: {
        flex: 1,

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
        alignItems: 'center',

    },
    viewlist: {
        flex: 1,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#f3f3f3',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fcfcfc'
    },
    viewHeadList: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 10
    },
    viewTextList: {
        marginBottom: 10,
        flexDirection: 'row',
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: '600'
    },
    Add: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.blue
    },
    renderWork: {
        flexDirection: 'row'
    },
    workTitle: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    workDuration: {
        color: Colors.grayy,
        marginTop: 10
    },
    workValue: {
        color: Colors.grayy,
        marginBottom: 10
    },
    educatitle: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1
    }
})