import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import RowBienvenida from '../components/RowBienvenida';
import '../styles/style.css' 
import '../styles/stylespage/home.css'
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home(){
    
    return(
        <>
            <div className="row fondo-deg">
                <section className="container-fluid fondo-img-pano">
                    <div className="row header nav-bar fixed-top">
                        <NavBar isAgent={1}/>
                    </div>
                    <div className="row align-items-center justify-content-center bie">
                        <RowBienvenida texto={"Vende, Compra o Renta con confianza y con seguridad"}/>
                    </div>
                </section>    
                <section className="container-fluid">{/*creo que este deberia ser articcle */}
                    <div className="container mt">{/*y este un section */}
                        <Pagination />
                        <Card/>
                    </div>  
                </section>
                <section className="container-fluid fondo-footer mt">
                    <Footer />
                </section>
                <section class="modal fade" data-bs-backdrop="static" id="exampleModal" tabindex="3" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <section class="modal-header">
                                <h5 class="modal-title">Que sos?</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </section>
                            <section class="modal-body">
                                <div className='row quesosbtns'>
                                    <div  className="col-4">
                                        <button className="btn btn-primary" id="clientebtn" data-bs-dismiss="modal" aria-label="Close">
                                            <Link to={"/login/client"}>Cliente</Link>
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-primary" id="agenteebtn" data-bs-dismiss="modal" aria-label="Close">
                                            <Link to={"/login/agent"}>Agente</Link>
                                        </button>
                                        
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-primary" id="inmobiliariaebtn" data-bs-dismiss="modal" aria-label="Close">
                                            <Link to={"/login/real-state"}>Inmobiliaria</Link>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <section class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;