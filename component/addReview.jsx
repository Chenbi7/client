import React, { useState } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput} from "react-native-paper";
import globalStyles from "../styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { MaterialIcons } from '@expo/vector-icons';

export default function AddReview({ username, setIsOnAddReview }) {
    const [text, onChangeText] = React.useState('');
    const [starRating, setStarRating] = useState(0);
    var starsRatingPainting = [];

    const onSaveReview = () => {
        setIsOnAddReview();
        console.log(`${text} + ${starRating}`)
    }

    const paintStars = () => {
        for(let i = 1; i < 5 + 1; i++) {
            starsRatingPainting.push(
                <View key={i}>
                <TouchableOpacity onPress={() => setStarRating(i)}>
                <MaterialIcons
                    name={starRating >= i ? 'star' : 'star-border'}
                    size={32}
                    style={starRating >= i ? styles.starSelected : styles.starUnselected}
                />
                </TouchableOpacity>
                </View>
            );
        }
    }

    paintStars();

    return (

        <ImageBackground style={globalStyles.imageBackground}>

            <View style={styles.reviewContainer}>
                    <ScrollView style={{height: '100%'}}>
                        <View>
                            <View style={styles.topRow}>
                                <View style={styles.stars}>{starsRatingPainting}</View>
                                <Text style={styles.reviewer}>ביקורת מאת: {username}</Text>                     
                            </View>
                            <KeyboardAvoidingView behavior={"height"}>
                                <View style={styles.topRow}>
                                    <Pressable style={styles.addReview} onPress={onSaveReview}>
                                        <Text style={styles.addReviewText}>שמירת ביקורת</Text>
                                    </Pressable>
                                    <SafeAreaView style={{height: '100%'}}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="כתוב ביקורת..."
                                            onChangeText={onChangeText}
                                            value={text}
                                            multiline={true}
                                            maxLength={200}
                                            selectionColor="gray"
                                            activeUnderlineColor="gray"
                                        />
                                    </SafeAreaView>
                                </View>
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
            </View>
        </ImageBackground>
    );
}
    
const styles = StyleSheet.create({
    reviewContainer: {
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: "pink",
        marginTop: 1
    },
    input: {
        backgroundColor: 'transparent',
        margin: 12,
        padding: 10,
        textAlign: "right",
        marginTop: -10,
        width: 220,
    },
    reviewer: {
        fontSize: 16,
        position: 'absolute',
        right: 20,
        top: '40%'
    },
    topRow: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        padding: 7,
    },
    stars: {
        marginLeft: 4,
        display: 'flex',
        flexDirection: 'row',
    },
    addReview: {
        backgroundColor: '#e3e1e1',
        borderRadius: 3,
        borderWidth: 2,
        borderColor: "pink",
        padding: 5,
        height: 40,
        verticalAlign: 'middle',
        paddingHorizontal: 10,
        marginTop: 40,
    },
    starUnselected: {
    color: '#aaa',
    },
    starSelected: {
    color: '#ffb300',
    },
});