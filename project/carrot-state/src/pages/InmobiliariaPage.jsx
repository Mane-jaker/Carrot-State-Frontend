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
            <section className="row fondo-img">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={2}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Bienvenido otra vez"}/>
                </div>
            </section>           
            <section className="row">
                <div className="container">
                    {/*text */}
                </div>
            </section>
            <section className="container">
                <CardAgent/>
            </section>
            <section className="row fondo-footer">
                <Footer/>
                {/*footer*/}
            </section>
        </div>    
    </>
  )
}

export default InmobiliariaPage