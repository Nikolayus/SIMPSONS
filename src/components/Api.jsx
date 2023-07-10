import { useEffect, useState } from "react"
import "./api.css"

const Api = () => {
    const[personajes, setPersonajes] = useState([])
   
    useEffect( () => {
        const apiUrl = 'https://apisimpsons.fly.dev/api/personajes?limit=200&page=1'
        fetch(apiUrl)
        .then(response => response.json())
        .then(responseData => {
            let data = responseData.docs
            setPersonajes(data)
            
        })
    }, [])

    return (
        <>
            
            <h1>Los Simpsons</h1>
            
            <div className="contenedor">
                
                {
                    personajes.map( personajes =>

                        <div className="card" key={personajes._id}>
                            <img src={personajes.Imagen} alt="personaje"/>
                            <p> {personajes.Nombre} </p>
                            <p> {personajes.Genero} </p>
                            <p> {personajes.Estado} </p>
                            {/* <p> {personajes.Ocupacion} </p> */}
                        </div>
                        
                    )
                }
            </div>
        </>
    )
}

export default Api;