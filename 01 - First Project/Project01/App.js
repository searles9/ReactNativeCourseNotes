import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import {StatusBar} from 'expo-status-bar';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    const timestamp = new Date().getTime();
    const randomValue = Math.random().toString(36).substr(2);
    const idValue = `${timestamp}-${randomValue}`;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: idValue },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      <GoalInput 
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
        visible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5,
  },
});
