import { MaterialIcons } from "@expo/vector-icons";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

export default function EmojiPicker({ isVisible, onClose, children }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>

                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#f1f5f9" size={22} />
                    </Pressable>
                </View>

                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: "25%",
        width: "100%",
        backgroundColor: "#334155",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#1e293b",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: "#fff",
        fontSize: 16,
    },
});
