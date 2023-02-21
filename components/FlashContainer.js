import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FlashContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nextButtonWrapper}>
      <View style={styles.nextButton}>
        <View style={styles.nextButtonChild} />
        <Pressable
          style={[styles.nextButtonItem, styles.nextPosition]}
          onPress={() => navigation.navigate("IPhone14Pro7")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector19.png")}
        />
        <Text style={[styles.next, styles.nextPosition]}>Next</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextPosition: {
    top: "50%",
    position: "absolute",
  },
  nextButtonChild: {
    height: "84.06%",
    top: "0%",
    right: 22,
    bottom: "15.94%",
    left: 23,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.midnightblue_100,
    position: "absolute",
  },
  nextButtonItem: {
    marginTop: -20.42,
    right: 37,
    left: 160,
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke_100,
    height: 30,
  },
  vectorIcon: {
    height: "15.94%",
    width: "2.61%",
    top: "34.78%",
    right: "25.75%",
    bottom: "49.28%",
    left: "71.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  next: {
    marginTop: -12.5,
    left: 21,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 139,
    height: 14,
    justifyContent: "center",
  },
  nextButton: {
    width: 268,
    height: 69,
  },
  nextButtonWrapper: {
    height: "8.06%",
    width: "67.26%",
    top: "87.73%",
    right: "16.88%",
    bottom: "4.21%",
    left: "15.86%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
});

export default FlashContainer;
