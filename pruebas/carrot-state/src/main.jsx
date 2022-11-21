import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {provider} from "react-redux"
import {store} from "./app/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <provider store={store}>
      <App />
    </provider>
  </React.StrictMode>
)
