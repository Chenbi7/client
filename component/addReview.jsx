import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

export default function AddReview({ username }) {

    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.reviewer}>ביקורת מאת: {username}</Text>
            <KeyboardAvoidingView behavior={"position"}>
                <SafeAreaView style={{height: '100%'}}>
                <TextInput
                    style={styles.input}
                    placeholder="Write your review..."
                />
                </SafeAreaView>
            </KeyboardAvoidingView>            
        </View>
    );
}
    
const styles = StyleSheet.create({
    reviewContainer: {
        flex: 1,
        height:250,
        marginBottom: 50,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: 'pink',
    },
    input: {
        backgroundColor: 'transparent',
      height: 40,
      margin: 12,
      padding: 10,
    },
    reviewer: {
        alignSelf: 'flex-end',
        fontSize: 16,
        padding: 10
    }
});