import React from "react";
import { useState } from "react";
import { Linking, ScrollView, View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { useRoute, useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewBox from "../component/reviewBox";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AddReview from "../component/addReview";
import Button from "react-native-paper/src/components/Button";
import HttpService from "../services/http-service";
import globalStyles from "../styles";
import { useSelector } from "react-redux";

function BabysitterDetails({ navigation }) {
  const route = useRoute();
  const theme = useTheme();
  var starsRating = [];

  const babysitter = route.params.babysitter;
  const [rating, setRating] = useState(0);
  const { user } = useSelector((state) => state.user);
  const [reviews, setReviews] = useState([]);
  const [isOnAddReview, setIsOnAddReview] = useState(false);

  React.useEffect(() => {
    return navigation.addListener("focus", () => {
      HttpService.getFeedbackByBaybysitter(babysitter._id)
        .then((response) => {
          setReviews(response.data);
          Toast.show({
            type: "error",
            message: response.data,
          });
        })
        .catch(() => {
          Toast.show({
            type: "error",
            message: "הייתה בעיית תקשורת",
          });
        });
    });
  }, [navigation]);

  const paintStars = () => {
    for (let i = 0; i < 5; i++) {
      starsRating.push(
        <View key={i}>
          <MaterialIcons
            name={rating - 1 >= i ? "star" : "star-border"}
            size={32}
            style={
              rating - 1 >= i ? styles.starSelected : styles.starUnselected
            }
          />
        </View>
      );
    }
  };

  // React.useEffect(() => {
  //   // setUsers(["maor"]);
  //   setReviews([
  //     { name: "רוני", rating: 4, description: "נפלא עם ילדים" },
  //     { name: "דנה", rating: 5, description: "ממליצה בחום" },
  //     { name: "רוני", rating: 4, description: "נפלא עם ילדים" },
  //     { name: "דנה", rating: 5, description: "ממליצה בחום" },
  //   ]);
  // }, []);

  paintStars();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.babysitterTitle}>
          {babysitter.name}, {babysitter.age}
        </Text>
        <View style={styles.stars}>{starsRating}</View>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{babysitter.address.latitude}</Text>
          <Text style={styles.details}>{babysitter.phone}</Text>
        </View>

        {!isOnAddReview ? (
          <Text style={styles.description}>{babysitter.description}</Text>
        ) : (
          <></>
        )}
      </View>

      <View style={styles.reviewRow}>
        {!isOnAddReview ? (
          <View>
            <Pressable
              style={styles.addReview}
              onPress={() => setIsOnAddReview(true)}
            >
              <Text style={styles.addReviewText}>הוספת ביקורת</Text>
            </Pressable>
          </View>
        ) : (
          <></>
        )}
        <Text style={styles.reviewsTitle}>
          {isOnAddReview ? "הוספת ביקורת" : "ביקורות:"}
        </Text>
      </View>
      {!isOnAddReview ? (
        <ScrollView persistentScrollbar={true} style={styles.reviewsContainer}>
          {reviews.map((review) => {
            return <ReviewBox review={review} />;
          })}
          <View style={styles.buttonContainer}>
            <Button
              color={theme.colors.buttonText}
              mode={"outlined"}
              style={[
                styles.generalButton,
                globalStyles.buttonBackground,
                styles.forgotPasswordButton,
              ]}
              onPress={() => {
                Linking.openURL(
                  "http://api.whatsapp.com/send?phone=+972" +
                    babysitter.phone.split("-")[0] +
                    babysitter.phone.split("-")[1]
                );
              }}
            >
              <Text style={{ color: "purple" }}> ליצירת קשר</Text>
            </Button>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.reviewsContainer}>
          <AddReview
            username="נועה"
            setIsOnAddReview={() => setIsOnAddReview(false)}
          ></AddReview>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  babysitterTitle: {
    direction: "rtl",
    color: "black",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    padding: 30,
    fontSize: 40,
    fontFamily: "Inter-Heebo",
    fontWeight: "300",
  },
  description: {
    direction: "rtl",
    alignContent: "center",
    alignSelf: "center",
    padding: 20,
    marginTop: 10,
    fontSize: 20,
  },
  detailsContainer: {
    marginRight: 40,
    marginTop: 20,
  },
  details: {
    textAlign: "right",
    direction: "rtl",
    fontSize: 16,
    color: "#404040",
  },
  stars: {
    marginTop: -20,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  starUnselected: {
    color: "#aaa",
  },
  starSelected: {
    color: "#ffb300",
  },
  contentContainer: {
    flex: 1,
  },
  reviewsContainer: {
    flex: 1,
    height: 250,
    marginBottom: 50,
    marginHorizontal: 10,
  },
  reviewRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  reviewsTitle: {
    marginLeft: "auto",
    height: 35,
    fontSize: 25,
    marginRight: 25,
    marginTop: 8,
  },
  addReview: {
    backgroundColor: "#e3e1e1",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "pink",
    marginLeft: 20,
  },
  addReviewText: {
    fontSize: 17,
    color: "#404040",
    padding: 6,
  },
  generalButton: {
    marginTop: 10,
    marginLeft: 100,
    marginRight: 100,
  },
});

export default BabysitterDetails;
