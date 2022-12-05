import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import { InmobilUserCard } from '../components/InmobilUserCard'
import { InmobilUserCardInter } from '../components/InmobilUserCard'
import '../styles/style.css'
import '../styles/stylespage/ClientsPage.css'
import SelectPages from '../continuous/SelectPages'
import Search from '../continuous/Search'

function ContactPropiedades(){
    return(
        <>
        <div className="row fondo-deg">
            <section className="container-fluid fondo-img-pano">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={4}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Busca lo que necesitas"} IsSearch={true}/>
                </div>
            </section>   
            <div className='row mt'>change-btn</div>           
            <div className="row mt">
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <h2 className='hsblack'>Propiedades</h2>
                        </div>
                    </div>
                </section>
            </div>
            <section className="row mt">
                <section  className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <SelectPages id={"Select"} />
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid mt">
                <div className="container">{/*segun el boton de change-btn cambian estas dos madres :v */}
                    <InmobilUserCardInter/>
                </div>
                <div className='container disp'>
                    <InmobilUserCard/>
                </div>
            </section>
            <section className="row fondo-footer mt">
                <Footer />
            </section>
        </div>
    </>
    )
}

export default ContactPropiedades