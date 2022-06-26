import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img src={character.image} className='img-fluid rounded-pill' />
      <p>From: {character.origin.name}</p>
    </div>
  );
};

export default CharacterCard;
