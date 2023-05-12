import React from "react";
import {View, ImageBackground} from "react-native";
import {ActivityIndicator, Colors} from "react-native-paper";
import {useDispatch} from "react-redux";
import LocalStorageService from "../services/local-storage-service";
import HttpService from "../services/http-service";
import {login, logout} from "../store/reducer";

function LoadingScreen() {
const dispatch = useDispatch();

    React.useEffect(() => {
        LocalStorageService.getUserStatus().then((userStatus) => {
           if (userStatus === HttpService.LOGGED_IN) {
                HttpService.logInWithToken().then((res) => {
                        dispatch(login(res.user))
                    }
                ).catch(()=>{
                    dispatch(logout())})
            }
            else {
                dispatch(logout())
    }
        }).catch(() => {
            dispatch(logout())
        })
    }, []);

    return (
        <View>
            <ActivityIndicator style={{marginTop: 200}} size={200} animating={true} color={Colors.green300}/>
        </View>
    )
}

export default LoadingScreen;