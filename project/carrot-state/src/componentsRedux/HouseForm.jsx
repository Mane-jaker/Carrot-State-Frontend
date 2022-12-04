import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addHouse, updateHouse} from '../features/house/HouseSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'


function HouseForm (){
    
    const [house, setHouse] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const houses = useSelector(state => state.houses)


    const handleChange = e => {
        setHouse({
            ...house,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(params.id){
            dispatch(updateHouse(house))
        }else{
            dispatch(addHouse({
            ...house,
            id: uuid(),
        }))
        }
        navigate('/carloxd')
    }

    useEffect(() => {
        if (params.id){
            setHouse(houses.find((house) => house.id === params.id))
        }
    },[])

    return (
        <form onSubmit={handleSubmit}>
            <input name='title' type="text" placeholder='title' onChange={handleChange} value={house.title} />

            <textarea name="description" placeholder='description' onChange={handleChange} value={house.description}></textarea>

            <button>save</button>
        </form>
    )
}

export default HouseForm