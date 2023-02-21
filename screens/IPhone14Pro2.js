import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusContainer from "../components/StatusContainer";
import { useNavigation } from "@react-navigation/native";
import ScanContainer from "../components/ScanContainer";
import ParkingDiscContainer from "../components/ParkingDiscContainer";
import ImageContainer from "../components/ImageContainer";
import ParkContainer from "../components/ParkContainer";
import {
  Color,
  FontFamily,
  Border,
  Padding,
  FontSize,
  Margin,
} from "../GlobalStyles";

const IPhone14Pro2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Pro2}>
      <Image
        style={styles.unsplashp5a9mj4vlsIcon}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls.png")}
      />
      <StatusContainer
        notch={{ uri: "notch2@3x.png" }}
        carImageUrl={require("../assets/right-side.png")}
        propColor="#fff"
        statusContainerStatusBarITop={-2}
        notchTop={2}
      />
      <LinearGradient
        style={[styles.iphone14Pro2Child, styles.homeindicatorPosition]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#60219f"]}
      />
      <TouchableOpacity
        style={styles.signinwithapple}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro5")}
      >
        <View style={styles.appleLogo}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Text style={[styles.continueWithApple, styles.ml11]}>
          Continue with Apple
        </Text>
      </TouchableOpacity>
      <Text
        style={[styles.byContinuingYouContainer, styles.noMoreFinesFlexBox]}
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
          styles.noMoreFinesFlexBox,
        ]}
      >
        No more fines through AI.
      </Text>
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={styles.iphone14Pro2Item}
        resizeMode="cover"
        source={require("../assets/group-46.png")}
      />
      <ScanContainer
        iconCheckCircle={require("../assets/-icon-check-circle5.png")}
        vector9={require("../assets/vector-94.png")}
      />
      <ParkingDiscContainer
        group59={require("../assets/group-591.png")}
        vector9={require("../assets/vector-95.png")}
      />
      <ImageContainer vehicleImageUrl={require("../assets/vector-96.png")} />
      <ParkContainer
        carImageUrl={require("../assets/-icon-check-circle6.png")}
        vehicleImageUrl={{ uri: "vector-97@3x.png" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml11: {
    marginLeft: 11,
  },
  homeindicatorPosition: {
    bottom: "0%",
    position: "absolute",
  },
  noMoreFinesFlexBox: {
    textAlign: "center",
    display: "flex",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  noMoreFinesTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  unsplashp5a9mj4vlsIcon: {
    marginTop: -424,
    width: "117.1%",
    top: "50%",
    right: "-17.1%",
    left: "0%",
    maxWidth: "100%",
    height: 861,
    position: "absolute",
    overflow: "hidden",
  },
  iphone14Pro2Child: {
    height: "50.59%",
    top: "49.41%",
    right: 0,
    left: 0,
    backgroundColor: "transparent",
  },
  vectorIcon: {
    width: 14,
    height: 18,
  },
  appleLogo: {
    borderRadius: Border.br_xl,
    width: 19,
    height: 22,
    paddingHorizontal: 2,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  continueWithApple: {
    fontSize: FontSize.defaultBoldBody1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody1,
    textAlign: "left",
    width: 160,
    height: 23,
    display: "flex",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    alignItems: "center",
  },
  signinwithapple: {
    height: "5.9%",
    width: "67.1%",
    top: "83.25%",
    right: "16.84%",
    bottom: "10.85%",
    left: "16.06%",
    paddingTop: Padding.p_md,
    paddingRight: 4,
    paddingBottom: 13,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xl,
    position: "absolute",
    backgroundColor: Color.black,
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
    lineHeight: 11,
    width: 132,
  },
  noMoreFines: {
    height: "4.14%",
    width: "51.55%",
    top: "73.91%",
    left: "25.65%",
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
  },
  homeIndicator: {
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
    borderRadius: Border.br_3xl,
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
  iphone14Pro2Item: {
    height: "6.49%",
    marginLeft: -27,
    top: "66.65%",
    bottom: "26.86%",
    left: "50%",
    maxHeight: "100%",
    width: 58,
    position: "absolute",
  },
  iphone14Pro2: {
    flex: 1,
    height: 848,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.black,
  },
});

export default IPhone14Pro2;
