import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import LoadingScreen from "../screens/loading-screen";
import LoginDrawerNavigator from "./login-drawer-navigator";
import AppNavigator from "./app-navigation";
import {useSelector} from "react-redux";
import HttpService from "../services/http-service";

const DynamicNavigation = () => {
    const Drawer = createDrawerNavigator();
    const { user } = useSelector((state) => state.user);

    if (user.userStatus === HttpService.LOGGED_OUT)
        return (<LoginDrawerNavigator/>)
    else if (user.userStatus === HttpService.LOGGED_IN)
        return (<AppNavigator/>)
    else
        return (
        <Drawer.Navigator
            initialRouteName="LoadingScreen">
            <Drawer.Screen
                options={{title: 'טוען', headerShown: false}}
                name="LoadingScreen"
                component={LoadingScreen}/>
        </Drawer.Navigator>
    )
}

export default DynamicNavigation;