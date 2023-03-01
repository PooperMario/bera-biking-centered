import React from 'react';
import './style.css';

const GameEmbed = () => {
  return (
    <div className="container">
      <h1 style={{color: '', fontFamily: 'Courier New'}}>Bera Biking!!</h1>
      <iframe frameborder="0" src="https://itch.io/embed-upload/7429218?color=333333" allowfullscreen="" width="1600" height="900"><a href="https://pooncats.itch.io/bera-biking">Play Bera Biking on itch.io</a></iframe>
    </div>
  );
};

export default GameEmbed;
