import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUser, updateUser} from '../features/user/userSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'


function UserForm (){
    
    const [user, setUser] = useState({
        id: "",
        token: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const users = useSelector(state => state.users)


    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(params.id){
            dispatch(updateUser(user))
        }else{
            dispatch(addUser({
            ...user,  
        }))
        }
        navigate('/carloxd')
    }

    useEffect(() => {
        if (params.id){
            setUser(users.find(user => user.id === params.id))
        }
    },[])

    return (
        <form onSubmit={handleSubmit}>
             <input name='id' type="text" placeholder='id' onChange={handleChange} value={user.id} />

            <input name='token' type="text" placeholder='token' onChange={handleChange} value={user.token} />

            <button>save</button>
        </form>
    )
}

export default UserForm