import { StyleSheet } from "react-native";
import * as font from "../../../utils/FontFamily.js";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import * as colorsCode from "../../../utils/ColorsCode";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorsCode.COLOR_LINEAR_GRADIENT_ONE,
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    top: 130,
  },
  title: {
    fontSize: wp("6.5%"),
    fontWeight: "700",
    color: colorsCode.colors.SECONDARY,
    marginTop: 15,
    fontFamily: font.fontFamily.montserratSemiBold,
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  titleDesc: {
    fontSize: wp("4%"),
    fontWeight: "300",
    color: colorsCode.colors.SECONDARY,
    marginTop: 8,
    textAlign: "center",
    fontFamily: font.fontFamily.regular,
    letterSpacing: 0.3,
    marginLeft: 50,
    marginRight: 50,
  },

  bottomTitleDesc: {
    fontSize: wp("4.5"),
    fontWeight: "700",
    color: colorsCode.colors.GREY,
    marginTop: 80,
    textAlign: "center",
    fontFamily: font.FONT_REGULAR,
    lineHeight: hp("3%"),
    letterSpacing: 0.3,
    marginLeft: 50,
    marginRight: 50,
  },
  text1: {
    width: "auto",
    height: 36,
    top: 110,
    fontFamily: font.fontFamily.bold,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: hp("4%"),
    textAlign: "center",
    letterSpacing: -0.165,
    color: colorsCode.colors.SECONDARY,
  },
  text2: {
    position: "absolute",
    width: 286,
    height: 84,
    left: 52,
    top: 154,
    fontFamily: font.FONT_LIGHT,
    fontWeight: "400",
    fontSize: 19,
    lineHeight: 28,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#3F5850",
  },
  btn: {
    position: "absolute",
    width: 334,
    height: 60,
    left: 28,
    top: 670,
    backgroundColor: "#003323",
    borderRadius: 6,
  },
  back: {
    width: wp("11%"),
    height: wp("11%"),
    position: "absolute",
    top: 50,
    left: 15,
    justifyContent: "center",
    zIndex: 1,
  },
  backIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
  wave: {
    marginTop: 350,
    width: "115%",
    height: "50%",
    resizeMode: "contain",
  },
  locker: {
    position: "absolute",
    left: "26.67%",
    right: "26.8%",
    top: "35.6%",
    bottom: "31.88%",
  },
  right_arrow: {
    // position: "absolute",
    // width: 6,
    height: 12,
    marginLeft: 15,
  },
  key: {
    position: "absolute",
    width: 189,
    height: 22,
    left: 94,
    top: 2,
    fontFamily: font.FONT_REGULAR,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#00330E",
  },
});