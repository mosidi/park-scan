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

const ImageContainer = ({ carImageUrl, vehicleImageUrl }) => {
  return (
    <View style={styles.iphone14Pro2Inner}>
      <View style={styles.iconCreditCardParent}>
        <Image
          style={styles.iconCreditCard}
          resizeMode="cover"
          source={require("../assets/-icon-credit-card.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml13]}
          resizeMode="cover"
          source={require("../assets/vector-96.png")}
        />
        <Text style={[styles.youDontNeed, styles.ml13]}>
          You don’t need to pay
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_lg,
  },
  iconCreditCard: {
    width: 33,
    height: 25,
  },
  frameChild: {
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
  },
  youDontNeed: {
    flex: 1,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    // lineHeight: 11,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.midnightblue_200,
    textAlign: "left",
    display: "flex",
    height: 27,
    alignItems: "center",
  },
  iconCreditCardParent: {
    alignSelf: "stretch",
    height: 47,
    flexDirection: "row",
    paddingLeft: Padding.p_md,
    paddingRight: Padding.p_3xs,
    alignItems: "center",
  },
  iphone14Pro2Inner: {
    position: "absolute",
    height: "7.24%",
    width: "75.39%",
    top: "29.2%",
    right: "15.03%",
    bottom: "63.56%",
    left: "9.59%",
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

export default ImageContainer;
