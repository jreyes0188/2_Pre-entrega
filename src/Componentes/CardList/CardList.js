import React, { useEffect, useState } from 'react'
import CardProduct from '../CardProduct/CardProduct';
import axios from 'axios';
import "./CardList.css";

import {Link} from "react-router-dom"

const CardList = () => {
    const [users, setData] = useState([]);
    

    useEffect(() => {
        axios("https://my-json-server.typicode.com/jreyes0188/Api_Mayla/mayla")
        .then(res => setData (res.data))
    }, [])

    return (
        <div className='Card-List'>
            {users.map((user) => {
                return(
                    <div key={user.id}>
                        <Link to ={`/product-detail/${user.id}`}>
                        <CardProduct data={user}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList
