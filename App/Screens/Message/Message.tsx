import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack/types'
import { ParamListBase } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import { Screens } from '@config';
import { Colors } from '@themes'
import styles from './MessageStyle'
import moment from 'moment'

export const Message = () => {
    const navigation = useNavigation();
    const handlerLogout = () => {
        AsyncStorage.setItem('@userName', '').then(() => {
            navigation.navigate(Screens.LoginNavigator, {
                screens: Screens.SignIn,
                params: {

                }
            });
        }).catch(() => {
            Alert.alert('', 'Error');
        })
    }
    const date = moment().format('h');
    const x = new Number(date)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlerLogout()} style={styles.touch}>
                <Text style={styles.logout}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}
// import React, { useState } from 'react';
// import {
//     Text,
//     View,
//     Image,
//     TouchableOpacity,
//     Modal,
//     TouchableHighlight,
//     FlatList,
//     TextInput,
// } from 'react-native';
// import styles from './ProfileStyle';
// import IconEntypo from 'react-native-vector-icons/Entypo';
// import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
// import { listData } from './ListData';
// import RNPickerSelect from 'react-native-picker-select';
// import ProgressCircle from 'react-native-progress-circle';
// export enum ModalKey {
//     About = 'About',
//     Edu = 'Edu',
//     WorkExp = 'WorkExp',
// }
// export interface Group {
//     id: string;
//     iconName: string;
//     title: string;
//     content: InterAbout[] | InterEducation[] | InterWork[];
//     type: number;
// }
// export interface InterAbout {
//     id: number;
//     title: string;
// }
// export interface InterEducation {
//     id: number;
//     title: string;
//     isGrad: boolean;
// }
// export interface InterWork {
//     id: number;
//     title: string;
//     position: string;
// }
// export function ProfileScreen() {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [data, setData] = useState(listData);
//     const [textInput1, setTextInput1] = useState('');
//     const [textInput2, setTextInput2] = useState('');
//     const [textInput3, setTextInput3] = useState('');
//     const [modalKey, setModalKey] = useState('');
//     const [activeId, setActiveId] = useState('');
//     const [childActiveId, setChildActiveId] = useState(null);
//     const [isGrade, setGrade] = useState(false);
//     const [posit, setPosit] = useState('');
//     const [textButton, setTextButton] = useState('');

//     const deletedContent = (id: string, idDdata: number) => {
//         const cloneData = [...data];
//         const itemSelected = cloneData.find((item) => item.id === id);
//         if (itemSelected) {
//             const childItem = itemSelected.content.find(
//                 (childItem) => childItem.id === idDdata,
//             );
//             const indexOf = itemSelected.content.indexOf(childItem);
//             if (indexOf !== -1) {
//                 itemSelected.content.splice(indexOf, 1);
//             } else {
//                 //error
//             }
//         } else {
//             //error
//         }
//         setData(cloneData);
//     };

//     const pressButton = (item: Group) => {
//         openEditForm(item.id);
//         item.type === 1
//             ? setModalKey(ModalKey.About)
//             : item.type === 2
//                 ? setModalKey(ModalKey.Edu)
//                 : setModalKey(ModalKey.WorkExp);
//         setActiveId(item.id);
//     };
//     const openEditForm = (id: string) => {
//         const filteredData = data.find((item) => item.id === id);

//         if (filteredData) {
//             setModalVisible(!modalVisible);
//         }
//     };

//     const addFormAbout = (id: string, contents: InterAbout) => {
//         const cloneData = [...data];
//         const isSelect = cloneData.find((item) => item.id === id);
//         if (isSelect && contents.title !== '') {
//             isSelect.content.push(contents);
//         }
//         setData(cloneData);
//     };
//     const addFormEdu = (id: string, contents: InterEducation) => {
//         const cloneData = [...data];
//         const isSelect = cloneData.find((item) => item.id === id);
//         if (isSelect && contents.title !== '') {
//             isSelect.content.push(contents);
//         }
//         setData(cloneData);
//     };
//     const addFormWork = (id: string, contents: InterWork) => {
//         const cloneData = [...data];
//         const isSelect = cloneData.find((item) => item.id === id);
//         if (isSelect && contents.title !== '') {
//             isSelect.content.push(contents);
//         }
//         setData(cloneData);
//     };

