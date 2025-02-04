import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "@/features/notesSlice";
import todosSlice from "@/features/todosSlice";
import remindersSlice from "@/features/remindersSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    todos: todosSlice,
    reminders : remindersSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
