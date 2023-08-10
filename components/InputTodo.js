import { TextInput, Text, Pressable, StyleSheet, View } from 'react-native';
import { useState } from 'react';

const InputTodo = (props) => {
  const [todo, setTodo] = useState('');

  const handleChange = (text) => {
    setTodo(text);

  };

  function onPress() {
    props.addTodoAdded(todo);
    setTodo('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChange}
        value={todo}
        placeholder='Enter a Todo'
        multiline={true} // Allow multiline input
      />
      <Pressable style={styles.addPressStyle} onPress={onPress}>
        <Text style={styles.addTextStyle}>Add Todo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange TextInput and Pressable in a row
    alignItems: 'center', // Align items vertically within the container
  },
  addPressStyle: {
    backgroundColor: 'gray',
    borderRadius: 10,
    marginLeft: 10, // Add some space between TextInput and Pressable
  },
  addTextStyle: {
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  textInput: {
    flex: 1, // Allow TextInput to take available horizontal space
    fontSize: 20,
    color: 'gray',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 8,
  },
});

export default InputTodo;
