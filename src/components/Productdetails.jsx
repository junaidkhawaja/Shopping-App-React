import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([])
    const getData = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) =>{
            console.log(res.data);
            setSingleProduct(res.data);
    })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(()=> {
        getData();
    }, []);

    return (
    <div>
      <h1>{singleProduct.title}</h1>
      <p>{singleProduct.description}</p>
      <img src={singleProduct.image} />
    </div>
  )
}

export default Productdetails
