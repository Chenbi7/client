import {IconButton} from "react-native-paper";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Image, Platform, TouchableWithoutFeedback} from "react-native";
import HomePageBabysitter from "../screens/home-page-babysitter";
import HomePageParent from "../screens/home-page-parent";
import ReviewsPage from "../screens/reviews";
import ReviewScreen from "../screens/reviewScreen";
import MeetingsPage from "../screens/meetings";
import BabysitterDetails from "../screens/babysitterDetails";
import CustomDrawerContent from "../component/custom-drawer-content";
import NavigationScreen from "../screens/vavigation-screen";
import myReviews from "../screens/myReviews";

const AppNavigator = () => {

    const Drawer = createDrawerNavigator();

    return (
    
        <Drawer.Navigator
            drawerContent={({navigation}) => <CustomDrawerContent navigation={navigation}/>}
            screenOptions={({navigation}) => (getScreenOptions(navigation))}
            initialRouteName="selectEvent"
            backBehavior={'history'}>
            <Drawer.Screen
                options={{title: 'דף טעינה', headerShown: false}}
                name="NavigationScreen"
            component={NavigationScreen}/>
            {Platform.OS==='ios' ?
            <Drawer.Screen
                options={{title: 'דף הבית', headerLeft: () => {}}}
                name="HomePageBabysitter"
            component={HomePageBabysitter}/>:
            <Drawer.Screen
                options={{title: 'דף הבית', headerRight: () => {}}}
                name="HomePageBabysitter"
            component={HomePageBabysitter}/>}
             {Platform.OS==='ios' ?
            <Drawer.Screen
                options={{title: 'דף הבית', headerLeft: () => {}}}
                name="HomePageParent"
          component={HomePageParent}/>:
            <Drawer.Screen
                options={{title: 'דף הבית', headerRight: () => {}}}
                name="HomePageParent"
          component={HomePageParent}/>}
          <Drawer.Screen
                options={{title: 'הביקורות שלי'}}
                name="MyReviewsPage" component={myReviews}/>
            <Drawer.Screen
                options={{title: 'ביקורות'}}
                name="ReviewsPage" component={ReviewsPage}/>
            <Drawer.Screen
                options={{title: 'ביקורת'}}
                name="ReviewScreen" component={ReviewScreen}/>
            <Drawer.Screen
                options={{title: 'פגישות'}}
                name="MeetingsPage" component={MeetingsPage}/>
            <Drawer.Screen
                options={{title: 'פרטים'}}
                name="BabysitterDetails"
            component={BabysitterDetails}/>

        </Drawer.Navigator>
    )
}

function getScreenOptions(navigation) {
    return (
        {
            labelStyle: {
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            },
            drawerPosition: "right",
            drawerStyle: {
                backgroundColor: '#e5b7db',
                width: 300,
            },
            haderStyle: {
                backgroundColor: '#e5b7db',
            },


            headerTintColor: '#425746',
            
            headerTitleStyle: {
                fontSize: 30,
                fontFamily: 'Heebo-bold',
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

function getRightButton(navigation) {
    return (
        <IconButton
            icon="air-filter"
            color={'#425746'}
            size={45}
            onPress={() => navigation.toggleDrawer()}
        />
    )
}

export default AppNavigator;
