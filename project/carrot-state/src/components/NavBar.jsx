import '../styles/style.css'
import logo from '../assets/Img/LogitoUwU1.png'
import React,{useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

function NavBar({isAgent}) {
    const[navBar, setNavbar] = useState(false)
    const popup = useRef();

    const changeColor = () => {
        if(window.scrollY>= 296){
            setNavbar(true) 
        }else{
            setNavbar(false)
        }
    }

    const handleOnClick = () => {
        popup.current.classList.add("notdispop");
    }

    window.addEventListener('scroll', changeColor)
    
    return (
        <>
            <div className={navBar ? 'nav-bar color' : 'nav-bar'}>{/*este esta en style general*/}
                <div className="row align-items-center">
                    <div className="col-1">
                       <img src={logo} alt="ola" className='img-fluid' />
                    </div>
                    <div className="col-3">
                    <Link to={"/"} className='hs'><h1>Carroth State</h1></Link>
                    </div>  
                    <div className="col-4 offset-4">
                        <div className="row align-items-center">
                            {isAgent && (
                                <>
                                    <div className="col-4">
                                        <a href="#" className="navp">Propiedades</a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="navp">Inmobiliarias</a>
                                    </div>
                                    <div className="col-2">
                                        <a href="#" className="navp">Vender</a>
                                    </div>
                                    <div className="col-2">
                                        <div>
                                            <img src={logo} alt="olis" className='img-fluid'/>
                                        </div>
                                    </div>
                                </>
                            )}
                            {!isAgent && (
                                <>
                                    <div className="col-4">
                                        <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="navp">Login</a>
                                    </div>
                                    <div className="col-4">
                                        <Link to={"/register"} className="navp" >Register</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar