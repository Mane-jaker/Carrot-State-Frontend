import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import RowBienvenida from '../components/RowBienvenida'
import Button from '../continuous/Button'
import '../styles/style.css'
import '../styles/stylespage/AgentPage.css'

function AgentPage(){

    const text = "Casas"
    const text1 = "Locales"
    const text2 = "Terrenos"

    const typ = "button"
    const clas ="btn btpro"
    return(
        <>
              <div className="row fondo-deg ">
                <div className="container-fluid fondo-img-pano">
                    <div className="row header nav-bar fixed-top">
                        <NavBar />
                    </div>
                    <div className="row align-items-center justify-content-center bie">
                        <RowBienvenida />
                    </div>
                </div> 
                <div className="row mt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <h2 className='hsblack'>Lista de propiedades</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt">
                    <div className="col">
                        <Button Texto={text} typ={typ} clas={clas}/>
                    </div>
                    <div className="col">
                        <Button Texto={text1} typ={typ} clas={clas}/>
                    </div>
                    <div className="col">
                        <Button Texto={text2} typ={typ} clas={clas}/>
                    </div>
                </div>
                <div className="container-fluid mt">
                    <div className="container">
                        <Pagination />
                    </div>
                </div>
                <div className="row fondo-footer mt">
                    <Footer />
                </div>
            </div>
            
        </>
    )
}

export default AgentPage