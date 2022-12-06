import React from 'react'
import AgentForm from './AgentForm'
import AgentList from './AgentList'
import PlotsForm from './PlotsForm'
import PlotsList from './PlotsList'

function Prueba() {
  return (
    <>
      <div>
        <AgentForm/>
        <AgentList/>
      </div>
      <div>
        <PlotsForm/>
        <PlotsList/>
      </div>
    </>
    
  )
}

export default Prueba