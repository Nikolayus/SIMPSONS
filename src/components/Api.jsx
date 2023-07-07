import { useEffect, useState } from "react"

const Api = () => {
    const[personajes, setPersonajes] = useState([])

    useEffect( () => {
        const apiUrl = 'https://apisimpsons.fly.dev/api/personajes?limit=200&page=1'
        fetch(apiUrl)
        .then(response => response.json())
        .then(responseData => {
            let data = responseData.docs
            //console.log(data)
            setPersonajes(data)
            console.log(data)
        })
    }, [])

    //console.log(personajes)
    // personajes.map(personajes => 
    //     console.log(personajes.Nombre)
    //     )
    return (
        <div>
            {
                personajes.map( personajes =>
                    <ul key={personajes._id}>
                        <li> <img src={personajes.Imagen} alt="personaje"/> </li>
                        <li> {personajes.Nombre} </li>
                        <li> {personajes.Genero} </li>
                        <li> {personajes.Estado} </li>
                        <li> {personajes.Ocupacion} </li>
                        {/* <li> {personajes.Historia} </li> */}
                    </ul>
                )
            }
        </div>
    )
}

export default Api;