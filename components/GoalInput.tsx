import {Button, Modal, TextInput, View, StyleSheet, Image} from "react-native";
import {useState} from "react";

type GoalInputProps = {
    addGoalHandler: (text: string) => void; // function to add a goal to the list
    containerStyles: any;
    textStyles: any;
    visible: boolean; // whether the modal is visible or not
    handleCancel: () => void; // function to handle the cancel button
}

export default function GoalInput({addGoalHandler, containerStyles, textStyles, visible, handleCancel}: GoalInputProps) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const handleGoalInput = (text: string) => {
        setEnteredGoal(text);
    };

    const handleAddGoal = () => {
        if (enteredGoal.length === 0) {
            return;
        }
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={containerStyles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    placeholder="Today's Goals!"
                    style={textStyles.textInput}
                    onChangeText={handleGoalInput}
                    value={enteredGoal}
                    placeholderTextColor='rgba(41,52,98,0.8)'
                />
                <View style={containerStyles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={"Add Goal"} color='#1CD6CE' onPress={handleAddGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title={"Cancel"} color="#D61C4E" onPress={handleCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '40%',
        marginHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});
