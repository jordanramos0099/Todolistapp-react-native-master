import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalInput from "./components/GoalInput";
import GoalText from "./components/GoalText";

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);
  const [isAddMode, setIsAddMode] = useState<boolean>(false);

  const addGoalHandler = (enteredGoal: string) => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  const clearGoalInput = () => {
    setGoals([]);
  };

  const handleRemoveGoal = (index: number) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal, i) => i !== index);
    });
  };

  const startAddMode = () => {
    setIsAddMode((currentMode : boolean) => !currentMode);
  };

  const endAddMode = () => {
    setIsAddMode((currentMode : boolean) => false);
  }

  return (
      <>
        <StatusBar style="light" />
        <View style={containerStyles.appContainer}>
          <View style={containerStyles.startAddModeButton}>
            <Button title={"Add New Goal"} onPress={startAddMode} color={'#1CD6CE'}/>
          </View>
          <GoalInput
              visible={isAddMode}
              addGoalHandler={addGoalHandler}
              containerStyles={containerStyles}
              textStyles={textStyles}
              handleCancel={endAddMode}
          />
          <SafeAreaView
              style={containerStyles.goalsContainer}
          >
            <FlatList
                data={goals}
                renderItem={itemData => (
                    <GoalText itemData={itemData} handleRemoveGoal={handleRemoveGoal} textStyles={textStyles}/>
                )}
            />
          </SafeAreaView>
          <View style={containerStyles.clearAllButton}>
            <Button title={"Clear All Goals"} onPress={clearGoalInput} color={'#D61C4E'}/>
          </View>
          </View>
      </>
  );
}

const containerStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#293462',
  },
  goalsContainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  clearAllButton: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    marginTop: 10,
  },
  startAddModeButton: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  }
});

const textStyles = StyleSheet.create({
  textInput: {
    width: '90%',
    borderWidth: 1,
    padding: 12,
    color: '#293462',
    backgroundColor: '#e4d0ff',
    borderColor: '#e4d0ff',
    borderRadius: 6,
  },
  textGoal: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
  }
});
