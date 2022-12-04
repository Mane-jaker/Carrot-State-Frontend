import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteHouse} from '../features/house/HouseSlice'
import { Link } from 'react-router-dom'


function HouseList() {

    const House = useSelector (state => state.houses)
    console.log(House)
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
      dispatch(deleteHouse(id))
    }

  return (
    <div>
        <h1></h1> HouseList
        {House.map(house =>
            <div key={house.id}>
                <h3>{house.title}</h3>
                <p>{house.description}</p>
                <button onClick={() => handleDelete (house.id)}>delete</button>
                <Link to={`/carloxd/edit-house/${house.id}`}>edit</Link>
            </div>
        )}
    </div>
  )
}

export default HouseList