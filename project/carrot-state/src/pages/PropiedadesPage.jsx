import React from 'react'
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import Footer from '../components/Footer'
import SelectPages from '../continuous/SelectPages'

function PropiedadesPage(){
    return(
        <>
        <div className="row fondo-deg">
            <section className="row fondo-img">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={2}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Propiedades"}/>
                </div>
            </section>           
            <section className="row">
                <div className="row justify-content-center">
                    <div className="col-4 mt">
                        <SelectPages id={"Select"} />
                    </div>
               </div>
            </section>
            <section className="container mt">
                <h2>Aqui van a ir las cards de propiedades</h2>
            </section>
            <section className="row fondo-footer">
                <Footer/>
                {/*footer*/}
            </section>
        </div>    
    </>
    )
}

export default PropiedadesPage