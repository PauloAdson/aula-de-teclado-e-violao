import React from "react";
import './styles.css';
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import foteDePaulo from "../../assets/images/paulo-adson.png";
import fotoMusical from "../../assets/images/foto-musical.png";
import pencil from "../../assets/images/pencil-solid.png";
import clock from "../../assets/images/clock-regular.png";
import list from "../../assets/images/list-check-solid.png";
import book from "../../assets/images/book-solid.png";
import { Footer } from "../Footer/Footer";


export class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <section className="section1">
                        <div className="section1_content">
                            <h1 className="uppercase">
                                Descubra o Músico<br />
                                que há em você!
                            </h1>

                            <p className="uppercase">
                                Comece do zero e aprenda teclado e violão de forma simples e prática.
                            </p>
                            <a className="btn-action uppercase"
                                href="https://wa.me/62995132226?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20agendar%20uma%20aula.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20hor%C3%A1rios%20e%20disponibilidade%3F%20Obrigado!"
                                rel="noopener"
                                target="_blank">
                                Agendar Aula
                            </a>
                        </div>
                    </section>

                    <section id="sobre" className="section2 sobre max-width">
                        <div className="sobre-as-aulas sobre-text">
                            <h2 className="title-section uppercase">Sobre as Aulas</h2>
                            <span className="span-subtitle">Aprenda do zero com confiança!</span>
                            <p className="sobre-paragrafo">
                                Minhas aulas de teclado e violão são perfeitas para iniciantes. Vou te acompanhar desde os primeiros acordes até tocar suas músicas favoritas, com uma abordagem prática e materiais didáticos fáceis de entender.
                            </p>
                        </div>
                        <div className="img-sobre">
                            <img src={fotoMusical} alt="" />
                        </div>
                    </section>

                    <section className="section3 sobre max-width">
                        <div className="img-sobre">
                            <img src={foteDePaulo} alt="" />
                        </div>
                        <div className="sobre-as-aulas sobre-text">
                            <h2 className="title-section uppercase">Quem sou eu?</h2>
                            <span className="span-subtitle">Prazer, sou Paulo Adson!</span>
                            <p className="sobre-paragrafo">
                                Toco violão há mais de 5 anos e teclado há mais de 3 anos, e minha paixão pela música me levou a ajudar outras pessoas a aprenderem e crescerem nesse universo incrível. Além de músico, também sou desenvolvedor, o que me ajuda a criar métodos dinâmicos e organizados para facilitar seu aprendizado.
                                Se você sempre quis tocar violão ou teclado, estou aqui para te guiar desde o início!
                            </p>
                        </div>
                    </section>

                    <section className="section4 sobre max-width">
                        <h2 className="title-section uppercase">Benefícios das Aulas</h2>
                        <div className="container_beneficios">
                            <Card
                                iconeBeneficios={pencil}
                                titleBeneficios={'Aprendizado Rápido'}
                                textBeneficios={'Metodologia simples e eficaz.'} />

                            <Card
                                iconeBeneficios={clock}
                                titleBeneficios={'Horários Flexíveis'}
                                textBeneficios={'Se adapte às suas rotinas.'} />

                            <Card
                                iconeBeneficios={list}
                                titleBeneficios={'Prática Constante'}
                                textBeneficios={'Foco no desenvolvimento de habilidades reais.'} />

                            <Card
                                iconeBeneficios={book}
                                titleBeneficios={'Materiais de Apoio'}
                                textBeneficios={'Acesso a vídeos e arquivos PDF'} />
                        </div>
                        <a className="btn-action uppercase"
                            href="https://wa.me/62995132226?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20agendar%20uma%20aula.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20hor%C3%A1rios%20e%20disponibilidade%3F%20Obrigado!"
                            rel="noopener"
                            target="_blank">
                            Agendar Aula
                        </a>
                    </section>

                    <Footer />
                </main>
            </>
        )
    }
}
