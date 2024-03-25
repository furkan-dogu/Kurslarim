import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const startModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Kurs Ekle" color={"red"} onPress={startModal} />
        <CourseInput modalOpen={modalOpen} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
