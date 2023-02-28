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

const ScanContainer = ({ iconCheckCircle }) => {
  return (
    <View style={styles.iphone14Pro4Inner}>
      <View style={[styles.iconCheckCircleParent, styles.get15ScansFlexBox]}>
        <Image
          style={styles.iconCheckCircle}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle5.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml13]}
          resizeMode="cover"
          source={require("../assets/vector-94.png")}
        />
        <Text
          style={[styles.get15Scans, styles.ml13, styles.get15ScansFlexBox]}
        >
          Get 15 scans for free!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_lg,
  },
  get15ScansFlexBox: {
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  iconCheckCircle: {
    width: 31,
    height: 31,
  },
  frameChild: {
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
  },
  get15Scans: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    // lineHeight: 11,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.midnightblue_200,
    textAlign: "left",
    display: "flex",
  },
  iconCheckCircleParent: {
    flexDirection: "row",
    paddingLeft: Padding.p_md,
    paddingRight: Padding.p_3xs,
  },
  iphone14Pro4Inner: {
    position: "absolute",
    height: "7.28%",
    top: "51.53%",
    right: 80,
    bottom: "41.2%",
    left: 37,
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

export default ScanContainer;
