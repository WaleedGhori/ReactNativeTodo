import { useState } from 'react';
import { Dimensions, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';

export default function App() {

  const [todoList, setTodoList] = useState([])
  const addTodo = (todo) => {
    if (todo != "") {
      setTodoList([...todoList, {text:todo , id:Math.random().toString()}])
    }
  }

  const handleDelete = (id) =>{
    console.log("del");    
    setTodoList(todoList.filter(item => item.id != id))
  }

  return (
    <View style={styles.container}>
        
      {/* //*  This is input box */}
      <View style={styles.header}>
       <InputTodo addTodoAdded={addTodo}/>
      </View>

      {/* //*  This is view todo box */}
      <View style={styles.listView}>
        <FlatList data={todoList} renderItem={(todoItem) => {
          return (
            <TodoList text={todoItem.item.text} id = {todoItem.item.id} deleteTodo = {handleDelete}/>
          )
        }}keyExtractor={(item , index)=>{
          return(
            item.id
          )
        }} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderWidth: 2,
    borderColor: "gray",
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
  },
  addPressStyle: {
    backgroundColor: "gray",
    borderRadius: 10
  },
  addTextStyle: {
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  textInput: {
    fontSize: 20,
    color: 'gray'
  },
  listView:{
    marginTop:4
  }

});
