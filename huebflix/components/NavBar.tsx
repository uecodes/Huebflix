"use client";
import React, { useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

interface NavBarProps {
    onLoaded?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onLoaded }) => {
    const [loaded, setLoaded] = React.useState(false);
    const elementsRef = React.useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = React.useState(false);

    const handleLoaded = () => {
        setLoaded(true);
        if (onLoaded) {
            onLoaded();
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => {
            if (elementsRef.current) {
                elementsRef.current.classList.add('init');
            }
        }, 1000); // Simulate loading time

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //{loaded && <MenuIcon style={{height: "50%", width: "auto", marginRight: "350px"}}/>}
    //{loaded && <SearchIcon style={{height: "50%", width: "auto", marginLeft: "350px"}}/>}
    return (
        <nav className={scrolled ? 'nav-bar-scrolled' : 'nav-bar'}>
            <div ref={elementsRef} className='nav-bar-elements' onTransitionEnd={handleLoaded}>
                <Link className="page-logo" to="/"><img alt="Fischerhut" src="/huebi.png"></img></Link>
            </div>
            {loaded && <div className='nav-bar-border'></div>}
        </nav>
    );
};

export default NavBar;