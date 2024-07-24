import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/react";

export type notesState = {
  id: number;
  title: string;
  noteColor: string;
  content: string;
};

const initialState: { values: notesState[] } = {
  values:
    localStorage.getItem("notes") === null
      ? []
      : JSON.parse(localStorage.getItem("notes") as string),
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<notesState>) => {
      state.values.push(action.payload);
      let notesData = current(state.values);
      localStorage.setItem("notes", JSON.stringify(notesData));
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.values = state.values.filter(note => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.values));
    },
  },
});

export const { addNote , removeNote } = notesSlice.actions;
export default notesSlice.reducer;
