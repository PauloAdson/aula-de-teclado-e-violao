import React from "react";
import './styles.css';
import logo from '../../assets/images/logo.svg'

export class Header extends React.Component {
    render() {
        return (
            <header id="inicio">
                <a href="/">
                    <img src={logo} alt="Logo aulas de teclado e violão" />
                </a>
            </header>
        )
    }
}
