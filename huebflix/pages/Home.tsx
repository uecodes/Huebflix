"use client";
import React from 'react';
import Hero from '../components/Hero';
import VideoContainer from '../components/VideoContainer';

const Home: React.FC = () => {
    return <div className='huebflix-container'>
        <Hero />
        <VideoContainer />
    </div>
};

export default Home;