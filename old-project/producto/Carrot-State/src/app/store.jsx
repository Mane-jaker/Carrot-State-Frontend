import { configureStore } from '@reduxjs/toolkit'
import itemSlice from '../features/items/itemSlice'

export const store = configureStore({
  reducer: {
    items: itemSlice
  }
})



