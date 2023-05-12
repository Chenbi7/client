import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button, List, Title} from 'react-native-paper';
import LocalStorageService from '../services/local-storage-service';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/reducer";
import DeleteUserComponent from "./modal-delete-user";


const CustomDrawerContent = ({navigation}) => {
    // const theme = useTheme();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);

    // const [isAdmin, setIsAdmin] = React.useState(false);
    // const legalPermissionFamily = [
    //     "- בעת תיאום אירוח, יש לבקש מהחייל או החיילת להציג חוגר לצורך אימות.",
    //     "- יש ליצור קשר טלפוני עם החייל לפני תיאום ומסירת פרטים.",
    //     "- שימו לב, אחריות אישור משפחות חדשות היא שלכם. אנא אמתו את המשפחה בקפידה תוך הצגת תעודות מזהות ושיחה, בעדיפות לשיחת וידאו.",
    //     "- הצעות לשיפור או בעיות ניתן לשלוח למייל babysittingappteam@gmail.com",
    // ];


    React.useEffect(() => {
        // LocalStorageService.getUser().then(res => {
        //     if (res) {
        //         setIsAdmin(res.user?.admin)
        //     }
        // })
    },[]);

    return (
        <View style={styles.mainContent}>
            <View>
                <List.Icon icon="account-circle" style={styles.userIcon}/>
                <Title style={styles.title}>{user.username}</Title>
            </View>
            <View style={styles.firstButtonsSection}>
                <Button
                    // color={import {Button, List, Paragraph, Title} from 'react-native-paper';.colors.buttonText}
                    mode={"outlined"}
                    style={[styles.drawButton]}
                    onPress={() => navigation.navigate('registration', {isUpdateScreen: true})}>
                    <Text>עדכון פרטים</Text>
                </Button>
              
            </View>
            <View style={styles.secondButtonSection}>
                <Button
                    icon={'account-arrow-right-outline'}
                    // color={theme.colors.buttonText}
                    mode={"outlined"}
                    style={[styles.drawButton]}
                    onPress={() => {
                        LocalStorageService.clearData().then()
                        navigation.closeDrawer();
                        dispatch(logout())
                    }}>
                    <Text>התנתק</Text>
                </Button>
                <View style={styles.generalButton}>
                     <DeleteUserComponent navigation={navigation}/>
                </View>
            </View>
            <View style={styles.permissionButton}>
                {/* <ModalLegalPermission legalPermission={legalPermissionFamily}/> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: 0,
        fontFamily: 'Inter-Heebo'
    },
    drawButton: {
        marginRight: "10%",
        marginLeft: "10%",
        fontFamily: 'Inter-Heebo'
    },
    userIcon: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    firstButtonsSection: {
        textAlign: 'center', marginTop: "5%"
    },
    secondButtonSection: {
        textAlign: 'center', marginTop: '90%'
    },
    permissionButton: {
        marginTop: '10%',
        fontFamily: 'Inter-Heebo'
    },
    generalButton: {
        marginTop: "2%",
        fontFamily: 'Inter-Heebo'
    },
    mainContent: {
        marginTop: 50
    }
})

export default CustomDrawerContent;
