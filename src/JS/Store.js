import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './taskSlice/TaskSlice'

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});