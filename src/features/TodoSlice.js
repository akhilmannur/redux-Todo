import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({id:Date.now(), value: action.payload.todo, isEditing: false });
    },
  
  edit: (state, action) => {
    const todoToEdit = state.todos.find(
      (todo) => todo.id === action.payload
    );
    if (todoToEdit) {
      todoToEdit.isEditing = true;
    }
  },
  save: (state, action) => {
    const todoToSave = state.todos.find(
      (todo) => todo.value === action.payload.todo
    );
    if (todoToSave) {
      todoToSave.value = action.payload.editedText;
      todoToSave.isEditing = false;
    }
  },
  cancel: (state, action) => {
    const todoToCancel = state.todos.find((todo) => todo.value === action.payload.todo);
    if (todoToCancel) {
      todoToCancel.isEditing = false;
    }
  },
  deletetodo: (state, action) => {
  const deletedToDo = state.todos.filter((todo) => todo.id !== action.payload);
  state.todos = deletedToDo
  },
}

});

export default TodoSlice.reducer;
export const { add,edit,save,cancel,deletetodo} = TodoSlice.actions;
