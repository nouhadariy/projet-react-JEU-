import { Component } from "react";
import de from '../assets/de.jpg';
import face1 from '../assets/face1.png';
import face2 from '../assets/face2.png';
import face3 from '../assets/face3.png';
import face4 from '../assets/face4.png';
import face5 from '../assets/face5.png';
import face6 from '../assets/face6.png';

export default class JeuDe extends Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    let val = this.state.compteur + 1;
    let bool = (this.props.cache == valeur ? true : false);
    this.setState({ face: valeur, compteur: val, fin: bool });
  }

  getImage() {
    switch (this.state.face) {
      case 1:
        return face1;
      case 2:
        return face2;
      case 3:
        return face3;
      case 4:
        return face4;
      case 5:
        return face5;
      case 6:
        return face6;
      default:
        return de;
    }
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    return (
      <div>
        <img src={this.getImage()} style={{ width: 120, height: 120 }} />
        <h1>Jeu de Dé...</h1>
        <h2>Face: {this.state.face}</h2>
        <h2>Nombre d'essais: {this.state.compteur}</h2>

        {!this.state.fin && <button onClick={() => this.jouer()}>Jouer</button>}

        {this.state.fin && <p>Bravo vous avez trouvez la face cachée.....</p>}

        {this.state.fin && <button onClick={() => this.initialiser()}>Initialiser</button>}
      </div>
    );
  }
}