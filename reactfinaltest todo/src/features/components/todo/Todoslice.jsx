import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  list: [],
  editing: null,
  //   status: "idle",
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,

  reducers: {
    setinputvalue: (state, action) => {
      state.value = action.payload.dataname;
    },

    addtodo: (state, action) => {
      //   const now = new Date();
      const showtodos = {
        id: new Date(),
        ischecked: false,
        data: state.value,
      };
      state.list.push(showtodos);
      state.value = " ";
      console.log(action);
    },
    resettodo: () => {
      return initialState;
    },
    deletetodo: (state, action) => {
      //   console.log(action);
      state.list = state.list.filter(
        (todos) => todos.id !== action.payload.newid
      );
    },
    checkboxtodo: (state, action) => {
      //   console.log(action);
      state.list = state.list.map((todos) =>
        todos.id === action.payload
          ? { ...todos, ischecked: !todos.ischecked }
          : { ...todos }
      );
    },
    edittodo: (state, action) => {
      state.editing = action.payload;
      const editingdata = state.list.find(
        (element) => element.id === action.payload
      );
      state.value = editingdata.data;
    },

    submitediting: (state, action) => {
      state.list = state.list.map((edittodos) =>
        edittodos.id === state.editing
          ? { ...edittodos, data: action.payload }
          : { ...edittodos }
      );
      state.editing = null;
      state.value = " ";
    },
  },
});

export const {
  addtodo,
  resettodo,
  deletetodo,
  checkboxtodo,
  edittodo,
  submitediting,
  setinputvalue,
} = TodoSlice.actions;

export default TodoSlice.reducer;
