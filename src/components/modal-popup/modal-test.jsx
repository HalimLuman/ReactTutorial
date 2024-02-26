import React, { useState } from 'react'
import Modal from './modal';
import './modal.css'

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowModalPopup(!showModalPopup)}>Open Modal Popup</button>
      {
        showModalPopup && <Modal header={<h1>Customized Header</h1>}  body={<div>Customized body</div>} footer={<h1>Customized Footer</h1>} onClose={()=>setShowModalPopup(false)}/>
      }
    </div>
  )
}

export default ModalTest