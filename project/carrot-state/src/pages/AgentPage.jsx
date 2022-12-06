import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import RowBienvenida from '../components/RowBienvenida'
import Button from '../continuous/Button'
import ButtonAdd from '../continuous/ButtonAdd'
import '../styles/style.css'
import '../styles/stylespage/AgentPage.css'
import SelectPages from '../continuous/SelectPages'
import {useSelector} from 'react-redux'

function AgentPage(){

    const {idAgent} = useParams();

    const text = "Casas"
    const text1 = "Locales"
    const text2 = "Terrenos"

    const typ = "button"
    const clas ="btn btpro"
    const users = useSelector (state => state.users)

    return(
        <>
              <div className="row fondo-deg ">
                <section className="container-fluid fondo-img-pano">
                    <div className="row header nav-bar fixed-top">
                        <NavBar isAgent={3}/>

                          
                        {users.map(user =>(
                            //aqui traigo el id que esta en el store  
                        <div key={user.id}>
                            <h3>{user.id}</h3>
                            <h3>{user.token}</h3>
                        </div>
                        ))}

                    </div>
                    <div className="row align-items-center justify-content-center bie">
                        <RowBienvenida texto={"Bienvenido otra vez"}/>
                    </div>
                </section>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 mt">
                            <h2 className='hsblack'>Lista de propiedades</h2>
                        </div>
                    </div>
                </section>

                <div className="row mt">
                    <section className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <SelectPages id={"Select"} />
                            </div>
                        </div>
                    </section>
                </div>
                {
                    /*
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
                    */
                }
                
                <section className="container-fluid mt">
                    <div className="container">
                        <Pagination forAgent={true}/>
                    </div>
                    <ButtonAdd id={idAgent}/>
                </section>
                <section className="row fondo-footer mt">
                    <Footer />
                </section>
            </div>
            
        </>
    )
}

export default AgentPage