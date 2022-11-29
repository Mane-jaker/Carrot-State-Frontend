import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import BodoqueCard from '../components/BodoqueCard'
import '../styles/style.css'
import '../styles/stylespage/ClientsPage.css'

function ContactInmobiliari(){
    return(
        <>
        <div className="row fondo-deg">
            <section className="container-fluid fondo-img-pano">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={4}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Contacta tu inmobiliaria"}/>
                </div>
            </section>              
            <div className="row mt">
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <h2 className='hsblack'>Lista de agencias</h2>
                        </div>
                    </div>
                </section>
            </div>
            <section className="row mt">
                <section className="container">
                    <BodoqueCard/>
                </section>
            </section>
            <section className="row fondo-footer mt">
                <Footer />
            </section>
        </div>
    </>
    )
}

export default ContactInmobiliari