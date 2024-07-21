import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit/react"

export interface notesState {
  title : string,
  noteColor : string,
  content : string,
}

const initialState:notesState[] = []

export const notesSlice = createSlice({
  name : 'notes',
  initialState,
  reducers:{
    addNote: (state, action: PayloadAction<notesState>) => {
      state.push(action.payload);
    }
  }
})

export const {addNote} = notesSlice.actions
export default notesSlice.reducer