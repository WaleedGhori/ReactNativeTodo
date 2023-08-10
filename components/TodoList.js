import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";

const TodoList = (props) => {

     function onPress() {
        props.deleteTodo()
     }
    return (
        <View style={styles.flexStyle} >
            <Text style={styles.listViewStyle}>{props.text}
            </Text>
            <Pressable style={styles.deletePressable}  onPress={onPress}>
                <Text style={styles.deleteText}>Delete Todo</Text>
            </Pressable>

        </View>);
}
const styles = StyleSheet.create({
    listViewStyle: {
        borderWidth: 2,
        backgroundColor: 'gray',
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 20,
        width: Dimensions.get('screen').width - 120,
        marginTop: 6,
        borderColor: 'gray',
        color: 'white',
        borderRadius: 10,
    },
    deleteText: {
        color: "white",
        paddingVertical: 8,
        paddingHorizontal: 8,
        fontSize: 16
    },
    deletePressable: {
        backgroundColor: "#3B3533",
        borderRadius: 10,
        margin: 4,
        alignItems: 'center',        // Center content horizontally
        justifyContent: 'center',

    },
    flexStyle: {
        flexDirection: "row",
        margin: 4
    }
})

export default TodoList;