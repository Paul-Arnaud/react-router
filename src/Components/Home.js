import React, { Component } from 'react';
import "./Home.css";


class Home extends Component {
    render() {
        return (
           <p><span className="Home-bienvenue">Bienvenue</span> sur l'<span className="Home-accueil">accueil</span></p>
        );
    }
}

export default Home;