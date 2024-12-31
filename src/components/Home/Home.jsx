import React from "react";
import './styles.css';
import { Header } from "../Header/Header";

export class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <section className="section1">
                        <div className="section1_content">
                            <h1>
                                Descubra o Músico<br />
                                que há em você!
                            </h1>

                            <p>
                                Comece do zero e aprenda teclado e violão de forma simples e prática.
                            </p>
                            <a className="btn-action" href="https://wa.me/62995132226" rel="noopener" target="_blank">
                                Agendar Aula
                            </a>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
