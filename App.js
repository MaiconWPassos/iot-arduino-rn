import React,{ useState } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

export default function App() {

  const [luz, setLuz] = useState(false);
 


  function handleLuz(params) {
      let status = setLuz(!luz)
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLuz}>
        <Icon name="bulb1" size={70} color={luz ? '#ffdd00' : '#ccc'} />
      </TouchableOpacity>
      <Text>{}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100
  }
});
