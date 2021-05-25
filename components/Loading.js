import React from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading({ isVisible, text }) {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View>
        <ActivityIndicator />
        {text && <Text>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    with: 200,
    backgroundColor: "#fff",
    borderColor: "#bc545c",
    borderWidth: 2,
    borderRadius: 10,
  },
});
