import {Pressable, Text, View} from "react-native";

type GoalTextProps = {
    itemData: {index: number, item: string};
    handleRemoveGoal: (index: number) => void;
    textStyles: any;
}

export default function GoalText({itemData, handleRemoveGoal, textStyles}: GoalTextProps) {
    return (
        <View style={{flex: 1}}>
            <Pressable
                android_ripple={{color: '#D61C4E'}}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#D61C4E' : '#e4d0ff',
                        borderColor: pressed ? '#D61C4E' : '#e4d0ff',
                    },
                    textStyles.textGoal,
                ]}
                onPress={() => handleRemoveGoal(itemData.index)}
            >
                <Text>{itemData.item}</Text>
            </Pressable>
        </View>
    )
};
