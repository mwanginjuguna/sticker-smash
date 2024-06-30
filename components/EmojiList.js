import { useState } from "react";
import { StyleSheet, FlatList, Platform, Pressable, Image } from "react-native";

export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        require("../assets/emojis/rose.png"),
        require("../assets/emojis/skull_and_crossbones.png"),
        require("../assets/emojis/space_invader.png"),
        require("../assets/emojis/sunflower.png"),
        require("../assets/emojis/sunglasses.png"),
        require("../assets/emojis/tulip.png"),
        require("../assets/emojis/100.png"),
        require("../assets/emojis/art.png"),
        require("../assets/emojis/bicyclist.png"),
        require("../assets/emojis/hankey.png"),
        require("../assets/emojis/man-biking.png"),
        require("../assets/emojis/ok-cool.png"),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        onSelect = onSelect(item);
                        onCloseModal();
                    }}
                >
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
        color: "#f1f5f9",
    },
});
