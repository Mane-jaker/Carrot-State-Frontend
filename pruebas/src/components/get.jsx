import { useState } from "react"
import { useDispatch} from "react-redux"
import { addText } from "../features/get/getSlice"

function get(){

    const distpatch = useDispatch();

    const [text, setText]= useState({
        texto:""
    })
    
    const handleChange = e =>{
        setText({
            ...text,
            [e.target.name]: e.target.value,
        })
    }

    const handleSummit = (e) => {
        e.preventDefault();
        distpatch(addText(text))
    }

    return (
        <form onSubmit={handleSummit}>
            <div>Escribir un texto</div>
            <input name="text" type="text" onChange={handleChange}></input>
            <button>Enviar</button>
        </form>
    )
}

export default get