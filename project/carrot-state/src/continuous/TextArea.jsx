import React from 'react'

function TextArea({Texto,Type,clas,id,xref,row}) {
  return (
    <>
      <div className="col-10">
            <p>{Texto}</p>
            <textarea type={Type} className={clas} id={id} ref={xref} rows={row}/>
      </div>
    </>
  )
}

export default TextArea