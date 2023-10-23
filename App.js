import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addTaskHandler = (enteredTodo) => {
    setTodos((currentTodo) => [
      ...currentTodo,
      { value: enteredTodo, id: Math.random().toString() },
    ]);
    setIsModalOpen(false);
  };

  const handleRemoveTask = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Task"
          onPress={() => setIsModalOpen(true)}
          color="#a065ec"
        />
        <GoalInput
          addTaskHandler={addTaskHandler}
          showModal={isModalOpen}
          handleCancel={() => setIsModalOpen(false)}
        />
        <View style={styles.listContainer}>
          {/* <ScrollView alwaysBounceVertical={false} >
        {todos.map((todo, index) => (
          <View
            style={styles.goalItem}
            key={index}
            
          >
            <Text onPress={() => handleRemoveTask(todo.id)} style={styles.goalText} >{todo.value}</Text>
          </View>
        ))}
      </ScrollView> */}
          <FlatList
            data={todos}
            alwaysBounceVertical={false}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                handleRemoveTask={handleRemoveTask}
              />
            )}
            keyExtractor={(item, index) => item.id} // Use to extract unique Key
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  listContainer: {
    flex: 4,
  },
});

// return (
//   <View style={{padding:50 , flexDirection:'row' , height:300, width:'75%' , justifyContent:'space-around', alignItems:'flex-end'}}>
//     <View style={{
//       backgroundColor:'red',
//       width:'25%',
//       height:100,
//       // justifyContent:'center',
//       // alignItems:'center'
//     }}></View>
//     <View style={{
//       backgroundColor:'blue',
//       width:'25%',
//       height:100,
//       // justifyContent:'center',
//       // alignItems:'center'
//     }}></View>
//     <View style={{
//       backgroundColor:'green',
//       width:'50%',
//       height:100,
//       // justifyContent:'center',
//       // alignItems:'center'
//     }}></View>
//   </View>
// );
