import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import RowLocation from '../components/RowLocation'
import '../styles/style.css'
import '../styles/stylespage/ClientsPage.css'

function ClientsPage(){
    return(
        <>
            <div className="row fondo-deg">
                <section className="container-fluid fondo-img-pano">
                    <div className="row header nav-bar fixed-top">
                        <NavBar isAgent={4}/>
                    </div>
                    <div className="row align-items-center justify-content-center bie">
                        <RowBienvenida texto={"Vende, Compra o Renta con confianza y con seguridad"}/>
                    </div>
                </section>              
                <div className="row mt">
                    <section className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <h2 className='hsblack'>Propiedades en donde tu quieras!!!</h2>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container-fluid mt">
                    <div className="container">
                        <RowLocation />
                    </div>
                </div>
                <section className="row fondo-footer mt">
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default ClientsPage