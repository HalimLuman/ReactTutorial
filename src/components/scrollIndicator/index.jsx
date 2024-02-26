import React, { useEffect, useState } from 'react'
import './styles.css'

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(getUrl);
            const result = await response.json();
            
            if(result && result.products && result.products.length){
                setData(result.products);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    function handleScrollPercentage(){
        const scrolledValue = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
        const percentage = (scrolledValue / height) * 100;
    
        setScrollPercentage(percentage);
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => {});
        }
    },[])

    if(errorMessage){
        return <div>Error ! {errorMessage}</div>
    }
    if(loading){
        return <div> Loading data! Please wait</div>
    }


    return (
        <div>
            <div className='top-container'>
                <h1>Custom Scroll Indicator</h1>
                <div className='scroll-progress-tacking-container'>
                    <div className='current-progress-bar' style={{width: `${scrollPercentage}%`}}></div>
                </div>
            </div>
            <div className='data-container'>
                {
                    data && data.length 
                    ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
                    : <p>No Data Provided</p>
                }
            </div>
        </div>
    )
}

export default ScrollIndicator