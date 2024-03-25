import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ modalOpen, onAddCourse, closeModal }) {
  const [enteredCourseText, setEnteredCourseText] = useState("");

  const addCourseHandler = () => {
    onAddCourse(enteredCourseText);
    setEnteredCourseText("")
  };

  return (
    <View>
      <Modal animationType="slide" visible={modalOpen}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/furkan-logo.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Yeni Kurs Ekle"
            value={enteredCourseText}
            onChangeText={(text) => setEnteredCourseText(text)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="İptal Et"
                color={"red"}
                onPress={closeModal}
              />
            </View>
            <View style={styles.button}>
              <Button title="Ekle" color={"blue"} onPress={addCourseHandler} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "pink",
    borderColor: "pink",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
