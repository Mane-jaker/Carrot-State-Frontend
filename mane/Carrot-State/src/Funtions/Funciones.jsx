import axios from 'axios'

const GetManager = async (state)=>{
    try {
		const res = await axios.get(
			`http://localhost:8080/manager/1`,
			{
				params: {category: 'all', count: '1'}
			}
		);
        console.log(res.data);
	} catch (err) {
		console.log(err);
	}
}

export{GetManager}



