import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QR = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function generateQrCode(){
    setQrCode(input);
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input 
        onChange={(e) => setInput(e.target.value)} 
        type='text' 
        name='qr-code' 
        placeholder='url'/>
        <button disabled={input && input.trim() !== '' ? false: true} onClick={generateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff'/>
      </div>
    </div>
  )
}

export default QR