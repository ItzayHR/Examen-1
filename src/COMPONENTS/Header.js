import React from "react";
import '../CSS/Header.css';
import Logo from '../IMG/CinepolisLogo.png';

export default function Header()
{
    return(
        <div className = "Header">
            <img src = {Logo} className="img" alt="Cinepolis Logo"/>
        </div>
    )
}