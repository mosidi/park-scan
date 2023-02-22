import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ParkingDiscFilter = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Image
        style={styles.groupItem}
        resizeMode="cover"
        source={require("../assets/ellipse-151.png")}
      />
      <Image
        style={styles.groupInner}
        resizeMode="cover"
        source={require("../assets/vector-71.png")}
      />
      <Text style={styles.youNeedA}>You need a parking disc</Text>
      <Image
        style={styles.iconLocationPin}
        resizeMode="cover"
        source={require("../assets/-icon-location-pin2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 62,
    width: 294,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.whitesmoke_200,
    shadowColor: "rgba(11, 49, 50, 0.31)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#0b3132",
    borderWidth: 1,
  },
  groupItem: {
    top: 15,
    left: 16,
    width: 32,
    height: 32,
    position: "absolute",
  },
  groupInner: {
    top: 16,
    left: 61,
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
    position: "absolute",
  },
  youNeedA: {
    top: 14,
    left: 74,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    // lineHeight: 11,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.midnightblue_200,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 204,
    height: 34,
    position: "absolute",
  },
  iconLocationPin: {
    height: "33.39%",
    width: "6.78%",
    top: "32.26%",
    right: "85.74%",
    bottom: "34.35%",
    left: "7.48%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    top: 342,
    left: 81,
  },
});

export default ParkingDiscFilter;
