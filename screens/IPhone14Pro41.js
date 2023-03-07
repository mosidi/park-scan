import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import StatusContainer from "../components/StatusContainer";
import ParkingDiscFilter from "../components/ParkingDiscFilter";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from "../GlobalStyles";

const IPhone14Pro41 = () => {
  return (
    <View style={styles.iphone14Pro4}>
      <Image
        style={[
          styles.unsplashp5a9mj4vlsIcon,
          styles.iphone14Pro4ChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls2.png")}
      />
      <LinearGradient
        style={[styles.iphone14Pro4Child, styles.iphone14Pro4ChildPosition]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#5f209f"]}
      />
      <StatusContainer
        notch={require("../assets/notch3.png")}
        carImageUrl={require("../assets/right-side.png")}
        propColor="#fff"
        statusContainerStatusBarITop={0}
        notchTop={0}
      />
      <Text style={styles.byContinuingYouContainer}>
        <Text style={styles.byContinuingYouContainer1}>
          <Text style={styles.byContinuingYouAgreeToOur}>
            <Text
              style={styles.byContinuingYou}
            >{`By continuing you agree to our `}</Text>
          </Text>
          <Text style={styles.termsOfUsePrivacyPolicy}>
            <Text>Terms of Use</Text>
            <Text>{` & `}</Text>
            <Text style={styles.privacyPolicy}>Privacy Policy</Text>
          </Text>
        </Text>
      </Text>
      <Text style={styles.noMoreFines}>No more fines through AI.</Text>
      <Image
        style={styles.iphone14Pro4Item}
        resizeMode="cover"
        source={require("../assets/group-462.png")}
      />
      <Image
        style={[styles.iconCheckCircle, styles.iconCardLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check-circle11.png")}
      />
      <Image
        style={[
          styles.iphone14Pro4Inner,
          styles.iphone14Layout,
          styles.iphone14Layout1,
        ]}
        resizeMode="cover"
        source={require("../assets/vector-32.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iphone14Layout]}
        resizeMode="cover"
        source={require("../assets/vector-32.png")}
      />
      <Image
        style={[styles.iconCreditCard, styles.iconCardLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-credit-card3.png")}
      />
      <Image
        style={[
          styles.iphone14Pro4Child1,
          styles.iphone14Layout,
          styles.iphone14Layout1,
        ]}
        resizeMode="cover"
        source={require("../assets/vector-32.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.iconLocationPin, styles.iconCardLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-location-pin1.png")}
      />
      <Pressable style={[styles.logGoogle, styles.googleFlexBox]}>
        <View style={[styles.googleParent, styles.googleFlexBox]}>
          <Image
            style={styles.googleIcon}
            resizeMode="cover"
            source={require("../assets/google1.png")}
          />
          <Text style={[styles.continueWithGoogle, styles.ml33]}>
            Continue with Google
          </Text>
        </View>
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.childGroupLayout]} />
        <Image
          style={[styles.iconCheckCircle1, styles.iconCardLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-check-circle12.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector-33.png")}
        />
        <Text style={[styles.youCanPark, styles.youTypo]}>
          You can park until 11:41
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.childGroupLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildBorder,
            styles.childGroupLayout,
          ]}
        />
        <Image
          style={[styles.iconCreditCard1, styles.iconCardLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-credit-card4.png")}
        />
        <Image
          style={[styles.groupItem, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector-81.png")}
        />
        <Text style={[styles.youDontNeed, styles.youTypo]}>
          You don’t need to pay
        </Text>
      </View>
      <ParkingDiscFilter />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View
          style={[
            styles.iconCheckCircleParent,
            styles.groupViewLayout,
            styles.groupChildBorder,
          ]}
        >
          <Image
            style={[styles.iconCheckCircle2, styles.iconCardLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-check-circle13.png")}
          />
          <Image
            style={[styles.frameInner, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector-98.png")}
          />
          <Text style={[styles.get15Scans, styles.youTypo]}>
            Get 15 scans for free!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml33: {
    marginLeft: 33,
  },
  iphone14Pro4ChildPosition: {
    left: 0,
    position: "absolute",
  },
  iconCardLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone14Layout: {
    height: 31,
    width: 1,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  iphone14Layout1: {
    left: 142,
    width: 1,
    borderRadius: Border.br_md,
  },
  googleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  childGroupLayout: {
    height: 62,
    width: 294,
    position: "absolute",
  },
  frameItemLayout: {
    top: 16,
    height: 31,
    width: 1,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  youTypo: {
    height: 34,
    width: 204,
    textAlign: "left",
    color: Color.midnightblue_200,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 14,
    alignItems: "center",
    display: "flex",
    lineHeight: 11,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: "#0b3132",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  groupViewLayout: {
    width: 295,
    height: 62,
    position: "absolute",
  },
  unsplashp5a9mj4vlsIcon: {
    width: 484,
    height: 861,
    top: 0,
    left: 0,
  },
  iphone14Pro4Child: {
    top: 422,
    width: 393,
    height: 431,
    backgroundColor: "transparent",
  },
  byContinuingYou: {
    fontFamily: FontFamily.dMSansRegular,
  },
  byContinuingYouAgreeToOur: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  privacyPolicy: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  termsOfUsePrivacyPolicy: {
    margin: Margin.m_sm,
  },
  byContinuingYouContainer1: {
    // lineBreak: "anywhere",
    width: "100%",
  },
  byContinuingYouContainer: {
    top: 761,
    left: 127,
    fontSize: FontSize.size_4xs,
    height: 40,
    width: 139,
    display: "flex",
    lineHeight: 11,
    letterSpacing: 0,
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  noMoreFines: {
    marginLeft: -68.5,
    top: 639,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    width: 139,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  iphone14Pro4Item: {
    top: 569,
    left: 170,
    width: 55,
    height: 55,
    position: "absolute",
  },
  iconCheckCircle: {
    height: "3.67%",
    width: "7.95%",
    top: "16.9%",
    right: "66.86%",
    bottom: "79.43%",
    left: "25.19%",
  },
  iphone14Pro4Inner: {
    top: 145,
  },
  vectorIcon: {
    top: 250,
    left: 76,
  },
  iconCreditCard: {
    height: "2.93%",
    width: "8.3%",
    top: "29.93%",
    right: "83.31%",
    bottom: "67.14%",
    left: "8.4%",
  },
  iphone14Pro4Child1: {
    top: 355,
  },
  ellipseIcon: {
    top: 354,
    left: 100,
    width: 32,
    height: 32,
    position: "absolute",
  },
  iconLocationPin: {
    height: "2.43%",
    width: "5.07%",
    top: "42.02%",
    right: "68.21%",
    bottom: "55.55%",
    left: "26.72%",
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
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
  },
  googleParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  logGoogle: {
    top: 711,
    left: 47,
    backgroundColor: Color.tomato,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_xs,
    alignItems: "flex-end",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameChild: {
    left: -2,
    shadowColor: "rgba(11, 49, 50, 0.3)",
    borderColor: "#1c0332",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_xs,
    width: 294,
    top: 0,
  },
  iconCheckCircle1: {
    height: "52.96%",
    width: "10.77%",
    top: "26.06%",
    right: "82.16%",
    bottom: "20.98%",
    left: "7.07%",
  },
  frameItem: {
    left: 64,
  },
  youCanPark: {
    left: 78,
  },
  rectangleParent: {
    top: 130,
    left: 85,
    width: 290,
    height: 59,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(11, 49, 50, 0.29)",
  },
  iconCreditCard1: {
    height: "40.32%",
    width: "11.09%",
    top: "29.84%",
    right: "78.36%",
    bottom: "29.84%",
    left: "10.54%",
  },
  groupItem: {
    left: 76,
  },
  youDontNeed: {
    left: 90,
  },
  rectangleGroup: {
    top: 236,
    left: 30,
  },
  iconCheckCircle2: {
    height: "50.39%",
    width: "10.59%",
    top: "24.8%",
    right: "84.66%",
    bottom: "24.8%",
    left: "4.75%",
  },
  frameInner: {
    left: 58,
  },
  get15Scans: {
    left: 71,
  },
  iconCheckCircleParent: {
    shadowColor: "rgba(11, 49, 50, 0.31)",
  },
  groupView: {
    top: 447,
    left: 30,
  },
  iphone14Pro4: {
    backgroundColor: Color.black,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone14Pro41;
