import React from "react";
import './styles.css';

export class Card extends React.Component {
    render() {
        return (
            <>
                <div className="card_container">
                    <img className="icon-beneficios" src={this.props.iconeBeneficios} alt="" />
                    <h3 className="title-beneficios">{this.props.titleBeneficios}</h3>
                    <p className="text-beneficios">{this.props.textBeneficios}</p>
                </div>
            </>
        )
    }
}