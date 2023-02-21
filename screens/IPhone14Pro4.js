import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusContainer from "../components/StatusContainer";
import ScanContainer from "../components/ScanContainer";
import ParkingDiscContainer from "../components/ParkingDiscContainer";
import ParkContainer from "../components/ParkContainer";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const IPhone14Pro4 = () => {
  return (
    <View style={styles.iphone14Pro4}>
      <Image
        style={styles.unsplashp5a9mj4vlsIcon}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls1.png")}
      />
      <StatusContainer
        notch={require("../assets/notch.png")}
        carImageUrl={require("../assets/right-side.png")}
        propColor="#fff"
        statusContainerStatusBarITop={0}
        notchTop={0}
      />
      <LinearGradient
        style={[styles.iphone14Pro4Child, styles.homeindicatorPosition]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#60219f"]}
      />
      <Text
        style={[
          styles.byContinuingYouContainer,
          styles.youFlexBox,
          styles.noMoreFinesFlexBox,
          styles.youLayout,
        ]}
      >
        <Text style={styles.byContinuingYouContainer1}>
          <Text style={styles.byContinuingYouAgreeToOur}>
            <Text
              style={styles.byContinuingYou}
            >{`By continuing you agree to our `}</Text>
          </Text>
          <Text style={styles.termsOfUsePrivacyPolicy}>
            <Text>Terms of Use</Text>
            <Text>{` & `}</Text>
            <Text style={styles.noMoreFinesTypo}>Privacy Policy</Text>
          </Text>
        </Text>
      </Text>
      <Text
        style={[
          styles.noMoreFines,
          styles.noMoreFinesTypo,
          styles.youFlexBox,
          styles.noMoreFinesFlexBox,
        ]}
      >
        No more fines through AI.
      </Text>
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={styles.iphone14Pro4Item}
        resizeMode="cover"
        source={require("../assets/group-461.png")}
      />
      <ScanContainer
        iconCheckCircle={require("../assets/-icon-check-circle3.png")}
        vector9={require("../assets/vector-9.png")}
      />
      <ParkingDiscContainer
        group59={require("../assets/group-59.png")}
        vector9={require("../assets/vector-91.png")}
      />
      <ParkContainer
        carImageUrl={require("../assets/-icon-check-circle4.png")}
        vehicleImageUrl={require("../assets/vector-93.png")}
      />
      <View style={[styles.iphone14Pro4Inner, styles.logGoogleFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
      </View>
      <Pressable style={[styles.logGoogle, styles.logGoogleFlexBox]}>
        <View style={[styles.googleParent, styles.parentFlexBox]}>
          <Image
            style={styles.googleIcon}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
          <Text
            style={[
              styles.continueWithGoogle,
              styles.ml9,
              styles.noMoreFinesFlexBox,
            ]}
          >
            Continue with Google
          </Text>
        </View>
      </Pressable>
      <View style={styles.frameView}>
        <View style={[styles.iconCreditCardParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconCreditCard}
            resizeMode="cover"
            source={require("../assets/-icon-credit-card.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml13]}
            resizeMode="cover"
            source={require("../assets/vector-92.png")}
          />
          <Text
            style={[
              styles.youDontNeed,
              styles.ml13,
              styles.youFlexBox,
              styles.youLayout,
            ]}
          >
            You don’t need to pay
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml9: {
    marginLeft: 9,
  },
  ml13: {
    marginLeft: Margin.m_lg,
  },
  homeindicatorPosition: {
    bottom: "0%",
    position: "absolute",
  },
  youFlexBox: {
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
  },
  noMoreFinesFlexBox: {
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
  },
  youLayout: {
    lineHeight: 11,
    display: "flex",
    letterSpacing: 0,
  },
  noMoreFinesTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  logGoogleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  parentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  unsplashp5a9mj4vlsIcon: {
    marginTop: -423,
    right: -65,
    maxWidth: "100%",
    height: 861,
    left: 0,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone14Pro4Child: {
    height: "50.59%",
    top: "49.41%",
    right: -3,
    backgroundColor: "transparent",
    left: 0,
  },
  byContinuingYou: {
    fontFamily: FontFamily.dMSansRegular,
  },
  byContinuingYouAgreeToOur: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  termsOfUsePrivacyPolicy: {
    margin: Margin.m_sm,
  },
  byContinuingYouContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  byContinuingYouContainer: {
    height: "4.69%",
    top: "89.2%",
    left: 127,
    fontSize: FontSize.size_4xs,
    width: 132,
    alignItems: "center",
    position: "absolute",
  },
  noMoreFines: {
    height: "5.2%",
    width: "50%",
    top: "73.76%",
    left: "25.39%",
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
    fontWeight: "500",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  homeIndicator: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.46%",
    top: "97.54%",
    right: 9,
    left: 10,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iphone14Pro4Item: {
    height: "6.5%",
    marginLeft: -27,
    top: "66.64%",
    bottom: "26.86%",
    left: "50%",
    maxHeight: "100%",
    width: 58,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
  },
  iphone14Pro4Inner: {
    marginTop: -280,
    right: 121,
    left: 168,
    height: 34,
    alignItems: "center",
    top: "50%",
  },
  googleIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  continueWithGoogle: {
    fontSize: FontSize.defaultBoldBody1_size,
    fontFamily: FontFamily.interRegular,
  },
  googleParent: {
    justifyContent: "center",
    flex: 1,
  },
  logGoogle: {
    height: "5.9%",
    top: "82.43%",
    right: 49,
    bottom: "11.67%",
    left: 54,
    backgroundColor: Color.tomato,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_xs,
    alignItems: "flex-end",
    borderRadius: Border.br_xl,
  },
  iconCreditCard: {
    width: 33,
    height: 25,
  },
  youDontNeed: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.midnightblue_200,
    textAlign: "left",
    height: 52,
    alignItems: "center",
    flex: 1,
  },
  iconCreditCardParent: {
    height: 47,
    paddingLeft: Padding.p_md,
    paddingRight: Padding.p_3xs,
  },
  frameView: {
    height: "7.26%",
    width: "75.39%",
    top: "29.26%",
    right: "15.03%",
    bottom: "63.48%",
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
    position: "absolute",
  },
  iphone14Pro4: {
    backgroundColor: Color.black,
    height: 846,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default IPhone14Pro4;
