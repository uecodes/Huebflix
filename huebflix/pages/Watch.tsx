"use client";
import React, { useEffect } from 'react';
import EpisodeList from '../components/watch/EpisodeList';
import { fetchEpisodes, fetchProject } from '../api/Projects';
import Video from '../components/watch/Video';
import './Watch.css';
import { useParams } from 'react-router-dom';

interface WatchProps {
    onSelectProject?: (project: any) => void;
}

const Projekt: React.FC<WatchProps> = ({ onSelectProject = () => {}}) => {
    const { id } = useParams<{ id: string }>();
    const [episodes, setEpisodes] = React.useState<any[]>([]);
    const [video, setVideo] = React.useState<any>(null);
    const [project, setProject] = React.useState<any>("");

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        if(episodes && episodes[0]) {
            setVideo(episodes[0]);
        }
    }, [episodes]);

    useEffect(() => {
        fetchEpisodes("").then((data) => {
            setEpisodes(data as any[]);
        });

        fetchProject(id || "").then((data) => {
            setProject(data);
            onSelectProject(data);
        })
    }, [id]);

    return (
        <div className='watch-page'>
            <EpisodeList episodes={episodes} logo={project.logo} selectedEpisode={video} onEpisodeSelect={(ep) => setVideo(ep)}/>
            { video && <div className='watch-box'>
                <div>
                    <Video key={video.id} videoId={video.id}/>
                    <div className='video-title'>{video.title}</div>
                </div>
                
            </div>
            }
        </div>
    );
};

export default Projekt;