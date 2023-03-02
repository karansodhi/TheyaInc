//#region "Start"
//#region "React Native Dependencies "
import { StyleSheet } from "react-native";
//#endregion "React Native Dependencies "
//#region "Project Dependencies"
import * as colorsCode from "../../utils/ColorsCode";
import * as font from "../../utils/FontFamily.js";
//#endregion "Project Dependencies "
//#region "npm Dependencies"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
//#endregion "npm Dependencies "

//#region "End"

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorsCode.COLOR_LINEAR_GRADIENT_ONE,
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
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
  roundContainer: {
    width: wp("100%"),
    height: hp("60%"),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: colorsCode.COLOR_WHITE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    alignItems: "center",
  },

  bottomRoundContainer: {
    width: wp("100%"),
    height: hp("45%"),
    backgroundColor: colorsCode.COLOR_WHITE,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: colorsCode.COLOR_WHITE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: wp("15%"),
    width: wp("90%"),
    alignItems: "center",
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: wp("5%"),
    width: wp("90%"),
    alignItems: "center",
  },
  subTitleContainer2: {
    marginTop: wp("5%"),
    width: wp("90%"),
    alignItems: "center",
  },
  headset: {
    width: wp("8%"),
    height: wp("8%"),
    resizeMode: "contain",
  },
  checkMark: {
    width: wp("12%"),
    height: wp("12%"),
    resizeMode: "contain",
    marginTop: wp("15%"),
  },
  lock: {
    width: wp("3.5%"),
    height: wp("3.5%"),
    resizeMode: "contain",
    marginLeft: 8,
    marginTop: 6,
  },
  logo: {
    width: wp("65%"),
    height: wp("65%"),
    resizeMode: "contain",
    marginTop: wp("8%"),
  },
  title: {
    fontSize: wp("6.5%"),
    fontWeight: "700",
    color: colorsCode.COLOR_WHITE,
    fontFamily: font.FONT_BOLD,
    textAlign: "center",
  },
  subTitle: {
    fontSize: wp("4.2%"),
    fontWeight: "400",
    color: colorsCode.COLOR_WHITE,
    textAlign: "center",
    fontFamily: font.fontFamily.regular,
    lineHeight: hp("2.5"),
    paddingTop: wp(2),
  },
  titleDesc: {
    fontSize: wp("4"),
    fontWeight: "400",
    color: colorsCode.colors.SECONDARY,
    marginTop: wp("5%"),
    textAlign: "center",
    fontFamily: font.fontFamily.medium,
    lineHeight: hp("2.5"),
    letterSpacing: 0.3,
  },
  titleDesc2: {
    fontSize: wp("4"),
    fontWeight: "400",
    color: colorsCode.colors.SECONDARY,
    marginTop: wp("1"),
    textAlign: "center",
    fontFamily: font.fontFamily.medium,
    lineHeight: hp("2.5"),
    letterSpacing: 0.3,
  },
  note: {
    fontSize: wp("5%"),
    fontWeight: "700",
    color: colorsCode.colors.SECONDARY,
    fontFamily: font.fontFamily.bold,
    textAlign: "center",
    marginTop: wp("15%"),
  },
  continueContainer: {
    width: wp("55"),
    height: hp("6.5%"),
    backgroundColor: colorsCode.colors.PRIMARY,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: wp(12),
  },
  continueContainer2: {
    width: wp("55"),
    height: hp("6.5%"),
    backgroundColor: colorsCode.colors.PRIMARY,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: wp(4),
  },
  continueContainerTitle: {
    fontSize: wp("5%"),
    fontWeight: "700",
    color: colorsCode.colors.SECONDARY,
    textAlign: "center",
    fontFamily: font.fontFamily.semiBold,
  },
  activeBtnText: {
    fontWeight: "600",
    fontSize: 16,
    color: colorsCode.COLOR_DARK_GREEN,
    paddingTop: 8,
  },
  receiveBtn: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: colorsCode.COLOR_YELLOW,
    alignItems: "center",
    justifyContent: "center",
  },
  receiveBtnSmall: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: colorsCode.COLOR_YELLOW,
    alignItems: "center",
    justifyContent: "center",
  },
  sentBtn1: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: colorsCode.COLOR_BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  sentBtnSmall: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: colorsCode.COLOR_DARK_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconSmall: {
    width: 20,
    height: 20,
  },
  sentContainer: {
    alignItems: "center",
    paddingRight: 40,
  },
  receiveContainer: {
    alignItems: "center",
    paddingLeft: 40,
  },

  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: colorsCode.COLOR_WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 36,
    paddingBottom: 36,
  },

  modalTitle: {
    fontWeight: "600",
    fontSize: 26,
    paddingTop: 8,
    paddingBottom: 8,
    color: colorsCode.colors.SECONDARY,
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: colorsCode.colors.SECONDARY,
    textAlign: "center",
    lineHeight: 26,
  },
  dottedContainer: {
    height: 90,
    width: 300,
    justifyContent: "center",
    padding: 16,
    paddingLeft: 26,
    paddingRight: 26,
  },
  addressText: {
    fontWeight: "600",
    color: colorsCode.colors.SECONDARY,
    fontSize: 16,
    height: 70,
  },
  copyBtn: {
    backgroundColor: colorsCode.COLOR_GRAY1,
    width: wp(90),
    height: 70,
    borderRadius: 6,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  copyBtnText: {
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "Lato",
    color: colorsCode.COLOR_GOLD,
  },
  backBtn: {
    position: "absolute",
    left: 0,
    top: 26,
  },
  commonPadding: {
    padding: 16,
  },
  currentBalance: {
    fontSize: 14,
    fontWeight: "400",
    color: colorsCode.colors.SECONDARY,
    textAlign: "center",
    lineHeight: 26,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: colorsCode.colors.SECONDARY,
    fontFamily: "Lato",
    paddingTop: 26,
    paddingBottom: 4,
  },
  addressText2: {
    fontSize: 14,
    fontWeight: "400",
    color: colorsCode.colors.SECONDARY,
    textAlign: "center",
    lineHeight: 26,
    width: wp(80),
  },
  btc: {
    fontSize: 14,
    fontWeight: "700",
    color: colorsCode.COLOR_YELLOW,
    fontFamily: "Lato",
    paddingTop: 26,
  },
  btcAmount: {
    fontSize: 40,
    fontWeight: "700",
    color: colorsCode.COLOR_DARK_GREEN,
    fontFamily: "Lato",
    paddingBottom: 4,
  },
  btcSub: {
    fontSize: 20,
    fontWeight: "500",
    color: colorsCode.COLOR_DARK_GREEN,
    fontFamily: "Lato",
    paddingTop: 4,
  },
  btnNetwork: {
    fontSize: 14,
    fontWeight: "400",
    color: colorsCode.COLOR_LIGHT_GREEN,
    textAlign: "center",
    lineHeight: 26,
  },
  textInputTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colorsCode.COLOR_DARK_GREEN,
    textAlign: "center",
    lineHeight: 26,
    fontFamily: "Lato",
    paddingBottom: 8,
    paddingTop: 26,
  },
  textInputContainer: {
    width: wp(90),
    borderWidth: 1,
    height: 60,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 6,
    borderColor: colorsCode.COLOR_GOLD1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    height: 50,
    fontFamily: "Lato",
    fontSize: 18,
    color: colorsCode.COLOR_BLACK2,
  },
  textInputRight: {
    fontFamily: "Lato",
    fontSize: 18,
    color: colorsCode.COLOR_PLACEHOLDER,
  },
  textInputBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(85),
    paddingTop: 8,
    paddingBottom: 26,
  },
  textInputBottomLeft: {
    fontFamily: "Lato",
    fontSize: 16,
    color: colorsCode.COLOR_DARK_GREEN,
  },
  textInputBottomRight: {
    fontFamily: "Lato",
    fontSize: 16,
    fontWeight: "400",
    color: colorsCode.COLOR_PLACEHOLDER,
  },
  qrBtn: {
    backgroundColor: colorsCode.COLOR_GRAY1,
    width: wp(90),
    height: 60,
    borderRadius: 6,
    marginTop: 16,
    marginBottom: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  qrBtnText: {
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Lato",
    color: colorsCode.COLOR_GOLD,
  },
  sentBtn: {
    backgroundColor: colorsCode.COLOR_BLACK,
    width: wp(90),
    height: 60,
    borderRadius: 6,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelBtn: {
    backgroundColor: colorsCode.COLOR_WHITE,
    width: wp(90),
    height: 60,
    borderRadius: 6,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  sentBtnText: {
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Lato",
    color: colorsCode.COLOR_GOLD1,
  },
  cancelBtnText: {
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Lato",
    color: colorsCode.COLOR_DARK_GREEN,
  },
  qrContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});
