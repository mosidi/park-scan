import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const HomeIndicator = ({ style }) => {
  return (
    <View style={[styles.homeindicator, style]}>
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
  },
});

export default HomeIndicator;
