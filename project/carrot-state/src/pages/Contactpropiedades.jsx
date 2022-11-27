import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import '../styles/style.css'
import '../styles/stylespage/ClientsPage.css'

function ContactPropiedades(){
    return(
        <>
        <div className="row fondo-deg">
            <section className="container-fluid fondo-img-pano">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={4}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Busca lo que necesitas"}/>
                    {/* aqui va ir una barra de busqueda UwU*/}
                </div>
            </section>              
            <div className="row mt">
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <h2 className='hsblack'>Propiedades</h2>
                        </div>
                    </div>
                </section>
            </div>
            <div className="row mt">
                <section  className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <h2 className='hsblack'>Aqui va ir un select tus intereses</h2>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container-fluid mt">
                <div className="container">
                    <h2>Aqui va ir Cards de casas </h2>
                </div>
            </div>
            <section className="row fondo-footer mt">
                <Footer />
            </section>
        </div>
    </>
    )
}

export default ContactPropiedades