import {configureStore} from "@reduxjs/toolkit"
import agentReducer from "../features/agent/AgentSlice"

export const store = configureStore ({
    reducer: {
        agents: agentReducer
    }
})