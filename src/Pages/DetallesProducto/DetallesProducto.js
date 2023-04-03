import React, {useEffect, useState} from 'react'
import CardProduct from  '../../Componentes/CardProduct/CardProduct'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetallesProducto = () => {

    const [user, setUser] = useState({});

    let {id} = useParams();

    useEffect(() => {
        axios(`https://my-json-server.typicode.com/jreyes0188/Api_Mayla/mayla/${id}`)
        .then(res => setUser (res.data))
    }, [id])

    return (
        <div style ={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <h1>User Detail</h1>
        <CardProduct data={user}/>
    </div>
)
}

export default DetallesProducto

