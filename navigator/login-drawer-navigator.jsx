
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Image, Platform, StyleSheet} from "react-native";
import LoginScreen from "../screens/login";
import RegistrationScreen from "../screens/registration";
import { IconButton } from "react-native-paper";
import NewPasswordScreen from "../screens/new-password";
import ForgotPassword from "../screens/forgotPassword";
import VerifyMail from "../screens/verify-mail";



const LoginDrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={({navigation}) => (getScreenOptions(navigation))}
            initialRouteName="Login"
            backBehavior={'history'}>
            <Drawer.Screen
                options={{title: 'כניסה', headerShown: false}}
                name="Login" component={LoginScreen}/>
            <Drawer.Screen
                options={{title: 'הרשמה', headerShown: true}}
                name="Registration" component={RegistrationScreen}/>
            <Drawer.Screen
                options={{title: 'סיסמה חדשה', headerShown: true}}
                name="NewPassword" component={NewPasswordScreen}/>
            <Drawer.Screen
                options={{title: 'שכחת סיסמה', headerShown: true}}
                name="ForgotPassword" component={ForgotPassword}/>
            <Drawer.Screen
                options={{title: 'אימות מייל', headerShown: true}}
                name="VerifyMail" component={VerifyMail}/>
        </Drawer.Navigator>
    )
}

function getScreenOptions(navigation) {
    return (
        {
            swipeEdgeWidth: 0,
            labelStyle: {color: "white"},
            drawerPosition: "right",
            drawerStyle: {
                backgroundColor: '#d3e0d1',
                width: 300,
            },
            headerStyle: {
                backgroundColor: '#e5b7db',
            },
            headerTintColor: '#425746',
            headerTitleStyle: {
                fontSize: 30,
                paddingLeft:5,
                paddingRight:5,
                textShadowOffset: {width: 0, height: 0},
                textShadowColor:'white',
                textShadowRadius:10,
            },
            headerLeft: () => Platform.OS==='ios' ? getLeftButton(navigation):getRightButton(navigation),
            headerRight: () => Platform.OS==='ios' ? getRightButton(navigation):getLeftButton(navigation),
        }
    )
}


function getLeftButton(navigation) {
    return (
        <IconButton
            icon="chevron-left"
            color={'#425746'}
            size={45}
            onPress={() => navigation.goBack()}
        />
    )
}

function getRightButton() {
    return (<></>)
}

export default LoginDrawerNavigator;