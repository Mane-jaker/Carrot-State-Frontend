import "../styles/stylespage/Login.css";
import "../styles/style.css";
import Inputs from "../continuous/Inputs";
import TextArea from "../continuous/TextArea";
import SelectCity from "../continuous/SelectCity";
import SelectNum from "../continuous/SelectNum";
import NavBar from '../components/NavBar'

function ContactVender() {
    const typ = "text";
    const clas = "form-control inp";
    const idu = "venta";
    const clas1 = "form-select form-select-sm";

    return(
        <>
        <div className="row fonlog">
        <div className="row header nav-bar fixed-top">
            <NavBar isAgent={4}/>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center h100">
            <div className="col-10 logs">
              <div className="row mt">
                <h1 className="hs">Registrar venta</h1>
              </div>
              <div className="row mb">
                <section className="col-6">
                  <div className="row justify-content-center">
                    <Inputs 
                        Texto={"Titulo"} 
                        Type={typ} 
                        clas={clas} 
                        id={idu}
                    />
                  </div>
                  <div className="row justify-content-center">
                    <Inputs
                      Texto={"Ubicacion"}
                      Type={typ} 
                        clas={clas} 
                        id={idu}
                    />
                  </div>
                  <div className="row justify-content-center">
                    <SelectCity 
                        titulo={"Lugar"} 
                        Texto={"Ciudad"} 
                    />
                  </div>
                  <section className="row justify-content-center">
                    <div className="col-10">
                      <div className="row">
                        <div className="col">
                          <SelectNum 
                            titulo={"Baños"} 
                            Num={"Num Baños"}
                            clase={clas1} 
                            id={idu} 
                            
                          />
                        </div>
                        <div className="col">
                          <SelectNum 
                            titulo={"Cuartos"} 
                            Num={"Num Cuartos"}
                            clase={clas1} 
                            id={idu} 
                            
                          />
                          
                        </div>
                        <div className="col">
                          <SelectNum 
                          titulo={"Pisos"}  
                          Num={"Num Pisos"}
                          clase={clas1}
                          id={idu}
                          />
        
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
                <section className="col-6">
                    <div className="row justify-content-center">
                        <TextArea
                            Texto={"Descripcion"}
                            row={"4"}
                            Type={typ}
                            clas={clas}
                            id={idu}
                        />
                    </div>
                  <div className="row justify-content-center">
                    <Inputs 
                        Texto={"Titular"}
                        Type={typ} 
                        clas={clas} 
                        id={idu}
                    />
                  </div>
                  <div className="row justify-content-center">
                    <Inputs 
                        Texto={"Contacto"} 
                        Type={typ} 
                        clas={clas} 
                        id={idu}
                    />
                  </div>
                </section>
              </div>
                <div className="row justify-content-center align-items-center mb ">
                  <div className="col-5">
                    <button 
                    type='button'
                    className="btn btn-primary w100" 
                    onClick={"handleOnClick"}>aceptar</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
        
    )
}

export default ContactVender