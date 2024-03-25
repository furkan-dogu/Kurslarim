import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onAddCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: new Date().getTime().toString() },
    ]);
    closeModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Kurs Ekle" color={"red"} onPress={startModal} />
        <CourseInput
          modalOpen={modalOpen}
          onAddCourse={onAddCourse}
          closeModal={closeModal}
        />
        <View>
          <FlatList data={courses} renderItem={({item}) => (
            <View key={item.id} style={styles.courseItem}>
              <Text style={styles.courseText}>{item.text}</Text>
            </View>
          )} />
        </View>
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
  courseItem: {
    backgroundColor: "gray",
    margin: 8,
    borderRadius: 5,
  },
  courseText: {
    padding: 8,
    color: "white",
  }
});
