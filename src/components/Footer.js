import React from "react";

const footerStyle = {
    border: '2px solid green',
}

const Footer = () => {

    const links = [
        {
            name: "GitHub",
            url: "https://github.com/teresacabell"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/teresa-schwirtlich-2b4b28223/"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/tercabell/"
        }
    ];

    return (
        <footer id="footer" style={footerStyle} className="footer">
            <ul className="nav-footer-list">
                <h2>Links</h2>
                {links.map((link) => (
                    <li className="list-item" key={link.name}>
                    <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;