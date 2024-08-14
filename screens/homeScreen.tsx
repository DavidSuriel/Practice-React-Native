import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const homeScreen = () => {

  const navigation = useNavigation();

  return (
    
      <View>
        <Text
         style = {{
          fontSize:30,
          textAlign: "center",
          marginTop: "20%"
       }}
      >Home Screen </Text>
          <Image 
          source = {require('../assets/logo.webp')} 
          style = {{
          width: "60%",
          height: "50%",
          alignSelf: "center",
          marginTop: "10%"
       }} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Stack',)}
        style={{
          backgroundColor: "red",
          padding:10,
          marginTop: "20%",
          width:  "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              color: "white",
            }}
      >Go to Stack Screen</Text>
      </TouchableOpacity>
      </View>
  );
  }


export default homeScreen;