//     const editAboutItem = () => {
//         const cloneData = [...data];
//         const itemSelected = cloneData.find((item) => item.id === activeId);
//         if (itemSelected) {
//             const childItem = itemSelected.content.find(
//                 (childItem) => childItem.id === childActiveId,
//             );
//             if (childItem) {
//                 childItem.title = textInput1;
//             }
//         }
//         setData(cloneData);
//     };
//     const editEduItem = () => {
//         const cloneData = [...data];
//         const itemSelected = cloneData.find((item) => item.id === activeId);
//         if (itemSelected) {
//             const childItem = itemSelected.content.find(
//                 (childItem) => childItem.id === childActiveId,
//             );
//             if (childItem) {
//                 childItem.title = textInput2;
//                 childItem.isGrad = isGrade;
//             }
//         }
//         setData(cloneData);
//     };
//     const editWorkItem = () => {
//         const cloneData = [...data];
//         const itemSelected = cloneData.find((item) => item.id === activeId);
//         if (itemSelected) {
//             const childItem = itemSelected.content.find(
//                 (childItem) => childItem.id === childActiveId,
//             );
//             if (childItem) {
//                 childItem.title = textInput3;
//                 childItem.position = posit;
//             }
//         }
//         setData(cloneData);
//     };
//     const handleModalAbout = () => {
//         if (textButton === 'Add') {
//             addFormAbout(activeId, {
//                 id: Math.random(),
//                 title: textInput1,
//             });
//             setTextInput1('');
//         } else if (textButton === 'Edit') {
//             editAboutItem();
//         }
//     };
//     const handleModalEdu = () => {
//         if (textButton === 'Add') {
//             addFormEdu(activeId, {
//                 id: Math.random(),
//                 title: textInput2,
//                 isGrad: isGrade,
//             });
//             console.log(isGrade);
//             setTextInput2('');
//         } else if (textButton === 'Edit') {
//             editEduItem();
//         }
//     };
//     const handleWorkExper = () => {
//         if (textButton === 'Add') {
//             addFormWork(activeId, {
//                 id: Math.random(),
//                 title: textInput3,
//                 position: posit,
//             });
//             setTextInput3('');
//         } else if (textButton === 'Edit') {
//             editWorkItem();
//         }
//     };
//     const renderContentModal = () => {
//         return (
//             <View>
//                 <TextInput
//                     placeholder="Here..."
//                     defaultValue={textInput1}
//                     style={styles.textInput}
//                     onChangeText={(text) => setTextInput1(text)}
//                 />
//                 <TouchableHighlight
//                     style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
//                     onPress={() => {
//                         handleModalAbout();
//                         setModalVisible(!modalVisible);
//                     }}>
//                     <Text style={styles.textStyle}>{textButton}</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     };
//     const renderContentModal2 = () => {
//         return (
//             <View>
//                 <TextInput
//                     placeholder="Here..."
//                     style={styles.textInput}
//                     defaultValue={textInput2}
//                     onChangeText={(text) => setTextInput2(text)}
//                 />
//                 <RNPickerSelect
//                     onValueChange={(value) => {
//                         value === 'Graduted' ? setGrade(true) : setGrade(false);
//                     }}
//                     items={[
//                         { label: 'Graduted', value: 'Graduted' },
//                         { label: 'No Graduation', value: 'No Graduation' },
//                     ]}
//                 />
//                 <TouchableHighlight
//                     style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
//                     onPress={() => {
//                         handleModalEdu();
//                         setModalVisible(!modalVisible);
//                     }}>
//                     <Text style={styles.textStyle}>{textButton}</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     };
//     const renderContentModal3 = () => {
//         return (
//             <View>
//                 <TextInput
//                     placeholder="Here..."
//                     style={styles.textInput}
//                     defaultValue={textInput3}
//                     onChangeText={(text) => setTextInput3(text)}
//                 />
//                 <RNPickerSelect
//                     onValueChange={(value) => {
//                         if (value === '1') {
//                             setPosit('Employee');
//                         } else if (value === '2') {
//                             setPosit('Manager');
//                         } else if (value === '3') {
//                             setPosit('Intern');
//                         } else if (value === '4') {
//                             setPosit('Fresher');
//                         } else if (value === '5') {
//                             setPosit('Junior');
//                         }
//                     }}
//                     items={[
//                         { label: 'Employee', value: '1' },
//                         { label: 'Manager', value: '2' },
//                         { label: 'Intern', value: '3' },
//                         { label: 'Fresher', value: '4' },
//                         { label: 'Junior', value: '5' },
//                     ]}
//                 />
//                 <TouchableHighlight
//                     style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
//                     onPress={() => {
//                         handleWorkExper();
//                         setModalVisible(!modalVisible);
//                     }}>
//                     <Text style={styles.textStyle}>{textButton}</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     };
//     const renderHeaderModal = () => {
//         return (
//             <View>
//                 <Text style={styles.titleModel}>
//                     {modalKey === ModalKey.About
//                         ? 'About yourself'
//                         : modalKey === ModalKey.Edu
//                             ? 'Education'
//                             : 'Work Experience'}
//                 </Text>
//             </View>
//         );
//     };
//     const renderAbout = (content: InterAbout[], data: Group) => {
//         return (
//             <View>
//                 {content.map((x, i) => (
//                     <View
//                         key={i}
//                         style={[styles.flexRow, { justifyContent: 'space-between' }]}>
//                         <View style={styles.flexRow}>
//                             <IconMaterialCommunityIcons
//                                 name="rhombus"
//                                 style={styles.rhombus}
//                             />
//                             <Text style={styles.contentInside}>{x.title}</Text>
//                         </View>
//                         <View>
//                             <TouchableOpacity onPress={() => deletedContent(data.id, x.id)}>
//                                 <Text>Delete</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     pressButton(data);
//                                     setChildActiveId(x.id);
//                                     setTextInput1(x.title);
//                                     setTextButton('Edit');
//                                 }}>
//                                 <Text>Edit</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 ))}
//             </View>
//         );
//     };
//     const renderEducate = (content: InterEducation[], data: Group) => {
//         return (
//             <View style={{ flex: 1 }}>
//                 {content.map((x, i) => (
//                     <View
//                         key={i}
//                         style={[styles.flexRow, { justifyContent: 'space-between' }]}>
//                         <View style={styles.flexRow}>
//                             <IconMaterialCommunityIcons
//                                 name="rhombus"
//                                 style={styles.rhombus2}
//                             />
//                             <View>
//                                 <Text>{x.title}</Text>
//                                 <Text style={styles.fadedText}>
//                                     {x.isGrad ? 'Graduate' : 'No Graduation'}
//                                 </Text>
//                             </View>
//                         </View>
//                         <View style={{ right: 10 }}>
//                             <TouchableOpacity onPress={() => deletedContent(data.id, x.id)}>
//                                 <Text>Delete</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     pressButton(data);
//                                     setChildActiveId(x.id);
//                                     setTextInput2(x.title);
//                                     setTextButton('Edit');
//                                 }}>
//                                 <Text>Edit</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 ))}
//             </View>
//         );
//     };
//     const renderWork = (content: InterWork[], data: Group) => {
//         return (
//             <View style={{ flex: 1 }}>
//                 {content.map((x, i) => (
//                     <View
//                         key={i}
//                         style={[styles.flexRow, { justifyContent: 'space-between' }]}>
//                         <View style={styles.flexRow}>
//                             <IconMaterialCommunityIcons
//                                 name="rhombus"
//                                 style={styles.rhombus2}
//                             />
//                             <View>
//                                 <Text>{x.title}</Text>
//                                 <Text style={styles.fadedText}>{x.position}</Text>
//                             </View>
//                         </View>

