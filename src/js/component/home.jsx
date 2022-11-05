import { element } from "prop-types";
import React, { useEffect, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [loading, setLoading] = useState (true)
	const [taskList, setTaskList] = useState([""])
	const [input, setInput] = useState("")

	useEffect(()=>{
	fetch("https://assets.breatheco.de/apis/fake/todos/user/pablotorbio",{method: "GET"}) // Llamada a la api con configuración objeto =>{}
	//en el fetch introducimos la url de nuestra api
	.then((response)=>{ //Hay que esperar la contestación y de esto es de lo que se encarga el then
		response.json() // Json hace que la respuesta que nos da el servidor sea entendible
		.then(response=>{ //Hacemos este Then ya que la función json también hay que esperarla.
			console.log("esta es la respuesta ", response) //Esta es la respuesta que esperamos
			setLoading(false)
			setTaskList(response)
		}
		)
	})
	.catch((error)=>{}
	)}, [])
	//Aqui es donde pones lo que quieres hacer con la respuesta


	//Funciones 

	// handleChange --> Esta función me guarda el valor del input y me lo muestra
	const handleChange = (event)=>{
		setInput(event.target.value)
	}

	const addInput = ()=>{
		console.log("funciono")
		setTaskList(taskList.concat({"label":input, "done": false}))

		fetch("https://assets.breatheco.de/apis/fake/todos/user/pablotorbio", {
			method: 'PUT',
			body: JSON.stringify(taskList.concat({"label":input, "done": false})), // data can be `string` or {object}!
			headers:{
				'Content-Type': 'application/json'
			}
			})
			.then(response => response.json())
			.then(response => 
				{}
			)
			.catch(error => console.error('Error:', error));
		}

	const deleteInput = (index)=>{
			taskList.splice(index, 1)
			console.log()

		
		

		fetch("https://assets.breatheco.de/apis/fake/todos/user/pablotorbio", {
			method: 'PUT',
			body: JSON.stringify(taskList), // data can be `string` or {object}!
			headers:{
				'Content-Type': 'application/json'
			}
			})
			.then(response => response.json())
			.then(response => 
				{}
			)
			.catch(error => console.error('Error:', error));
		}
	

	return (
		
		<div className="text-center mt-4">
			<>	
			<div>
				<h1>To Do List With Fetch</h1>
				<div class="input-group mb-3 w-25 mx-auto my-4">
					<input type="text" className="form-control" placeholder="Task" aria-label="Task" aria-describedby="button-addon2" onChange={handleChange}/>
					<button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addInput}>Enviar</button>
				</div>
				<p>El valor del input es <strong> {input}</strong></p>
				{loading ? <p>Cargando</p> : <> {taskList.map((element, index)=> {return <> <p className="taskList">{element.label} <button onClick={()=> deleteInput(index)}>x</button></p> </> }   )} </>}
				
			</div>
			</>
        </div>
		
		
		
	)
};

export default Home;
