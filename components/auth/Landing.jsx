import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { act } from "react";

const Landing = ({ navigation }) => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text>Landing</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
    // </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
