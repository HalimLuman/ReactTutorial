import { useState, useEffect } from 'react'

export default function RandomColor(){
    const [hex, setHex] = useState(true);
    const [content, setContent] = useState(null);

    useEffect(() => {
        generateRandomColor();
    },[]);

    function generateRandomColor(){
        if(hex){
            handleHex();
        }else{
            handleRGB();
        }
    }

    function handleHex(){
        setHex(true);

        let  r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let hexR = r.toString(16).padStart(2, '0');
        let hexG = g.toString(16).padStart(2, '0');
        let hexB = b.toString(16).padStart(2, '0');

        let hexColor = '#' + hexR + hexG + hexB;
        window.document.body.style.backgroundColor = hexColor;

        setContent(hexColor);
    }

    function handleRGB(){
        setHex(false);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        window.document.body.style.backgroundColor = `rgb(${r},${g},${b})`
        setContent(`rgb(${r},${g},${b})`)
    }
    return(
        <div>
            <div>
                <button onClick={() => handleHex()}>Create HEX Color</button>
                <button onClick={() => handleRGB()}>Create RGB Color</button>
                <button onClick={generateRandomColor}>Generate Random Color</button>
            </div>
            <div className='content'>
                {content}
            </div>
            
        </div>
    )
}