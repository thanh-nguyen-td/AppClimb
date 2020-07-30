/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SignUp, SignIn, Info1, Main, Loading, ProFile, Message, MyWork, Jobs } from '@screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '@config';
import { Icon } from 'react-native-elements';
import { Colors } from '@themes'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const MainStack = createStackNavigator();
const Info1Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MyworkStack = createStackNavigator();
const MessageStack = createStackNavigator();
const JobsStack = createStackNavigator();
const SignUpStack = createStackNavigator();

function LoadingNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={Screens.Loading} component={Loading} />
    </HomeStack.Navigator>
  )
}

function LoginNavigator() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name={Screens.SignIn} component={SignIn}></LoginStack.Screen>
    </LoginStack.Navigator>
  )
}

function SignUpNavigator() {
  return (
    <SignUpStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpStack.Screen name={Screens.SignUp} component={SignUp} />
    </SignUpStack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={Screens.JobsNavigator}
      tabBarOptions={{
        activeTintColor: Colors.black,
      }}>
      <Tab.Screen name={Screens.JobsNavigator} component={JobsNavigator} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name='md-calendar' type='ionicon' color={focused ? Colors.black : Colors.grayy} />
        ),
      }} />
      <Tab.Screen name={Screens.Message} component={Message} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name='ios-briefcase-outline' type='ionicon' color={focused ? Colors.black : Colors.grayy} />
        ),
      }} />
      <Tab.Screen name={Screens.MyWork} component={MyWork} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name='ios-chatbubbles-outline' type='ionicon' color={focused ? Colors.black : Colors.grayy} />
        ),
      }} />
      <Tab.Screen name={Screens.ProFile} component={ProFile} options={{
        tabBarIcon: ({ focused }) => (

          <Icon name='ios-person-outline' type='ionicon' color={focused ? Colors.black : Colors.grayy} />
        ),
      }} />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={Screens.Main} component={Main} />
    </MainStack.Navigator>
  )
}

function Info1gNavigator() {
  return (
    <Info1Stack.Navigator>
      <Info1Stack.Screen name={Screens.Info1} component={Info1} />
    </Info1Stack.Navigator>
  )
}

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={Screens.ProFile} component={ProFile} />
    </ProfileStack.Navigator>
  )
}

function MyworkNavigator() {
  return (
    < MyworkStack.Navigator>
      < MyworkStack.Screen name={Screens.MyWork} component={MyWork} />
    </ MyworkStack.Navigator>
  )
}

function MessageNavigator() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name={Screens.Message} component={Message} />
    </MessageStack.Navigator>
  )
}

function JobsNavigator() {
  return (
    <JobsStack.Navigator screenOptions={{ headerShown: false }}>
      <JobsStack.Screen name={Screens.Jobs} component={Jobs} />
    </JobsStack.Navigator>
  )
}

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.LoadingNavigator} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Screens.LoadingNavigator} component={LoadingNavigator} />
          <Stack.Screen name={Screens.LoginNavigator} component={LoginNavigator} />
          <Stack.Screen name={Screens.SignUpNavigator} component={SignUpNavigator} />
          <Stack.Screen name={Screens.MyTabs} component={MyTabs} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
