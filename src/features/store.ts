import { configureStore } from '@reduxjs/toolkit';
import weeklyHolidaySliceReducer from "../holiday/weeklyHolidaySlice/weeklyHolidaySlice";
export const store = configureStore({
  reducer: {
    weeklyHolidaySlice: weeklyHolidaySliceReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;