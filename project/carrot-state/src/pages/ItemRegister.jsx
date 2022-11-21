import '../styles/stylespage/Login.css'
import '../styles/style.css'
import Inputs from '../continuous/Inputs'
import Select from '../continuous/Select'

function ItemRegister(){
    const typ = "text"
    const clas ="form-control inp"
    const idu = "user"
    const clas1 = "form-select form-select-sm"
    return(
        <>
            <div className="row fonlog">
                <div className="container">
                    <div className="row align-items-center justify-content-center h100">
                        <div className="col-10 logs">
                            <div className="row mt">
                                <h1 className="hs">Registro de Casa</h1>
                            </div>
                            <div className="row mb">
                                <div className="col-6">
                                    <div className="row justify-content-center">
                                        <Inputs Texto={"Titulo"} Type={typ} clas={clas} id={idu}/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <Inputs Texto={"Ubicacion"} Type={typ} clas={clas} id={idu}/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <Inputs Texto={"Ciudad"} Type={typ} clas={clas} id={idu}/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <div className="row">
                                                <div className="col">
                                                    <Select titulo={"Baños"} clase={clas1} id={idu}/>
                                                </div>
                                                <div className="col">
                                                    <Select titulo={"Cuartos"} clase={clas1} id={idu}/>
                                                </div>
                                                <div className="col">
                                                    <Select titulo={"Pisos"} clase={clas1} id={idu}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row justify-content-center">
                                        <Inputs Texto={"Ciudad"} Type={typ} clas={clas} id={idu}/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <Inputs Texto={"Ciudad"} Type={typ} clas={clas} id={idu}/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <Inputs Texto={"Ciudad"} Type={typ} clas={clas} id={idu}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemRegister