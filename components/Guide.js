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

const Guide = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("IPhone14Pro5")}>
      <Text style={styles.guide1}>Guide</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  guide1: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.black,
    textAlign: "left",
    width: 264,
    height: 32,
  },
});

export default Guide;
