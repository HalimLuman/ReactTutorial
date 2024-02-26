import React from 'react'
import MenuItem from './menu-item'

const MenuList = ({list}) => {
  return (
    <ul className='menu-list-container'>
        {
            list && list.length 
            ? list.map((listItem, index) => <MenuItem item={listItem} key={index}/>)
            : <div>No Menu List Provided</div>
        }
    </ul>
  )
}

export default MenuList