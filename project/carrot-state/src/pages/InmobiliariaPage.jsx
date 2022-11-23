import React from 'react'
import CardAgent from '../components/CardAgent' 
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

function InmobiliariaPage() {
  return (
    <>
        <div className="row fondo-deg">
            <div className="row fondo-img">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={1}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Una experiencia fresca a la hora de administrar tu empresa"}/>
                </div>
            </div>           
            <div className="row">
                <div className="container">
                    {/*text */}
                </div>
            </div>
            <div className="container">
                <Pagination/>
                {/*pagination >> Esta madre esta culera*/}
                <CardAgent/>
            </div>
            <div className="row fondo-footer">
                <Footer/>
                {/*footer*/}
            </div>
        </div>    
    </>
  )
}

export default InmobiliariaPage