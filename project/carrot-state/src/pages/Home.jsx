import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import RowBienvenida from '../components/RowBienvenida';
import '../styles/style.css'
import '../styles/stylespage/home.css'

function Home(){
    
    return(
        <>
            <div className="row fondo-deg">
                <div className="container-fluid fondo-img-pano">
                    <div className="row header nav-bar fixed-top">
                        <NavBar />
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
            </div>
        </>
    )
}

export default Home;