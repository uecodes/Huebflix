"use client";
import React, { JSX, useEffect } from 'react';

interface VideoProps {
    videoId: string;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
                key={videoId}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black'
                }}
            ></iframe>
        </div>
    );
};

export default Video;