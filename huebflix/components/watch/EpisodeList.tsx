"use client";
import React from 'react';
import './EpisodeList.css';

interface Episode {
    id: number;
    title: string;
}

interface EpisodeListProps {
    episodes: Episode[];
    selectedEpisode: Episode;
    logo: string;
    onEpisodeSelect: (ep: Episode) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, selectedEpisode, logo, onEpisodeSelect }) => {    
    return (
        <div className='episode-menu'>
            <div className='project-logo'>
                <img alt="logo" src={logo}/>
            </div>
            <div className='episode-border-gradient'></div>
            <div className='episode-list'>
            {
                episodes.map((episode) => (
                    <div key={episode.id} className={'episode-item' + (selectedEpisode === episode ? " selected": "")} onClick={() => onEpisodeSelect(episode)}>
                        <img src={`https://i.ytimg.com/vi/${episode.id}/mqdefault.jpg`} alt={episode.title} className='episode-thumbnail' />
                        <div className='episode-title'>{episode.title}</div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default EpisodeList;