import {StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from "react-native";

import {GestureResponderEvent} from "react-native/Libraries/Types/CoreEventTypes";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

interface PressTextProps {
    text: string,
    onPress: () => void;
    isUnderLine?: false,
    color?: ColorValue,
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

export const PressText: React.FC<PressTextProps> = (props) => {
    const {text, onPress, isUnderLine, color, textStyle, containerStyle} = props;
    const textColor = color !== undefined ? color : 'white'; // Set default color to 'white' if color is undefined
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={[{
                textDecorationLine: isUnderLine ? 'underline' : 'none',
                color: textColor,
            }, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
