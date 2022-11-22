import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import RowBienvenida from '../components/RowBienvenida';
import '../styles/style.css'
import '../styles/stylespage/home.css'
import { Link } from 'react-router-dom';

function Home(){
    
    return(
        <>
            <div className="row fondo-deg">
                <div className="container-fluid fondo-img-pano">
                    <div className="row header nav-bar fixed-top">
                        <NavBar isAgent={false}/>
                    </div>
                    <div className="row align-items-center justify-content-center bie">
                        <RowBienvenida/>
                    </div>
                </div>    
                <div className="container-fluid">
                    <div className="container mt">
                        <Pagination />
                        
                    </div>  
                </div>
                <div className="container-fluid fondo-footer mt">
                    <Footer />
                </div>
                <div class="modal fade" data-bs-backdrop="static" id="exampleModal" tabindex="3" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Que sos?</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
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
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
            </div>
        </>
    )
}

export default Home;