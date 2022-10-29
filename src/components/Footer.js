import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark">
                <h5>Creado por Nicolás Barbano</h5>
                <h5>Redes</h5>
                <div>
                    <a href="https://www.instagram.com/nicolas_barbano/"><FontAwesomeIcon icon={faInstagram} className="fa-2x iconRedes"/></a>
                    <a href="https://github.com/Avixys"><FontAwesomeIcon icon={faGithub} className="fa-2x iconRedes"/></a>
                </div>
                <div>
                    <img src="https://javascript-proyecto-final-ten.vercel.app/multimedia/logo_small.png" alt="Logo TodoGamer" className = "footerImg"/>
                </div>
        </footer>
    )
}

export default Footer;