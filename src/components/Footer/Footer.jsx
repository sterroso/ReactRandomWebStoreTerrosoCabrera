import React, { useContext } from "react";
import DataContext from '../../context/DataContext';
import TwitterLogo from './twitter32.png';
import InstagramLogo from './instagram32.png';
import TikTokLogo from './tiktok32.png';

const Footer = () => {
    const { brandTitle } = useContext(DataContext);

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
            <a href="/"><img src={`${process.env.PUBLIC_URL}/logo64.png`} alt={ brandTitle } /></a>
            <p className="font-bold text-2xl">{ brandTitle }</p>
        </div>

        <div>
            <span className="footer-title">Síguenos</span>
            <div className="grid grid-flow-col gap-4">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={ TwitterLogo } alt="Síguenos en twitter" /></a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><img src={ InstagramLogo } alt="Síguenos en Instagram" /></a>
                <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer"><img src={ TikTokLogo } alt="Síguenos en Tik-Tok" /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
