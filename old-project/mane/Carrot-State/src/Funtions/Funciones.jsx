import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addAgent} from '../features/agent/agentSlice'

const getPlot = async (id) => {
	//const peticion = await axios.get('http://localhost:8080/manager/'+"1")
	try {
		const res = await axios.get(
			"http://localhost:8080/plot/list/agent/" + id,
			{
				validateStatus: function(status){
					return true;
				}
			}
		)
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

const getPremise = async (id) => {
	//const peticion = await axios.get('http://localhost:8080/manager/'+"1")
	try {
		const res = await axios.get(
			"http://localhost:8080/premise/list/agent/" + id,
			{
				validateStatus: function(status){
					return true;
				}
			}
		)
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

const getLogin = async (obj) => {
	console.log(JSON.stringify(obj));
	fetch("http://localhost:8080/login/agent", {
	method: 'POST',
	headers: {
		Accept: "application/json",
		'Content-Type': 'application/json'},
	body: JSON.stringify(obj)}).then((res => res.json())).then(data =>{
		return new Promise((resolve,reject) => {
			const id = data.data.loged.id
			resolve(id)
			(
				<a href={"/login/"+id}></a>
			)
		})
	});
}

const getRegister = async (obj) => {
	console.log(JSON.stringify(obj));
	fetch("http://localhost:8080/register/agent", {
	method: 'POST',
	headers: {
		Accept: "application/json",
		'Content-Type': 'application/json'},
	body: JSON.stringify(obj)}).then((res => res.json())).then(data =>{
		console.log(data.data)
	});
}


const getHouse = async (id) => {
	//const peticion = await axios.get('http://localhost:8080/manager/'+"1")
	try {
		const res = await axios.get(
			"http://localhost:8080/house/agent/" + id,
			{
				validateStatus: function(status){
					return true;
				}
			}
		)
		return res.data;
	} catch (err) {
		console.log(err);
	}
}



export{getHouse, getPlot, getPremise, getLogin, getRegister}
