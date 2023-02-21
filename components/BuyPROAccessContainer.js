import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const BuyPROAccessContainer = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("IPhone14Pro13")}>
      <Text style={styles.text}>
        <Text style={styles.buy}>{`Buy `}</Text>
        <Text style={styles.pro}>PRO</Text>
        <Text style={styles.access}> access</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buy: {
    fontFamily: FontFamily.dMSansRegular,
  },
  pro: {
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
  },
  access: {
    fontFamily: FontFamily.dMSansRegular,
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.black,
    textAlign: "left",
    width: 264,
    height: 32,
  },
});

export default BuyPROAccessContainer;
