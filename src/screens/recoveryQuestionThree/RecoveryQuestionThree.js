//#region "Start"
//#region "React Native Dependencies "
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { connect, useDispatch } from "react-redux";
//#endregion "React Native Dependencies "
//#region "Project Dependencies"
import styles from "./Styles";
import * as colorsCode from "../../utils/ColorsCode";
import * as ImagePaths from "../../utils/ImagePaths.js";
import QuestionModal from "../../components/questionModal/QuestionModal";
import {
  HIDE_LOADER,
  SAVE_QUESTION_ANSWER,
  SAVE_THIRD_QUESTION_ANSWER,
  SHOW_LOADER,
} from "../../redux/actions/ActionTypes";
//#endregion "Project Dependencies "
//#region "npm Dependencies"
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP } from "react-native-responsive-screen";
//#endregion "npm Dependencies "
//#region "End"
const RecoveryQuestionThree = ({ navigation, ...props }) => {
  const dispatch = useDispatch();

  const [answersThird, setAnswersThird] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedQe, setSelectedQe] = useState(null);

  const onPressQuestion = (selectedQuestion) => {
    console.log("onPressQuestion", selectedQuestion);
    setSelectedQe(selectedQuestion);
    setIsShowModal(false);
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={colorsCode.colors.GRADIENT}
      style={styles.mainContainer}
    >
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={ImagePaths.BACK} style={styles.backIcon} />
      </TouchableOpacity>

      <KeyboardAvoidingView behavior={"padding"}>
        <ScrollView>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Add recovery{"\n"}questions</Text>
            <Text style={styles.titleDesc}>
              Please remember these question{"\n"}answers to recover your key,
              {"\n"}
              once you lose or damaged your{"\n"}device. Or forget the other
              access
              {"\n"}options
            </Text>

            <Text style={styles.questionTitle}>3rd question</Text>
            <Image source={ImagePaths.QE_THREE_DOT} style={styles.dot} />

            <View
              style={[
                styles.buttonContainer,
                {
                  borderColor: colorsCode.COLOR_YELLOW,
                  borderWidth: 2,
                },
              ]}
            >
              <TouchableOpacity
                style={styles.questionButton}
                onPress={() => {
                  setIsShowModal(true);
                }}
              >
                <Text style={styles.questionButtonTitle}>
                  {selectedQe === null
                    ? "Choose a question"
                    : selectedQe.question}
                </Text>
                <Image
                  source={ImagePaths.DOWN_ARROW}
                  style={styles.questionDropDownArrow}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setAnswersThird(text)}
                value={answersThird}
                placeholder="Enter your answer"
                placeholderTextColor={colorsCode.colors.GREY}
              />
            </View>

            <Text style={[styles.btnText]}>
              Use answers that are real and{"\n"}easy to remind
            </Text>

            <View style={styles.bottomContinueContainer}>
              <TouchableOpacity
                style={styles.continueContainer}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={styles.continueContainerBack}>Go back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.continueContainer,
                  { backgroundColor: colorsCode.COLOR_YELLOW },
                ]}
                onPress={() => {
                  const thirdQA = {
                    question: selectedQe.question,
                    answer: answersThird,
                  };
                  dispatch({ type: SAVE_THIRD_QUESTION_ANSWER, QA: thirdQA });

                  navigation.navigate("ConfirmQuestion");
                }}
              >
                <Text style={styles.continueContainerTitle}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <QuestionModal
        modalVisible={isShowModal}
        onPressQuestion={onPressQuestion}
        data={props.allQuestion}
      />
    </LinearGradient>
  );
};

const mapStateToProps = (state) => ({
  allQuestion: state.setupkeys.allQuestion?.questions,
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoveryQuestionThree);
