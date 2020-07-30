import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touch: {
        height: 50,
        width: 200,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center', borderRadius: 25
    },
    logout: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '700'
    }
})