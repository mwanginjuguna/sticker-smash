import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

export default function IconButton({ icon, label, onPress }) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#e2e8f0" />

            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconButtonLabel: {
        color: "#e2e8f0",
        marginTop: 12,
    },
});
