import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert, Image, Modal, TouchableHighlight, Dimensions, Switch } from 'react-native'
import { Colors, Images } from '@themes'
import styles from './ProFileStyle'
import { Icon, CheckBox, Button } from 'react-native-elements';
import initData from './ProfileProps'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

export interface Group {
    id: string,
    icon: string,
    name: string,
    data: ItemAboutYouself[] | ItemEducation[] | ItemWorkExperiece[],
    type: number
}

export interface ItemAboutYouself {
    id: string,
    title: string,
}

export interface ItemEducation {
    id: string,
    title: string,
    isGraduation: boolean
}

export interface ItemWorkExperiece {
    id: string,
    title: string,
    position: string,
    duration: string,
}


export const ProFile = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [data, setData] = useState(initData)
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalType, setModalType] = useState(0)
    const [keyvalue, setKeyvalue] = useState('')
    const [activeId, setActiveId] = useState('')
    const [year, setYear] = useState('')
    const [deFault, setDeFault] = useState('Manager')
    const [addEdit, setAddEdit] = useState('')
    const [childId, setChildId] = useState('')
    const [inPutEducation, SetInPutEducatiopn] = useState('')
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const positions = [
        { label: 'Manager', value: 'Manager' },
        { label: 'Employee', value: 'Employee' },
    ];

    const deteTitle = (idInside: string, id: string) => {
        const cloneData = [...data]
        const isSelected = cloneData.find((item) => item.id === id)
        if (isSelected) {
            const childItem = isSelected.data.find((item) => item.id === idInside);
            const indexOf = isSelected.data.indexOf(childItem);
            if (indexOf !== -1) {
                isSelected.data.splice(indexOf, 1);
            }
            else {
                Alert.alert('Error')
            }
        }
        else {
            Alert.alert('Error')
        }
        setData(cloneData)
    };

    const editAboutYourself = () => {
        const cloneData = [...data]
        const isSelected = cloneData.find((item) => item.id === activeId)
        if (isSelected) {
            const childItem = isSelected.data.find((isSelected) => isSelected.id === childId);
            console.log(childId)
            if (childItem) {
                childItem.title = keyvalue;
            }
        }
        setData(cloneData)
    }

    const editEducation = () => {
        const cloneData = [...data]
        const isSelected = cloneData.find((item) => item.id === activeId)
        if (isSelected) {
            const childItem = isSelected.data.find((item) => item.id === childId)
            if (childItem) {
                childItem.title = keyvalue;
                childItem.isGraduation = isEnabled;
            }
        }
    }
    const onAddAboutForm = (id: string, datas: ItemAboutYouself) => {
        const mapData = [...data];
        const groupItem = mapData.find((item) => item.id === id) as Group;
        if (groupItem) {
            groupItem.data.push(datas);
        }
        setData(mapData);
    };

    const onAddEducation = (id: string, datas: ItemEducation) => {
        const mapData = [...data];
        const groupItem = mapData.find((item) => item.id === id) as Group;
        if (groupItem) {
            groupItem.data.push(datas);
        }
        setData(mapData);
    }

    const onAddWorkExperiece = (id: string, datas: ItemWorkExperiece) => {
        const mapData = [...data];
        const groupItem = mapData.find((item) => item.id === id) as Group;
        if (groupItem) {
            groupItem.data.push(datas)
        }
        setData(mapData);
    }

    const renderAboutYouSelfIte = (data: ItemAboutYouself[], item: Group) => {
        return <View>
            {data.map((itemInside: ItemAboutYouself, index: number) => (
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.educatitle}>{itemInside.title}</Text>
                    <Icon name='ios-trash-outline' type='ionicon' color='#517fa4'
                        onPress={() => deteTitle(itemInside.id, item.id)}
                    />
                    <Icon name='ios-brush-outline' type='ionicon' color='#517fa4'
                        onPress={() => { setIsShowModal(true); setAddEdit('Edit'); setChildId(itemInside.id); setKeyvalue(itemInside.title); setModalType(item.type); setActiveId(item.id) }}
                    />
                </View>))}
        </View>
    }

    const modalContent = (type: number) => {
        return <View>
            {type === 1 && aboutYouSelf()}
            {type === 2 && education()}
            {type === 3 && workExperience()}
        </View>
    }

    const renderEducation = (data: ItemEducation[], item: Group) => {
        return <View>
            {data.map((itemInside: ItemEducation, index: number) => (
                <View key={index}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.educatitle}>{itemInside.title}</Text>
                        <Icon name='ios-trash-outline' type='ionicon' color='#517fa4'
                            onPress={() => deteTitle(itemInside.id, item.id)}
                        />
                        <Icon name='ios-brush-outline' type='ionicon' color='#517fa4'
                            onPress={() => { setIsShowModal(true), setAddEdit('Edit'); setChildId(itemInside.id); setKeyvalue(itemInside.title); setIsEnabled(itemInside.isGraduation), setModalType(item.type), setActiveId(item.id) }}
                        />
                    </View>
                    <Text style={styles.workValue}>{itemInside.isGraduation == true ? 'Graduated' : 'No Graduated'}</Text>
                </View>))}
        </View>
    }

    const renderWorkExperiece = (data: ItemWorkExperiece[], item: Group) => {
        return <View>
            {data.map((itemInside: ItemWorkExperiece, index: number) => (
                <View key={index} >
                    <View style={styles.renderWork}>
                        <Text style={styles.workTitle}>{itemInside.title}</Text>
                        <Text style={styles.workDuration}>{itemInside.duration}</Text>
                        <Icon name='ios-trash-outline' type='ionicon' color='#517fa4'
                            onPress={() => deteTitle(itemInside.id, item.id)}
                        />
                    </View>
                    <Text style={styles.workValue}>{itemInside.position}</Text>
                </View>))}
        </View>
    }

    const rednderItem = (item: Group, index: number) => {
        return (
            <View style={styles.viewlist}>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={styles.viewHeadList}>
                        <View style={styles.viewTextList}>
                            <Icon size={18} name={item.icon} type={'font-awesome'} style={{ marginRight: 15 }} />
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        <TouchableOpacity style={{ width: 50 }}>
                            <Text style={styles.Add}
                                onPress={() => {
                                    setModalType(item.type)
                                    setIsShowModal(true)
                                    setActiveId(item.id)
                                    setAddEdit('Add');
                                }}>+ Add</Text>
                        </TouchableOpacity>

                    </View>
                    <View >
                        {item.type === 1 && renderAboutYouSelfIte(item.data, item)}
                        {item.type === 2 && renderEducation(item.data, item)}
                        {item.type === 3 && renderWorkExperiece(item.data, item)}
                    </View>
                </View>
            </View>
        )
    }

    const hadleEducation = () => {
        if (addEdit === 'Add') {
            onAddEducation(activeId, {
                id: Math.random().toString(),
                title: keyvalue,
                isGraduation: isEnabled,
            })
        } else if (addEdit === 'Edit') {
            editEducation()
        }
    }

    const hadleAbout = () => {
        if (addEdit === 'Add') {
            onAddAboutForm(activeId, {
                id: Math.random().toString(),
                title: keyvalue,
            })
        }
        else if (addEdit === 'Edit') {
            editAboutYourself();
        }
    }
    const aboutYouSelf = () => {
        return <View style={{ backgroundColor: '#e4e4e4', height: Dimensions.get('window').height / 4, width: Dimensions.get('window').width * 2 / 3, alignItems: 'center', borderRadius: 20 }}>
            <View style={{}}><Text style={{ fontSize: 16, fontWeight: '600', margin: 20, }}>AboutYouSelf</Text></View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <Text style={{ fontSize: 16 }}>Title:</Text>
                <TextInput
                    defaultValue={keyvalue}
                    style={{ borderBottomWidth: 1, height: 20, width: 200 }}
                    onChangeText={(text) => setKeyvalue(text)}
                ></TextInput>
            </View>
            <View><Button
                title={addEdit}
                buttonStyle={{ width: 123, height: 45, borderRadius: 30 }}
                disabled={!keyvalue ? true : false}
                onPress={() => {
                    hadleAbout();
                    setKeyvalue(''),

                        setIsShowModal(!isShowModal)
                }}
            ></Button></View>
        </View>
    }

    const education = () => {
        return <View style={{ backgroundColor: '#e4e4e4', height: Dimensions.get('window').height / 4, width: Dimensions.get('window').width * 2 / 3, alignItems: 'center', borderRadius: 20 }}>
            <View style={{}}><Text style={{ fontSize: 16, fontWeight: '600', margin: 20, }}>Education</Text></View>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <Text style={{ fontSize: 16 }}>School:</Text>
                <TextInput
                    value={keyvalue}
                    onChangeText={(text) => setKeyvalue(text)}
                    style={{ borderBottomWidth: 1, height: 20, width: 200 }}></TextInput>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ right: 60, fontSize: 16 }}>Graduating: </Text>
                <Switch
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ left: 40 }}
                /></View>
            <Button
                title={'Save'}
                buttonStyle={{ width: 123, height: 45, borderRadius: 30 }}
                disabled={!keyvalue ? true : false}
                onPress={() => {
                    hadleEducation()
                    setKeyvalue(''),
                        setIsShowModal(!isShowModal)
                }}
            />
        </View>
    }
    const workExperience = () => {
        return <View style={{ backgroundColor: '#e4e4e4', height: Dimensions.get('window').height / 3, width: Dimensions.get('window').width * 2 / 3, borderRadius: 20, }}>
            <View style={{ alignItems: 'center', }}><Text style={{ fontSize: 16, fontWeight: '600', margin: 20, }}>AboutYouSelf</Text></View>
            <View style={{ flexDirection: 'row', marginBottom: 20, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 16 }}>Comany:</Text>
                <TextInput
                    value={keyvalue}
                    onChangeText={(text) => setKeyvalue(text)}
                    style={{ borderBottomWidth: 1, height: 20, width: 180 }}></TextInput>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <Text style={{ fontSize: 16 }}>Year:</Text>
                <TextInput
                    value={year}
                    style={{ borderBottomWidth: 1, height: 20, width: 200 }}
                    onChangeText={(text) => setYear(text)}
                    placeholder={'Year'}
                    keyboardType={'number-pad'}
                />
            </View>
            <DropDownPicker
                items={positions}
                defaultValue={deFault}
                containerStyle={{ width: '70%', height: 40, marginTop: 10, left: 40 }}
                onChangeItem={(item) => setDeFault(item.value)}
                itemStyle={{
                    justifyContent: 'flex-start',
                    zIndex: 1,
                }}
            />
            <Button
                buttonStyle={{ width: 123, height: 45, borderRadius: 30 }}
                title={'Save'}
                disabled={!keyvalue || !year ? true : false}
                onPress={() => {
                    onAddWorkExperiece(activeId, {
                        id: Math.random().toString(),
                        title: keyvalue,
                        duration: year,
                        position: deFault
                    })
                    setKeyvalue('')
                    setYear('');
                    setIsShowModal(!isShowModal)
                }}
            />


        </View >
    }
    const renderModal = () => {
        return <Modal
            animationType="slide"
            transparent={true}
            visible={isShowModal}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                <TouchableHighlight
                    style={{ height: 30, width: 30, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', left: 90 }}
                    onPress={() => {

                        setIsShowModal(!isShowModal);
                    }}
                >
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }} >x</Text>
                </TouchableHighlight>
                {modalContent(modalType)}

            </View>
        </Modal>
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.icons}><Icon
                    name='ios-menu'
                    type='ionicon'
                    color={Colors.black}
                /></View>
                <View style={styles.jobs}><Text>My Profile</Text></View>
                <View style={styles.icons}><Icon
                    name='ios-notifications-outline'
                    type='ionicon'
                    color={Colors.black}
                />
                </View>
            </View>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <View><Image source={Images.avatar} style={{ height: 100, width: 100, borderRadius: 50, borderColor: 'red', }}></Image></View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', margin: 10 }}>Maria Ozawa</Text>
                    <Text style={{}}>Complete profile 50%</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList data={data}
                    renderItem={({ item, index }) => rednderItem(item, index)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {renderModal()}
        </View>
    )

}