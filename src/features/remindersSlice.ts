import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/react";

export type remindersState = {
  id: number;
  title: string;
  content: string;
  hour : number;
  min : number;
  date : number;
  month : number;
  year : number
};

const initialState: { values: remindersState[] } = {
  values:
    localStorage.getItem("reminders") === null
      ? []
      : JSON.parse(localStorage.getItem("reminders") as string),
};

export const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    addReminder: (state, action: PayloadAction<remindersState>) => {
      state.values.push(action.payload);
      let remindersData = current(state.values);
      localStorage.setItem("reminders", JSON.stringify(remindersData));
    },
    removeReminder: (state, action: PayloadAction<number>) => {
      state.values = state.values.filter(note => note.id !== action.payload);
      localStorage.setItem("reminders", JSON.stringify(state.values));
    },
  },
});

export const { addReminder , removeReminder } = remindersSlice.actions;
export default remindersSlice.reducer;