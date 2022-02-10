import React,{Component} from "react"

import Navbar from "./components/navbar";
import Card from "./components/card";

import ago from './images/ago.jpg'
import bottoni from './images/bottoni.jpg'
import cerniere from './images/cerniere.jpg'
import filo from './images/filo.jpg'
import forbice from './images/forbice.jpg'
import nastri from './images/nastri.jpg'
import taletta from './images/taletta.jpg'

class App extends Component {
  state = {
    cards: [
      { id: 0,  immagine: ago,       articolo: "ago",       prezzo: 2.99,    quantita: 0},
      { id: 1,  immagine: bottoni,   articolo: "bottoni",   prezzo: 5.50,    quantita: 0},
      { id: 2,  immagine: cerniere,  articolo: "cerniere",  prezzo: 3.00,    quantita: 0},
      { id: 3,  immagine: filo,      articolo: "filo",      prezzo: 1.75,    quantita: 0},
      { id: 4,  immagine: forbice,   articolo: "forbice",   prezzo: 15.50,   quantita: 0},
      { id: 5,  immagine: nastri,    articolo: "nastri",    prezzo: 7.80,    quantita: 0},
      { id: 6,  immagine: taletta,   articolo: "taletta",   prezzo: 12.60,   quantita: 0}
    ]
  }

  /* delete card frontend */
  handleDelete = card => {
    const cards = [...this.state.cards]
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantita--;
    if (cards[id].quantita <= 0) {
      cards[id].quantita = 0
    }
    this.setState({ cards })

  }

  /* add to chart function */
  handleIncrement = card => {
    const cards = [...this.state.cards]
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantita++;
    this.setState({ cards })
  }

  render(){
    return (
      <>

        <Navbar />
        <div className="container">
          <h1>Acquista il tuo articolo preferito</h1>
          <hr />
          <div className="row justify-content-md-center">
            {this.state.cards.map(card =>(
              <Card
                key = { card.id }
                onDelete = {this.handleDelete}
                onIncrement = {this.handleIncrement}
                card = {card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
