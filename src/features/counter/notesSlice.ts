import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit/react"

export type notesState = {
  id: number,
  title : string,
  noteColor : string,
  content : string,
}

const initialState: { values: notesState[] } = { values: [] };

export const notesSlice = createSlice({
  name : 'notes',
  initialState,
  reducers:{
    addNote: (state, action: PayloadAction<notesState>) => {
      state.values.push(action.payload);
    }
  }
})

export const {addNote} = notesSlice.actions
export default notesSlice.reducer