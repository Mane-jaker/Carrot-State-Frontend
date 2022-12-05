import {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addPlot,updatePlot} from '../features/plot/plotSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'

function PlotsForm(){

    const [plot, setPlot] = useState({
        name: "",
        location: "",
        cityState: "",
        description: "",
        size: "",
        price:""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const plots = useSelector(state => state.plots)

    const handleChange = e =>{
      setPlot({
        ...plot,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if (params.id) {
            dispatch(updatePlot(plot))
        }else{
            dispatch(addPlot({
            ...plot,
            id:uuid(),
            
        }))
        }
        navigate('/carloxd')
    }

    useEffect(() => {
        if(params.id){
            setPlot(plots.find(plot => plot.id === params.id))
        }
    },[])

    return(
        <div onSubmit={handleSubmit} className="row">
            <div className="col-5">
                <form >
                    <input name='name' className="form-control" placeholder="Nombre del terreno" onChange={handleChange} value={plots.name}/>
                    <input name='location' className="form-control" placeholder="Localizacion" onChange={handleChange} value={plots.location}/>
                    <input name='cityState' className="form-control" placeholder="Estado" onChange={handleChange} value={plots.cityState}/>
                    <textarea name='description' className="form-control" placeholder="Descripcion de del terreno"onChange={handleChange} value={plots.description}/>
                    <input name='size' className="form-control" placeholder="Tamaño" onChange={handleChange} value={plots.size}/>
                    <input name='price' className="form-control" placeholder="Precio" onChange={handleChange} value={plots.price}/>
                    <div className="row">
                        <button>enviar</button>
                    </div>
                </form>
            </div>
        </div>
        
        
    )
}

export default PlotsForm