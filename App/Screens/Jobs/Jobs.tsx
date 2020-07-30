import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, Dimensions, Slider } from 'react-native';
import { Icon } from 'react-native-elements'
import { Colors } from '@themes';
import axios from 'axios'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import styles from './JobsStyle'

interface api {
    title: string,
    salary: string,
    location: string,
    image: string,
    isExpired: boolean
}

export const Jobs = () => {
    const [keyValue, setkeyValue] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        renderData()
    }, [])

    const search = () => {
        let cheack: any = [];
        for (let item of data) {
            if (item.title.includes(keyValue) === true) {
                cheack.push(item)
            }
        }
        return cheack;
    };

    const renderData = () => {
        axios({
            method: 'get',
            url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/jobs',
        }).then((response) => {
            setData(response.data)
        }).catch(() => { })

    }

    const getData = ({ item }: { item: api }) => {
        return (
            <View>
                <View style={styles.viewFlat}>
                    <TouchableOpacity style={styles.touch}>
                        <View><Image source={{ uri: item.image }} style={styles.image} /></View>
                        <View><Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.basic}>Basic Salary: {item.salary}</Text>
                            <Text>Location{item.location}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewApply}>
                    <TouchableOpacity style={item.isExpired ? styles.Applyfa : styles.Applytr}>
                        <Text style={styles.apply}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.icons}><Icon
                    name='ios-menu'
                    type='ionicon'
                    color={Colors.black}
                /></View>
                <View style={styles.jobs}><Text>Jobs</Text></View>
                <View style={styles.icons}><Icon
                    name='ios-notifications-outline'
                    type='ionicon'
                    color={Colors.black}
                />
                </View>
            </View>
            <View style={styles.viewInput}>
                <View>
                    <View style={styles.flexdirection}>
                        <Icon
                            name='ios-pin-outline'
                            type='ionicon'
                            color={Colors.grayy}
                        />
                        <TextInput
                            placeholder="Gmail.com!"
                            style={styles.input}
                            value={keyValue}
                            onChangeText={(item) => setkeyValue(item)}
                        >
                        </TextInput>
                    </View>
                    <View style={[styles.flexdirection, { marginTop: 20 }]}>
                        <Icon
                            name='ios-locate-outline'
                            type='ionicon'
                            color={Colors.grayy}
                        />
                        <TextInput placeholder="Gmail.com!" style={styles.input}>
                        </TextInput>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}><Slider
                    style={styles.slyder}
                    minimumValue={0}
                    maximumValue={5}
                    minimumTrackTintColor={Colors.blue}
                    maximumTrackTintColor={Colors.grayy}
                    thumbTintColor={Colors.blue}
                />
                </View>
                <Text>We have 12 work recommend for you</Text>
            </View>
            <View>
                <View style={{}}></View>
                <FlatList data={search()} renderItem={(item: any) => getData(item)} />
            </View>
        </View>
    )
}