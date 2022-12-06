
import {useSelector, useDispatch} from 'react-redux'
import {deleteUser} from '../features/user/userSlice'
import { Link } from 'react-router-dom'


function UserList() {

    const users = useSelector (state => state.users)
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
      dispatch(deleteUser(id))
    }

  return (
    <div>
        <h1>UserList</h1> 
        {users.map(user =>(
            <div key={user.id}>
                <h3>{user.id}</h3>
                <h3>{user.token}</h3>
                <button onClick={() => handleDelete (user.id)}>delete</button>
                <Link to={`/carloxd/edit-user/${user.id}`}>edit</Link>
            </div>
        ))}
    </div>
  )
}

export default UserList