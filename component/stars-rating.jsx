import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Stars() {
    const [starRating, setStarRating] = useState(null);
    var starsRatingPainting = [];

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
        <View style={styles.stars}>
            {starsRatingPainting}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    },
    heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    stars: {
    display: 'flex',
    flexDirection: 'row',
    },
    starUnselected: {
    color: '#aaa',
    },
    starSelected: {
    color: '#ffb300',
    },
});
