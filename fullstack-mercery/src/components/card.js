import React, { Component } from "react"

class Card extends Component{
    render() {

        return(
            <div className="col col-xl-4 col-xs-12" align="center">
                <div className="text-light card bg-dark" style={{width: "18rem", textAlign: "center", marginBottom: "20px"}}>
                    <img src={this.props.card.immagine} className="rounded" style={{height: "250px"}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.articolo}</h5>
                        <p className="card-text">€{this.props.card.prezzo.toFixed(2)}</p>
                        <button onClick={() => this.props.onDelete(this.props.card)} className="btn btn-danger" style={{marginRight: "5px"}}>Elimina</button>
                        <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-success">Aggiungi
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {this.props.card.quantita}
                            </span>
                        </button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;