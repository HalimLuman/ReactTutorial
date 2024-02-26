import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

export default function Slider({url, limit, page}){
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl){
        try{
            setLoading(true);

            const response = await fetch(`${getUrl}?${page}&limit=${limit}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const data = await response.json();
            setImages(data);
            setLoading(false);
            console.log(images);

        }catch(error){
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        if(url !== '') fetchImages(url)
    }, [url])
    
    if(loading){
        return <div>Loading data! Please wait</div>
    }

    if(errorMessage !== null){
        return <div>Error Occured! {errorMessage}</div>
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {
                images && images.length ?
                images.map((imageItem, index) => (
                    <img 
                    key={imageItem.id} 
                    alt={imageItem.download_url} 
                    src={imageItem.download_url} 
                    className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}/>
                ))
                : null
                
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images && images.length ? 
                    images.map((_,index) => 
                    <button 
                    key={index} 
                    className={currentSlide === index ? 'current-indicator' : 'current-indicator hide-current-indicator'}
                    onClick={() => setCurrentSlide(index)}
                    ></button>
                    )
                    : null
                }
            </span>
        </div>
    )
}