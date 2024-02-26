import React, { useEffect, useState } from 'react'
import './styles.css'

const LoadMore = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            
            const result = await response.json();
            
            if(result && result.products && result.products.length){
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }
        }catch(error){
            console.log(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[count])

    useEffect(() => {
        if(products && products.length === 100) setDisableButton(true);
    },[products])

    if(loading){
        return <div>Loading Data! Please wait</div>
    }

  return (
    <div className='load-more-container'>
        <div className='product-container'>
            {
                products && products.length 
                ? products.map((item,index) => (
                    <div key={index} className='product'>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p>{item.title}</p>
                    </div>
                ))
                : <div>No Data Provided</div>
            }
        </div>
        <div className='button-container'>
            <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
            {
                disableButton
                ? <div>You reached 100 products</div>
                : null
            }
        </div>
    </div>
  )
}

export default LoadMore