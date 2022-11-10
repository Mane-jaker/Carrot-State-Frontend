import TextAtom from "../atoms/TextAtom"

function CardProspective() {

  const Text1 = "Name"
  const Text2 = "Presupuest"
  const clas = "texti"
  const clas3 = "mbo";
  const textMore = "Contacto";
                                                        
  return (
    <>
        <div className="row justcen mt3">
            <div className="col-10 fillcard">
                <div className="row mt3">
                    <TextAtom clas={clas} text={Text1} />
                </div>
                <div className="row">
                    <div className="col-9">
                        <TextAtom clas={clas} text={Text2} />
                    </div>
                    <div className="col-3">
                        <TextAtom text={textMore} clas={clas3}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardProspective