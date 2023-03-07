import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const IPhone14Pro7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro7}>
      <Image
        style={styles.iphone14Pro7Child}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <View style={[styles.homeindicator, styles.frameViewFlexBox]}>
        <View style={styles.homeIndicator} />
      </View>
      <View
        style={[
          styles.parkscanWrapper,
          styles.textFlexBox,
          styles.textFlexBox1,
        ]}
      >
        <Text style={styles.parkscan}>parkscan</Text>
      </View>
      <View style={styles.iphone14Pro7Inner}>
        <TouchableOpacity
          style={styles.wrapperPosition}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("IPhone14Pro6")}
        >
          <TouchableOpacity
            style={[styles.drowerBtnWrapper, styles.wrapperPosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("IPhone14Pro6")}
          >
            <TouchableOpacity
              style={styles.drowerBtn}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("IPhone14Pro6")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/vector18.png")}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <StatusBar barStyle="default" />
      <TouchableOpacity
        style={[styles.text, styles.textFlexBox, styles.textFlexBox1]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro15")}
      >
        <Text style={styles.tapToScan}>Tap to scan</Text>
      </TouchableOpacity>
      <View
        style={[styles.frameView, styles.textFlexBox, styles.frameViewFlexBox]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-49.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewFlexBox: {
    alignItems: "center",
    left: "50%",
  },
  textFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  textFlexBox1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  wrapperPosition: {
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iphone14Pro7Child: {
    height: "84.51%",
    width: "190.08%",
    top: "73.59%",
    right: "-90.08%",
    bottom: "-58.1%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.45%",
    marginLeft: -185,
    top: "97.55%",
    width: 374,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: "flex-end",
    bottom: "0%",
    left: "50%",
    position: "absolute",
  },
  parkscan: {
    fontSize: FontSize.size_3xl,
    letterSpacing: -2,
    // lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.midnightblue_300,
    textAlign: "left",
  },
  parkscanWrapper: {
    height: "9.12%",
    width: "99.74%",
    top: "85.6%",
    right: "0.77%",
    bottom: "3.27%",
    left: "-0.51%",
    paddingHorizontal: Padding.p_3xl,
    // paddingVertical: Padding.p_xl,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },

  drowerBtnWrapper: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(186, 175, 175, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.labelColorDarkPrimary,
    right: "0%",
    top: "0%",
  },
  iphone14Pro7Inner: {
    top: 47,
    left: 22,
    width: 40,
    height: 36,
    position: "absolute",
  },
  tapToScan: {
    fontSize: FontSize.size_2xl,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.darkslategray_200,
    textAlign: "center",
    // width: 156,
    height: 38,
  },
  text: {
    height: "4.44%",
    width: "59.49%",
    top: "30.29%",
    right: "17.69%",
    bottom: "65.26%",
    left: "22.82%",
  },
  frameChild: {
    width: 194,
    height: 185,
  },
  frameView: {
    height: "20.7%",
    marginLeft: -81.64,
    top: "38.52%",
    bottom: "40.77%",
    width: 186,
  },
  iphone14Pro7: {
    flex: 1,
    height: 855,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.labelColorDarkPrimary,
  },
});

export default IPhone14Pro7;
