import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./screens/login";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import RegistrationScreen from "./screens/registration";
import NewPasswordScreen from "./screens/new-password";
import ForgotPassword from "./screens/forgotPassword";
import VerifyMail from "./screens/verify-mail";
import HomePageParent from "./screens/home-page-parent";
import HomePageBabysitter from "./screens/home-page-babysitter";
import ReviewsPage from "./screens/reviews";
import ReviewScreen from "./screens/reviewScreen";
import MeetingsPage from "./screens/meetings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "react-native-paper/src/components/Button";
import BabysitterDetails from "./screens/babysitterDetails";
import Toast from "react-native-toast-message";
import {BaseToast, ErrorToast} from "react-native-toast-message";
import DynamicNavigation from "./navigator/dynamic-navigation";
import {Provider} from "react-redux";
import {store} from "./store/store";

const Stack = createStackNavigator();
//
// export default function App() {
//   return (
//       <PaperProvider theme={theme}>
//
//       <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       {/*<RegistrationScreen/>*/}
//       {/*<LoginScreen/>*/}
//       {/*<ForgotPassword/>*/}
//       {/*<NewPasswordScreen/>*/}
//       <HomePageParent/>
//       {/*<VerifyMail/>*/}
//       <StatusBar style="auto" />
//     </View>
//       </PaperProvider>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <DynamicNavigation></DynamicNavigation>
        {/* <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="HomePage" component={HomePageParent} />
          <Stack.Screen
            name="HomePageBabysitter"
            component={HomePageBabysitter}
          />
          <Stack.Screen
          name="HomePageParent"
          component={HomePageParent}
        />
          <Stack.Screen name="ReviewsPage" component={ReviewsPage} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
          <Stack.Screen name="MeetingsPage" component={MeetingsPage} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="VerifyMail" component={VerifyMail} />
          <Stack.Screen
            name="BabysitterDetails"
            component={BabysitterDetails}
          />
        </Stack.Navigator> */}
      <Toast position="bottom" config={toastConfig} visibilityTime={2000}/>
      </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "20%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const theme = {
  typescale: { TextInput: { fontFamily: "Inter-Heebo" } },
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    buttonText: "#572152",
    generalText: "#ad2d5a",
    dangerText: "#980814",
    textTheme: "#987695",
    backgroundGreen: "#e5b7db",
    error: "#D6040A",
  },
};

const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props) => (
      <BaseToast
          {...props}
          style={{borderLeftColor: "green"}}
          text1Style={{
              fontSize: 15,
              textAlign: "center",
              fontWeight: "400",
              fontFamily: 'Inter-Heebo'
          }}
      />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props) => (
      <ErrorToast
          {...props}
          style={{borderLeftColor: "red"}}
          text1Style={{
              fontSize: 15,
              textAlign: "center",
              fontWeight: "400",
              fontFamily: 'Inter-Heebo'
          }}
      />
  ),
};
