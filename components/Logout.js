import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Logout = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("SN$715:24$")}>
      <Text style={styles.logout1}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logout1: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.black,
    textAlign: "left",
    width: 264,
    height: 32,
  },
});

export default Logout;
