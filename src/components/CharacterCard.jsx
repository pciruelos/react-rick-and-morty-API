import React from "react";

const CharacterCard = ({ character }) => {
  return (
<div>

  <img src={character.image} className="card-img-top img-fluid " />
<div className="card" style={{backgroundColor: "#3E5E7D"}}> 

  <div className="card-body">
    <h5 className="card-title text-center">{character.name}</h5>
    <p className="card-text">Here is a place for a description in case the API dont bring one<br></br> <a href={`http://www.google.com/search?q=${character.name}`} className="card-link fs-6">Know More</a></p> 
  </div>

  <ul className="list-group list-group-flush text-center fw-bold">
    <li className="list-group-item text-success">Status: {character.status}</li>
    <li className="list-group-item text-danger">Type: {character.species}</li>
  </ul>

</div>
</div>

    
  );
};

export default CharacterCard;
