import TextAtom from "../atoms/TextAtom"

function TittleMolecule({title,clas}) {
    return (
      <>
        <div className="title-b mt3">
            <TextAtom text={title} clas={clas} />
        </div>
      </>
    )
  }


export default TittleMolecule