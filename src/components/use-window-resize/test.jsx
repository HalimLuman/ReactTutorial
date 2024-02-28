import React from 'react'
import useWindowResize from './index'

const UseWindowResizeTest = () => {
    const {width, height} = useWindowResize();
  return (
    <div>
        <h1>Use Window resize Hook</h1>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
    </div>
  )
}

export default UseWindowResizeTest