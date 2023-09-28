import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products({ setToken }) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>setProducts(data)) 
            console.log(products)
      }, [products]);
    return (
        <div>
        <h1>Products</h1>
        <ul>
            {products.map(product => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img src={product.image} alt={product.title} />
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </li>  
            ))}
        </ul>
        </div>
    )
}