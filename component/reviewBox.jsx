import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

export default function ReviewBox({ review }) {
    var starsRating = [];
    
    const paintStars = () => {
        for(let i = 0; i < 5; i++) {
            starsRating.push(
                <View key={i}>
                <MaterialIcons
                    name={review.rating-1 >= i ? 'star' : 'star-border'}
                    size={32}
                    style={review.rating-1 >= i ? styles.starSelected : styles.starUnselected}
                />
                </View>
            );
        }
    }
    
    paintStars();

    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.reviewerName}>{review.name}</Text>
            <Text style={styles.revieweDescription}>{review.description}</Text>
            <View style={styles.stars}>
                {starsRating}
            </View>
        </View>
    );
}
    
const styles = StyleSheet.create({
    reviewContainer: {
        borderWidth: 1,
        padding: 20,
        margin:8,
        marginHorizontal:10 
    },
    reviewerName: {
        direction: 'rtl',
        alignSelf: 'flex-end',
        marginTop: -10
    },
    revieweDescription: {
        direction: 'rtl',
        alignSelf: 'flex-end',
        marginRight: 25,
        fontSize: 17
    },
    stars: {
      flexDirection: 'row',
      display: "flex",
      position: 'absolute',
        margin: 10
    },
    starUnselected: {
      color: '#aaa',
    },
    starSelected: {
      color: '#ffb300',
    },
});