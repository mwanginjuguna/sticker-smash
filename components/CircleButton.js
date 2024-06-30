import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Pressable } from "react-native";

export default function CircleButton({ onPress }) {
    return (
        <View style={stlyes.circleButtonContainer}>
            <Pressable style={stlyes.circleButton} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#334155" />
            </Pressable>
        </View>
    );
}

const stlyes = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        padding: 3,
        borderColor: "#334155",
        borderRadius: 42,
        borderWidth: 4,
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "#e2e8f0",
    },
});
