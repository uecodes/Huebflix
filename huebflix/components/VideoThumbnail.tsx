"use client";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface VideoThumbnailProps {
    item: any;
    onClick: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ item, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [titleShown, setTitleShown] = useState(false);

    React.useEffect(() => {
        if (typeof window === 'undefined') return; // Ensure this runs only in the browser

        const listener = () => {
            setTitleShown(true);
            containerRef.current?.removeEventListener("transitionend", listener);
        };

        const hover = () => {
            containerRef.current?.addEventListener("transitionend", listener);
        };

        const blur = () => {
            containerRef.current?.removeEventListener("transitionend", listener);
            setTitleShown(false);
        };

        const currentRef = containerRef.current;
        if (currentRef) {
            currentRef.addEventListener("mouseover", hover);
            currentRef.addEventListener("mouseleave", blur);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener("mouseover", hover);
                currentRef.removeEventListener("mouseleave", blur);
            }
        };
    }, []);

    return <div ref={containerRef} className='thumbnail'>
        {
            !isLoaded && <img alt="placeholder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAIAAAC0SDtlAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkWqHawg4hCwOtlFRRxLFYtgobQVWnUwufQLmjQkLS6OgmvBwY/FqoOLs64OroIg+AHiLjgpukiJ/0sKLWI8OO7Hu3uPu3eA0Kww1fRFAVWrGal4TMzmVkX/K3wYwBDGEJSYqSfSixm4jq97ePh6F+FZ7uf+HP1K3mSARySOMt2oEW8Qz27WdM77xCFWkhTic+JJgy5I/Mh12eE3zkWbBZ4ZMjKpeeIQsVjsYrmLWclQiWeIw4qqUb6QdVjhvMVZrdRZ+578hYG8tpLmOs1RxLGEBJIQIaOOMiqoIUKrRoqJFO3HXPwjtj9JLplcZTByLKAKFZLtB/+D392ahekpJykQA3peLOtjHPDvAq2GZX0fW1brBPA+A1dax19tAnOfpDc6WvgICG4DF9cdTd4DLneA4SddMiRb8tIUCgXg/Yy+KQcM3gJ9a05v7X2cPgAZ6mr5Bjg4BCaKlL3u8u7e7t7+PdPu7weexnK4tsXa9wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+kEDhUkMVIbsR4AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAF0lEQVQY02M0NghkIAUwMZAIRjXQRAMARdcAxsF2aoIAAAAASUVORK5CYII="></img>
        }
        <Link to={"projekt/" + item.id} style={{display: "block", height: "100%", width: "100%"}}>
            <img 
                src={item.thumbnail}
                alt={item.title}
                onClick={onClick}
                style={{ cursor: 'pointer', display: isLoaded ? 'block' : 'none' }} // Show the image only when loaded
                onLoad={() => setIsLoaded(true)} // Set loaded state to true when the image is loaded
                onError={() => setIsLoaded(true)} // Handle errors (e.g., broken image links)
            />
        </Link>
       
        <div style={{ display: titleShown ? 'block' : 'none', position: "absolute"}} className='thumbnail-title'>
            <div style={{padding: "10px"}}>
                <div style={{fontSize: "0.8em"}}>{item.title}</div>
                {
                    item.tags.map((tag: string) => <span key={tag} className='thumbnail-tag'>{tag}</span>)
                }
            </div>   
        </div>
    </div>
};

export default VideoThumbnail;