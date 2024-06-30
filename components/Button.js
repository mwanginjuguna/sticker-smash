import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Button({ label, theme, onPress }) {
    if (theme == "primary") {
        return (
            <View style={[styles.buttonContainer, {borderRadius: 18, borderWidth: 4, borderColor: '#f97316'}]}>
                <Pressable
                    style={[styles.button, {backgroundColor: '#e2e8f0'}]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name='picture-o'
                        size={18}
                        color="#334155"
                        style={styles.buttonIcon}
                    />

                    <Text style={[styles.buttonLabel, {color: "#334155"}]}>{ label }</Text>
                </Pressable>
            </View>
        )
    }

    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed default button.')}>
                <Text style={styles.buttonLabel}>{ label }</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        paddingRight: 8
    },
    buttonLabel: {
        color: '#f1f5f9',
        fontSize: 16
    }
})
