import {configureStore} from "@reduxjs/toolkit"
import agentReducer from "../features/agent/AgentSlice"
import houseReducer from "../features/house/HouseSlice"
import plotReducer from "../features/plot/plotSlice"

export const store = configureStore ({
    reducer: {
        agents: agentReducer,
        houses: houseReducer,
        plots: plotReducer
    }
})