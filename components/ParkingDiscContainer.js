import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import {
  Margin,
  Border,
  FontSize,
  FontFamily,
  Color,
  Padding,
} from "../GlobalStyles";

const ParkingDiscContainer = ({ group59, vector9 }) => {
  return (
    <View style={styles.iphone14Pro4Inner}>
      <View style={[styles.groupParent, styles.youNeedAFlexBox]}>
        <Image style={styles.frameChild} resizeMode="cover" source={require("../assets/group-591.png")} />
        <Image
          style={[styles.frameItem, styles.ml13]}
          resizeMode="cover"
          source={require("../assets/vector-95.png")}
        />
        <Text style={[styles.youNeedA, styles.ml13, styles.youNeedAFlexBox]}>
          You need a parking disc
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_lg,
  },
  youNeedAFlexBox: {
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 32,
    height: 32,
  },
  frameItem: {
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
  },
  youNeedA: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    // lineHeight: 11,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.midnightblue_200,
    textAlign: "left",
    display: "flex",
  },
  groupParent: {
    flexDirection: "row",
    paddingLeft: Padding.p_md,
    paddingRight: Padding.p_3xs,
  },
  iphone14Pro4Inner: {
    position: "absolute",
    height: "7.28%",
    top: "39.32%",
    right: 31,
    bottom: "53.4%",
    left: 86,
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
    paddingHorizontal: 0,
    paddingVertical: Padding.p_md,
    justifyContent: "center",
  },
});

export default ParkingDiscContainer;
