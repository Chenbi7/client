import AsyncStorage from '@react-native-async-storage/async-storage';
import HttpService from "./http-service";

class LocalStorageService {
        static async storeUser(user) {
            try {
               await AsyncStorage.setItem('user', JSON.stringify(user))
            } catch (e) {
                console.log('didn\'t manage to save user to local storage')
            }
        }

    static async getUser(){
        try {
            const value = await AsyncStorage.getItem('user')
            if(value !== null) {
                return JSON.parse(value);
            }
        } catch(e) {
            console.log('didn\'t manage to get data from local storage')
        }
    }

    static async storeNonUserToken(token) {
        try {
            await AsyncStorage.setItem('token', token)
        } catch (e) {
            console.log('didn\'t manage to save userStatus to local storage')
        }
    }

    static async getNonUserToken() {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            return value;
        } else {
            throw new Error('the user status is null')
        }
    }

    static async setUserStatusAsLoggedIn() {
        try {
            await AsyncStorage.setItem('userStatus', HttpService.LOGGED_IN)
        } catch (e) {
            console.log('didn\'t manage to save userStatus to local storage')
        }
    }


    static async getUserStatus() {
        const value = await AsyncStorage.getItem('userStatus')
        if (value !== null) {
            return value;
        } else {
            throw new Error('the user status is null')
        }
    }

    static async clearData() {
        try {
            await AsyncStorage.setItem('user', '')
            await AsyncStorage.setItem('userStatus', '')
        } catch (e) {
            console.log('didn\'t manage to save user to local storage')
        }
    }
}

export default LocalStorageService;