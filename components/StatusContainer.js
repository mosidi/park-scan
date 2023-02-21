import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const StatusContainer = ({
  notch,
  carImageUrl,
  propColor,
  statusContainerStatusBarITop,
  notchTop,
}) => {
  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const statusBarIPhone13Style = useMemo(() => {
    return {
      ...getStyleValue("top", statusContainerStatusBarITop),
    };
  }, [statusContainerStatusBarITop]);

  const notchIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", notchTop),
    };
  }, [notchTop]);

  return (
    <View style={[styles.statusbarIphone13, statusBarIPhone13Style]}>
      <Image
        style={[styles.notchIcon, styles.iconPosition, notchIconStyle]}
        resizeMode="cover"
        source={notch}
      />
      <View style={[styles.leftSide, styles.leftSideLayout]}>
        <View style={[styles.statusbarTime, styles.leftSideLayout]}>
          <Text style={[styles.text, textStyle]}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.rightSideIcon, styles.iconPosition]}
        resizeMode="cover"
        source={carImageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    top: 2,
    width: 164,
    height: 32,
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldBody1_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody1,
    color: Color.floralwhite,
    textAlign: "center",
    height: 20,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    top: 0,
    borderRadius: Border.br_sm,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbarIphone13: {
    top: -2,
    width: 390,
    height: 47,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
});

export default StatusContainer;
