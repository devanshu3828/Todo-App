import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ addTaskHandler, showModal, handleCancel }) => {
  const [todo, setTodo] = useState("");
  const inputHandler = (enteredValue) => {
    setTodo(enteredValue);
  };

  const handleAddTask = () => {
    addTaskHandler(todo);
    setTodo("");
  };
  return (
    <Modal visible={showModal} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Image/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your task"
          value={todo}
          onChangeText={inputHandler}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Task" onPress={handleAddTask} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6c",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 8,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
export default GoalInput;
