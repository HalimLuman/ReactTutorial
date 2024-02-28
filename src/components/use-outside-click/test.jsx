import React, { useRef, useState } from 'react'
import useOnClickOutside from '.';

const UseOnClickOutsideTest = () => {
    const ref = useRef();
    useOnClickOutside(ref,() => setShowContent(false))
    const [showContent, setShowContent] = useState(false);

    return (
        <div>
            {
                showContent ? <div ref={ref}>
                    <h1>This is a random Content</h1>
                    <p>Please click outside of this to close this. It won't close if you click inside of this content</p>
                </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}

export default UseOnClickOutsideTest