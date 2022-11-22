
const getAgent = async (id) => {

    try{
        const res = await fetch("http://localhost:8080/plot/list/agent/" + id ,{
            
             
        }).then (Response => Response.json())
            .then (data => data)
        

                        

    }catch(err){
        console.log(err)
    }
}