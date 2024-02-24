import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'

const Home = () => {
    const [products, setProduct] = useState([])
    const getData = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{
            console.log(res.data);
            setProduct(res.data);
    })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(()=> {
        getData();
    }, [])
    console.log(products)
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap:"10px"}}>
      {products.map((e,i) => {
        return (
            <MediaCard 
            key={i}
            image={e.image}
            title={e.title}
            desc={e.description}
            id={e.id}/>
        )
      })}
    </div>
  )
}

export default Home
