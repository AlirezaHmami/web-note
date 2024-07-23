import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/react";

export type todosState = {
  id: number;
  title: string;
  completed : boolean
};

const initialState: { values: todosState[] } = {
  values:
    localStorage.getItem("todos") === null
      ? []
      : JSON.parse(localStorage.getItem("todos") as string),
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<todosState>) => {
      state.values.push(action.payload);
      let todosData = current(state.values);
      localStorage.setItem("todos", JSON.stringify(todosData));
    },
    removeToDo: (state, action: PayloadAction<number>) => {
      state.values = state.values.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.values));
    },
  },
});

export const { addToDo , removeToDo } = todosSlice.actions;
export default todosSlice.reducer;