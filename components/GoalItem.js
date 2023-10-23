import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, handleRemoveTask }) => {
  console.log('test');
  return (
    <View style={styles.goalItem}>
      hello
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => handleRemoveTask(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.value}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#e4d0ff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default GoalItem;
