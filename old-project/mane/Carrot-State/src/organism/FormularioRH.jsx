import ButtonAtom from "../atoms/ButtonAtom";
import InputAtom from "../atoms/InputAtom";
import TextAtom from "../atoms/TextAtom";
import SeleccionRH from "../molecules/SeleccionRH";

function FormularioRh (){
    const clase1 ="Intp1"
    const type1 ="text"
    const place1 ="NombreEjemplo"
    const place2 ="Descripcion"
    const place3 ="Precio $"
    const place4 ="Tamaño M2"
    const place5 ="Localizacion"
    const place6 ="Numero de baños"
    const place7 ="Cuartos"
    const place8 ="Pisos"

    const classText="TextIP1"
    const txt1="Nombre"
    const txt2="Descripcion"
    const txt3="Precio"
    const txt4="Tamaño"
    const txt5="Localizacion"
    const txt6="Numero de baños"
    const txt7="Cuartos"
    const txt8="Pisos"

    const claseBut="btn btn-primary BtnType"
    const textoBut="Enviar"
    const typeBut="btn"

    const cli="activar()"

    const from = useFormik({
      initialValues: {
        name: "",
        description: "",
        price: null,
        size:null,
        location: "",
        bathRoomNum: null,
        rooms: null,
        floors: null,
      },

      onSubmit: (values) =>{
            let obj = {
                name:       values.name,
                description:values.description,
                price:      values.price,
                size:       values.size,
                location:   values.location,
                bathRoomNum:values.bathRoomNum,
                rooms:      values.rooms,
                floors:     values.floors
            }
      }
    })

    return (
      <>
        <form onSobmit={form.handleSubmit}>
          <div className="row FormRH">
            <div className="col-11 InputForms">
              <div className="SelecRH">
                <SeleccionRH />
              </div>
              <div className="row Inputs mt3">
                <div className="col-4 offset-2 Inputs1">
                  <div className="InputRH1">
                    <TextAtom clas={classText} text={txt1} />
                    <InputAtom
                      clas={clase1}
                      type={type1}
                      place={place1}
                      val={form.values.name}
                      di={"name"}
                      mane={"name"}
                      Change={form.handleChange}
                    ></InputAtom>
                  </div>
                  <div className="InputRH2">
                    <TextAtom clas={classText} text={txt2} />
                    <InputAtom
                      clas={clase1}
                      type={type1}
                      place={place2}
                      val={form.values.description}
                      di={"description"}
                      mane={"description"}
                      Change={form.handleChange}
                    ></InputAtom>
                  </div>
                  <div className="InputRH3">
                    <TextAtom clas={classText} text={txt3} />
                    <InputAtom
                      clas={clase1}
                      type={type1}
                      place={place3}
                      val={form.values.price}
                      di={"price"}
                      mane={"price"}
                      Change={form.handleChange}
                    ></InputAtom>
                  </div>
                  <div className="InputRH4">
                    <TextAtom clas={classText} text={txt4} />
                    <InputAtom
                      clas={clase1}
                      type={type1}
                      place={place4}
                      val={form.values.size}
                      di={"size"}
                      mane={"size"}
                      Change={form.handleChange}
                    ></InputAtom>
                  </div>
                </div>
                <div className="col-4 offset-2 Inputs2">
                  <div className="InputRH5">
                    <TextAtom clas={classText} text={txt5} />
                    <InputAtom
                      clas={clase1}
                      type={type1}
                      place={place5}
                      val={form.values.location}
                      di={"location"}
                      mane={"location"}
                      Change={form.handleChange}
                    ></InputAtom>
                  </div>
                  <div id="Desaparese">
                    <div className="InputRH6">
                      <TextAtom clas={classText} text={txt6} />
                      <InputAtom
                        clas={clase1}
                        type={type1}
                        place={place6}
                        val={form.values.bathRoomNum}
                        di={"bathRoomNum"}
                        mane={"bathRoomNum"}
                        Change={form.handleChange}
                      ></InputAtom>
                    </div>
                    <div className="InputRH7">
                      <TextAtom clas={classText} text={txt7} />
                      <InputAtom
                        clas={clase1}
                        type={type1}
                        place={place7}
                        val={form.values.rooms}
                        di={"rooms"}
                        mane={"rooms"}
                        Change={form.handleChange}
                      ></InputAtom>
                    </div>
                    <div className="InputRH8">
                      <TextAtom clas={classText} text={txt8} />
                      <InputAtom
                        clas={clase1}
                        type={type1}
                        place={place8}
                        val={form.values.floors}
                        di={"floors"}
                        mane={"floors"}
                        Change={form.handleChange}
                      ></InputAtom>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt3 ButtSend">
                <ButtonAtom
                  clas={claseBut}
                  text={textoBut}
                  type={typeBut}
                  Click={cli}
                />
              </div>
            </div>
          </div>
        </form>
      </>
    );
    
    

}

function activar() {
        var childNodes = document.getElementById("Desaparese").getElementsByTagName('*');
        for (var node of childNodes) {
        node.disabled = true;}
        console.log("hola")
    }
    

export default FormularioRh;