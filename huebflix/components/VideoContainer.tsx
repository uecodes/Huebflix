"use client";
import React from 'react';
import './VideoContainer.css'; // Import a CSS file for styling
import VideoThumbnail from './VideoThumbnail';
import { CategoricElements } from '../api/Projects';

const VideoContainer: React.FC = () => {
    const rows = [
        { id: 1, title: 'Neustes aus Hyrule', category: "zelda" },
    ];

    return (<>
            <div className="video-container">
                {rows.map((row) => (
                    <div key={row.id} className="video-row">
                        <span className="row-title">{row.title}</span>
                        <div className="thumbnails">
                            {CategoricElements(row.category).map((item: any) => <VideoThumbnail item={item} onClick={() => {}}></VideoThumbnail>)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default VideoContainer;