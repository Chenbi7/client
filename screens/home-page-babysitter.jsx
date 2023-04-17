import React from "react";
import {
  Paragraph,
  Searchbar,
  DataTable,
  TouchableRipple,
  Colors,
} from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
  ImageBackground,
} from "react-native";
import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import globalStyles from "../styles";

import Toast from "react-native-toast-message";
import Loading from "../component/modal-loading";
import { TouchableOpacity } from "react-native-gesture-handler";

function HomePageBabysitter({ navigation }) {
  const theme = useTheme();
  const [searchText, setSearchText] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [available, setAvailable] = React.useState(false);
  const [currentBabySitterDisplay, setCurrentBabySitterDisplay] =
    React.useState([{}]);

  React.useEffect(() => {
    setUsers(["maor"]);
    setCurrentBabySitterDisplay([
      {
        name: "הורה 1",
        age: 26,
        rate: 4,
        address: "חנקין 3, ראשון לציון",
        location: "ישראל",
        phoneNumber: "054-9542812",
        description: "שלום, שמי מאור ואני מסתדר מעולה עם ילדים",
      },
      {
        name: "הורה 2",
        age: 23,
        rate: 3,
        address: "חנקין 3, ראשון לציון",
        location: "ישראל",
        phoneNumber: "054-9542812",
        description: "היי אני חן ואני מבשלת מעולה",
      },
    ]);
  }, []);
  const [visibleLoading, setVisibleLoading] = React.useState(false);
  //
  // React.useEffect(() => {
  //     getAllBabySitter()
  // }, []);

  function availableChangeHandler() {
    available ? setAvailable(false) : setAvailable(true);
  }

  function getAllBabySitter() {}

  return (
    <ImageBackground style={globalStyles.imageBackground}>
      <View>
        <View
          style={[
            styles.bottomButton,
            { backgroundColor: available ? "red" : "green" },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              availableChangeHandler();
            }}
            rippleColor={Colors.white}
            style={styles.button}
          >
            {available ? (
              <Text style={styles.buttonText}>לא זמין</Text>
            ) : (
              <Text style={styles.buttonText}>זמין</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              navigation.navigate("ReviewsPage");
            }}
          >
            <Text style={styles.secondaryButtonText}>ביקורות</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>פגישות שבוצעו</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ height: "60%" }}
          showsVerticalScrollIndicator={true}
          indicatorStyle={"black"}
          scrollEnabled={true}
          vertical={true}
        ></ScrollView>

        <Loading
          visibleLoading={visibleLoading}
          setVisibleLoading={setVisibleLoading}
          message={"אנא המתן"}
        />
      </View>
    </ImageBackground>
  );
}

export default HomePageBabysitter;

const styles = StyleSheet.create({
  actionsTitle: {
    color: "black",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Inter-Heebo",
  },
  titleItemHeader: {
    color: "#425746",
    fontFamily: "Inter-Heebo",
  },
  itemHeader: {
    color: "black",
    fontFamily: "Inter-Heebo",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  buttonFilter: {
    marginRight: 300,
  },
  tableEvents: {
    paddingLeft: 10,
    paddingRight: 10,
    height: "90%",
  },
  rowTable: {
    height: 80,
  },
  colTable: {
    display: "flex",
    justifyItems: "start",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 2,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
    width: "90%",
    alignSelf: "center",
  },
  containerTableAndFilter: {
    paddingTop: 50,
  },
  lineBetween: {
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    // borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowButton: {
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 5,
  },
  actionsColumn: {
    width: "25%",
    justifyContent: "center",
    textAlign: "center",
  },
  actionFlexColumn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 1,
    marginBottom: 2,
  },
  descriptionColumn: {
    width: "25%",
    justifyContent: "center",
    textAlign: "center",
  },
  titleColumn: {
    width: "15%",
    justifyContent: "center",
    textAlign: "center",
  },
  iconColumn: {
    justifyContent: "center",
    alignItems: "center",
  },
  tableHeaders: {
    marginTop: "2%",
    padding: "2%",
  },
  button: {
    width: 80,
    height: 60,
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Inter-Heebo",
  },
  bottomButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    position: "absolute",
    bottom: "10%",
    alignSelf: "center",
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "10%",
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});
//  <View style={styles.containerTableAndFilter}>
//         <DataTable
//           style={[
//             globalStyles.rtlDirection,
//             styles.tableEvents,
//             { borderBottomWidth: 0 },
//           ]}
//         >
//           <DataTable.Header
//             style={[
//               { direction: globalStyles.rtlDirection },
//               { backgroundColor: theme.colors.backgroundGreen },
//             ]}
//           >
//             <DataTable.Title style={[globalStyles.centerText]}>
//               #
//             </DataTable.Title>
//             <DataTable.Title style={globalStyles.centerText}>
//               שם
//             </DataTable.Title>
//             <DataTable.Title style={globalStyles.centerText}>
//               פעולות
//             </DataTable.Title>
//           </DataTable.Header>
//           <ScrollView>
//             {users.length > 0 ? (
//               currentUsersDisplay.map((user, index) => (
//                 <DataTable.Row
//                   key={index}
//                   style={[globalStyles.rtlDirection, styles.rowTable]}
//                 >
//                   <DataTable.Cell
//                     style={[globalStyles.centerText, { flex: 1 }]}
//                   >
//                     <Paragraph>{index + 1}</Paragraph>
//                   </DataTable.Cell>
//                   <DataTable.Cell
//                     style={[globalStyles.centerText, { flex: 1 }]}
//                   >
//                     <Paragraph style={globalStyles.p7}>{user.name}</Paragraph>
//                   </DataTable.Cell>
//                   <DataTable.Cell
//                     style={[
//                       globalStyles.centerText,
//                       styles.actions,
//                       { flex: 2 },
//                     ]}
//                   >
//                     <TouchableRipple onPress={() => {
//                       confirmUser(user._id, true);
//                     }}>
//                     <Icon
//                       name="check"
//                       size={25}
//                       color={"green"}
//                       style={globalStyles.p7}
//                  />
//                     </TouchableRipple>
//                     <Paragraph style={{ padding: 1 }}>      </Paragraph>
//                     <TouchableRipple  onPress={() =>
//                         Linking.openURL(
//                             `http://wa.me/972${user.phoneNumber.slice(1)}`
//                         )
//                     }>
//                     <Icon
//                       name="whatsapp"
//                       size={25}
//                       color={"green"}
//                       style={globalStyles.p7}
//
//                     />
//                     </TouchableRipple>
//                   </DataTable.Cell>
//                 </DataTable.Row>
//               ))
//             ) : (
//               <Paragraph
//                 style={[globalStyles.centerText, globalStyles.rtlDirection]}
//               >
//                 ...לא קיימים משתמשים המחכים לאישור{" "}
//               </Paragraph>
//             )}
//           </ScrollView>
//         </DataTable>
//       </View>
