import '../styles/stylespage/Login.css'
import '../styles/style.css'
import Inputs from '../continuous/Inputs'

function Register(){
    const typ = "text"
    const clas ="form-control inp"
    const idu = "user"
    return(
        <>
            <div className="row fonlog">
                <div className="container">
                    <div className="row align-items-center justify-content-center h100">
                        <div className="col-4 logs">
                            <div className="row mt">
                                <h1 className="hs">Registro</h1>
                            </div>
                            <div className="row justify-content-center">
                                <Inputs Texto={"Username"} Type={typ} clas={clas} id={idu}/>
                            </div>
                            <div className="row justify-content-center">
                                <Inputs Texto={"Correo"} Type={typ} clas={clas} id={idu}/>
                            </div>
                            <div className="row justify-content-center mb">
                                <Inputs Texto={"Password"} Type={typ} clas={clas} id={idu}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register