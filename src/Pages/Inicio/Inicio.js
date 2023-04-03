import React from 'react'
import "./Inicio.css"
import Img_Central from "./Img_Central.png"
import Greeting from "./Greeting";

const Inicio = () => {
    return (
        <div className='Imagen_Central'>
            <Greeting title="Bienvenidos a Mayla Creaciones"/>
            <img src={Img_Central} alt ='Imagen_Central'/>
            
        </div>
    )
}

export default Inicio
