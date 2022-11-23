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
                <div className="container-fluid fondo-img-pano">
                    <div className="row header nav-bar fixed-top">
                        <NavBar isAgent={2}/>
                    </div>
                    <div className="row align-items-center justify-content-center bie">
                        <RowBienvenida text={"Vende, Compra o Renta con confianza y con seguridad"}/>
                    </div>
                </div>              
                <div className="row mt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <h2 className='hsblack'>Propiedades en donde tu quieras!!!</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid mt">
                    <div className="container">
                        <RowLocation />
                    </div>
                </div>
                <div className="row fondo-footer mt">
                    <Footer />
                </div>
            </div>    
        </>
    )
}

export default ClientsPage