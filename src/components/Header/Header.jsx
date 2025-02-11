import React from "react";


import Card from "../Card/Card";
const Header = () => {
    return (
        <header className="py-2 shadow-md">
            <nav className="header-nav">
                <ul className="flex justify-between">
                    <li>
                        <a href="#">Redux Shopping Card</a>
                    </li>
                    <li >
                        <Card />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;