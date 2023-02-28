import * as React from "react";
import { Image, StyleSheet, View, Text,useColorScheme } from "react-native";
// import StatusContainer from "../components/StatusContainer";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";


const IPhone14Pro1 = () => {
//   const colorScheme = useColorScheme(); // 'light' or 'dark'
//   // ...
// }
  return (
    <View style={styles.iphone14Pro1}>
      {/* <StatusContainer
        notch={require("../assets/notch.png")}
        carImageUrl={require("../assets/right-side1.png")}
        propColor="#010101"
        statusContainerStatusBarITop={0}
        notchTop={0}
      /> */}
      <Image
        style={styles.iphone14Pro1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <View style={[styles.iphone14Pro1Inner, styles.parkscanWrapperFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-48.png")}
        />
      </View>
      <View style={[styles.parkscanWrapper, styles.parkscanWrapperFlexBox]}>
        <Text style={styles.parkscan}>parkscan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parkscanWrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iphone14Pro1Child: {
    height: "20.07%",
    width: "43.51%",
    top: "39.91%",
    right: "28.24%",
    bottom: "40.02%",
    left: "28.24%",
    borderRadius: 41,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    width: 80,
    height: 108,
  },
  iphone14Pro1Inner: {
    height: "12.56%",
    width: "18.83%",
    top: "43.26%",
    right: "40.71%",
    bottom: "44.19%",
    left: "40.46%",
    alignItems: "center",
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
    height: "9.07%",
    width: "98.98%",
    top: "85.79%",
    right: "-0.51%",
    bottom: "3.14%",
    left: "1.53%",
    paddingHorizontal: Padding.p_3xl,
    // paddingVertical: Padding.p_xl,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  iphone14Pro1: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    width: "100%",
    height: 860,
    overflow: "hidden",
  },
});

export default IPhone14Pro1;
