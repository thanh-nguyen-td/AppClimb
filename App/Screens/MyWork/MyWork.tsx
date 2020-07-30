import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios'
import { Group, GroupItem } from './MyWorkProps'

export const MyWork = () => {
    const [data, setData] = useState({ count: 0, items: [] })
    const [sideData, setSideData] = useState(data.items)
    const [isLoatding, setIsLoatding] = useState(false)
    const [skip, setSkip] = useState(0)
    const take = 5;
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const url = 'https://apibeta.evp.debugger.vn/api/learner/v1/public/courses?skip=' + skip + '&take=' + take + '&query=&categoryId=';
        axios({
            method: 'get',
            url: url,
        }).then((response) => {
            setSkip(skip + 5)
            setData(response.data);
            setSideData(sideData.concat(response.data.items));
            setIsLoatding(true);
        }).catch(() => { })
    }

    const handleLoadmore = () => {
        setIsLoatding(true);
        getData();
    }
    const renderItem = (item: GroupItem) => {
        return (
            <View style={{ flex: 1, borderBottomWidth: 1, height: Dimensions.get('window').height / 4, marginTop: 10 }}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    const renderFooter = (count: number) => {
        console.log(skip)
        return skip <= count || isLoatding === true ? (
            <View>
                <ActivityIndicator size="large" />
            </View>
        ) : null;
    };


    return (
        <View>
            <Text style={{ margin: 20 }}>{data.count}</Text>
            <FlatList
                data={sideData}
                renderItem={({ item }) => renderItem(item)}
                onEndReachedThreshold={0}
                onEndReached={() => handleLoadmore()}
                ListFooterComponent={() => renderFooter(data.count)}
            />
        </View>
    )
}

    // const [colors, setColors] = useState<string>('#000'),
    //     [count, setCount] = useState(14)

    // const hehe = () => {
    //     setCount(count + 1)
    //     if (colors === '#000') {
    //         setColors('red')
    //     } else {
    //         setColors('#000')
    //     }
    // }
    // return (

    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    //         <Text style={{ color: colors }}>MyWork</Text>
    //         <TouchableOpacity
    //             onPress={hehe}
    //             style={[{ height: 50, width: 200, borderRadius: 20, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }, (colors === '#000') && { height: 100, width: 100, borderRadius: 50, backgroundColor: 'blue', }]}><Text style={{ fontSize: count }}>click me</Text></TouchableOpacity>
    //     </View>
    // )
    // ============================
    // const date = moment().format('h');
    // const x = new Number(date)
    // return (
    //     <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    //         <Text>thanh</Text>
    //         <Text style={{ color: x < 10 ? 'red' : x < 18 ? 'blue' : 'pink' }}>{date}</Text>

    //     </View>
    // )