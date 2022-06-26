import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";


const Pagefoward = (props) => {
    return (
    <div>
        <div className="d-flex justify-content-between aling-items-center">
        <button className="btn btn-outline-danger btn-xl"  onClick={() => props.setiarpagina(props.paginaactual -1) }>back</button>
        <button className="btn btn-info btn-sm" onClick={() => props.setiarpagina(props.paginaactual + 1) }>NEXT</button>
        </div>
    </div>
        )
}

const CharacterList = (props) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchdata();
  }, [page]);

  return (
    <div className="container">

    <Pagefoward  paginaactual={page} setiarpagina={setPage}/>

      <div className="row">
      {characters.map((c) => {
        return (
            <div className="col-md-4" key={c.id}>
                <CharacterCard character={c} />
            </div>
        )
      })}
      </div>
      <Pagefoward  paginaactual={page} setiarpagina={setPage}/>
    </div>
  );
};

export default CharacterList;
