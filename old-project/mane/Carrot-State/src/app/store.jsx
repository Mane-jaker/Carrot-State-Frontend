import { configureStore } from '@reduxjs/toolkit'
import itemSlice from '../features/items/itemSlice'
import agentSlice from '../features/agent/agentSlice'
import plotSlice from '../features/items/plotSlice'
import premisesSlice from '../features/items/premisesSlice'



export const store = configureStore({
  reducer: {
    items: itemSlice,
    agents: agentSlice,
    plots: plotSlice,
    premises: premisesSlice
  }
})



