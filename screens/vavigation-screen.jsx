import React from "react";
import {View, ImageBackground} from "react-native";
import {ActivityIndicator, Colors} from "react-native-paper";
import {useSelector} from "react-redux";


function NavigationScreen({ navigation }) {
const { user } = useSelector((state) => state.user);

    React.useEffect(() => {
        return navigation.addListener('focus', () => {

        if(user.isBabysitter)
        {
            navigation.navigate("HomePageBabysitter")
        } 
        else
        {
            navigation.navigate("HomePageParent")
        }
    })


    }, []);

    return (
        <View>
            <ActivityIndicator style={{marginTop: 200}} size={200} animating={true} color={Colors.green300}/>
        </View>
    )
}

export default NavigationScreen;