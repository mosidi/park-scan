import * as React from "react";
import { Image, StyleSheet } from "react-native";

const GroupIcon = () => {
  return (
    <Image
      style={styles.groupIcon}
      resizeMode="cover"
      source={require("../assets/group-55.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    flex: 1,
    width: "100%",
    height: 225,
  },
});

export default GroupIcon;
