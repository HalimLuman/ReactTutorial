import React from 'react'
import useFetch from './index'

const UseFecthHookTest = () => {
    const {data, error, pending} = useFetch('https://dummyjson.com/products', {})
    console.log(data, error, pending);
  return (
    <div>
        <h1>Use Fetch Hook</h1>
        {
            pending ? <h3>Pending! Please Wait</h3> : null
        }
        {
            error ? <h3>{error}</h3> : null
        }
        {
            data && data.products && data.products.length
            ? data.products.map(productItem => <p key={productItem.key}>{productItem.title}</p>) : <h3>Data is not Provided</h3>
        }
    </div>
  )
}

export default UseFecthHookTest