"use client";

import NavBar from "@/components/NavBar";
import Home from "@/pages/Home";
import Projekt from "@/pages/Watch";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


const App = () => {
    const [loaded, setLoaded] = React.useState(false);
    const [wallpaper, setWallpaper] = React.useState<string | null>(null);

    return <div className='App'>
        <Router basename={"/"}>
            <div className='background' style={wallpaper ? { backgroundImage: `url(${wallpaper})`} : {}}></div>
            <NavBar onLoaded={() => setLoaded(true)}/>
            <div className="nav-bar-space"></div>
            {
                loaded && 
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projekt/:id" element={<Projekt onSelectProject={(proj) => setWallpaper(proj.wallpaper)} />} />
                    </Routes>
            }
        </Router>
  </div>
}

export default App;
