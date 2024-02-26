import React, { useState } from 'react'
import MenuList from './menu-list'
import { FaMinus, FaPlus } from 'react-icons/fa'

const MenuItem = ({item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggle(getCurrentlabel){
        setDisplayCurrentChildren({...displayCurrentChildren, [getCurrentlabel] : !displayCurrentChildren[getCurrentlabel]})
    }

    console.log(displayCurrentChildren)
    return (
    <li className='menu-item'>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length 
                ? <span onClick={() =>handleToggle(item.label)} style={{cursor: 'pointer'}}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={25}/> : <FaPlus color='#fff' size={25}/>
                    }
                </span>: null
            }
        </div>
        {
            item && item.children && item.children.length && displayCurrentChildren[item.label] ?  <MenuList list={item.children}/> : null
        }
    </li>
  )
}

export default MenuItem