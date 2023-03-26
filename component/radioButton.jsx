import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Pressable} from 'react-native';
import { useState } from "react";

export default function RadioButton({ data, onSelect }) {

const [userOption, setUserOption] = useState("הורה");

const selectHandler = (value) => {
  onSelect(value);
  setUserOption(value);
};

  return (
    <View style={styles.registrationRadioButton}>
      {data.map((type) => {
        return (
        <Pressable
        style={[type === userOption ? styles.selected : '' , styles.userTypeButton]}
           onPress={() => selectHandler(type)}>
          <Text style={type === userOption ? styles.typeSelected : ''}> {type}</Text>
        </Pressable>
      );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    registrationRadioButton:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-around',
        height: '50%',
        margin:20,
        marginBottom: 50,
        direction: "rtl",
        fontFamily: 'Inter-Heebo',
    },
      selected: {
        backgroundColor: '#e9e2ec',
      },
      typeSelected: {
        fontSize: 16,
      },
      userTypeButton: {
        height: 50,
        borderWidth: 1,
        width: '45%',
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }
  });