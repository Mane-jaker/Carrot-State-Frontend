import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deletePlot} from '../features/plot/plotSlice'
import { Link } from 'react-router-dom'

function PlotsList(){

    const plots = useSelector(state => state.plots)
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
        dispatch(deletePlot(id))
    }

    

    return(
        <>
            <div>
                {plots.map(plot=> (
                <div key={plot.id}>
                    <h3>{plot.name}</h3>
                    <p>{plot.location}</p>
                    <p>{plot.cityState}</p>
                    <p>{plot.description}</p>
                    <p>{plot.size}</p>
                    <p>{plot.price}</p>
                    <button onClick={() => handleDelete(plot.id)}>delete</button>
                    <Link to={`/carloxd/edit-plot/${plot.id}`}>edit</Link>
                </div>
                ))}
            </div>
        </>
    )
}

export default PlotsList