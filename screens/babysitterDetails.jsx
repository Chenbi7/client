import React, { useEffect } from "react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, StyleSheet } from 'react-native';
import {useRoute} from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewBox from "../component/reviewBox";

function BabysitterDetails() {
    const route = useRoute();
    var starsRating = [];

    const babysitter = route.params.babysitter;
    const [rating, setRating] = useState(3);
    const [reviews, setReviews] = useState([]);

    const paintStars = () => {
        for(let i = 0; i < 5; i++) {
            starsRating.push(
                <View key={i}>
                <MaterialIcons
                    name={rating-1 >= i ? 'star' : 'star-border'}
                    size={32}
                    style={rating-1 >= i ? styles.starSelected : styles.starUnselected}
                />
                </View>
            );
        }
    }
    
    React.useEffect(() => {
        // setUsers(["maor"]);
        setReviews([{ name: "רוני", rating: 4, description:"נפלא עם ילדים" },
        { name: "דנה", rating: 5, description:"ממליצה בחום" },{ name: "רוני", rating: 4, description:"נפלא עם ילדים" },
        { name: "דנה", rating: 5, description:"ממליצה בחום" }
        ]);
      }, []);
    
    paintStars();

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.babysitterTitle}>{babysitter.name}, {babysitter.age}</Text>
                <View style={styles.stars}>
                    {starsRating}
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.details}>{babysitter.address}</Text>
                    <Text style={styles.details}>{babysitter.phoneNumber}</Text>
                </View>
            <Text style={styles.description}>{babysitter.description}</Text>

            </View>

            <Text style={styles.reviewsTitle}>ביקורות:</Text>
            <ScrollView persistentScrollbar={true} style={styles.reviewsContainer}>
                {reviews.map((review) => {
                    return(<ReviewBox review={review}/>)
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    babysitterTitle: {
        direction: 'rtl',
        color: "black",
        display: "flex",
        flexDirection: "row",
        alignSelf: 'center',
        padding: 30,
        fontSize: 40,
        fontFamily: 'Inter-Heebo',
        fontWeight: "300"
    },
    description: {
        direction: 'rtl',
        alignContent: 'center',
        alignSelf: 'center',
        padding: 20,
        marginTop: 10,
        fontSize:20,
    },
    detailsContainer: {
        marginRight: 40,
        marginTop: 20
    },
    details: {
        textAlign: 'right',
        direction: 'rtl',
        fontSize: 16,
        color: '#404040',
    },
    stars: {
      alignSelf: 'flex-end',
      marginTop: -20,
      display: "flex",
      flexDirection: "row",
      alignSelf: 'center',
    },
    starUnselected: {
      color: '#aaa',
    },
    starSelected: {
        color: '#ffb300',
    },
    contentContainer:{
        flex: 1
    },
    reviewsContainer: {
        flex: 1,
        height:250,
        marginBottom: 50,
        marginHorizontal: 10
    },
    reviewsTitle: {
        fontSize: 25,
        marginRight: 25,
        marginBottom: 5
    }
});

export default BabysitterDetails;
