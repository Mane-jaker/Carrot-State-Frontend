import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"

function BodoqueCard({id, name, isActivated, realStateCode}) {

    const navigator = useNavigate();

    const [reload, setReload] = useState(0);

    useEffect(function() {},[reload]);

    const handleChangeStatus = () =>{
        fetch("", {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        })
    }   

    const handleActivate = () =>{
        fetch(`http://localhost:8080/real_state/activate/${id}`, {
            method: 'PUT',

        })
        .then((response) => {
            setReload(reload + 1);
            swal('Error',response.message,'error')
        })
    }

    return (
        <div className="col-4 container-fluid">
            <section className="elbodoque">
                <img className="img-fluid bodoquefoto" src="https://th.bing.com/th/id/OIP.dr49NR3kgozfluWxA8KSBwHaD_?w=328&h=180&c=7&r=0&o=5&pid=1.7" alt="ola" />
            </section>
            <section className="infobodoque">
                <div>{name}</div>
                <button onClick={handleChangeStatus}>Cambiar estado</button>
                { isActivated == false && (
                    <>
                        <button onClick={handleActivate}>Activate</button>    
                    </>
                )}
            </section>
        </div>
    )
}

export default BodoqueCard