//                         <View style={{ right: 10 }}>
//                             <TouchableOpacity onPress={() => deletedContent(data.id, x.id)}>
//                                 <Text>Delete</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     pressButton(data);
//                                     setChildActiveId(x.id);
//                                     setTextInput3(x.title);
//                                     setTextButton('Edit');
//                                 }}>
//                                 <Text>Edit</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 ))}
//             </View>
//         );
//     };

//     const Item = (prop: Group) => {
//         return (
//             <View style={styles.body}>
//                 <View style={styles.item}>
//                     <View style={styles.itemTop}>
//                         <View style={styles.flexRow}>
//                             <IconFontAwesome name={prop.iconName} style={styles.iconLeft} />
//                             <Text style={styles.topic}>{prop.title}</Text>
//                         </View>
//                         <TouchableOpacity
//                             style={styles.flexRow}
//                             onPress={() => {
//                                 setModalVisible(true);
//                                 pressButton(prop);
//                                 setTextButton('Add');
//                             }}>
//                             <IconEntypo name="plus" style={styles.iconRight} />
//                             <Text style={styles.add}>Add</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.hr} />
//                     <View style={styles.itemBody}>
//                         {prop.type === 1 && renderAbout(prop.content, prop)}
//                         {prop.type === 2 && renderEducate(prop.content, prop)}
//                         {prop.type === 3 && renderWork(prop.content, prop)}
//                     </View>
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.Header}>
//                 <TouchableOpacity>
//                     <IconEntypo name="menu" style={styles.icon} />
//                 </TouchableOpacity>
//                 <Text style={styles.title}>My Profile</Text>
//                 <TouchableOpacity>
//                     <IconEntypo name="bell" style={styles.icon} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.top}>
//                 <ProgressCircle
//                     percent={50}
//                     radius={50}
//                     borderWidth={7}
//                     color="#3399FF">
//                     <Image
//                         style={styles.image}
//                         source={{
//                             uri:
//                                 'https://photo-zmp3.zadn.vn/cover/0/b/b/5/0bb55eaf1f19451a075759258eab718d.jpg',
//                         }}
//                     />
//                 </ProgressCircle>

//                 <View style={styles.bottomImage}>
//                     <Text style={styles.name}>Maria Murhelrin</Text>
//                     <Text style={styles.percent}>Complete profile 50%</Text>
//                 </View>
//             </View>
//             <View style={styles.flexOne}>
//                 <FlatList data={data} renderItem={({ item }) => Item(item)} />
//                 <Modal animationType="slide" transparent={true} visible={modalVisible}>
//                     <View style={styles.centeredView}>
//                         <View style={styles.modalView}>
//                             {renderHeaderModal()}
//                             {modalKey === ModalKey.About
//                                 ? renderContentModal()
//                                 : modalKey === ModalKey.Edu
//                                     ? renderContentModal2()
//                                     : renderContentModal3()}
//                         </View>
//                     </View>
//                 </Modal>
//             </View>
//         </View>
//     );
// }