import {
    TextInput
} from "react-native";

export function TestInput(props) {
    return (
        <TextInput
            onChangeText={props.onChangeText}
        />
    )
}
