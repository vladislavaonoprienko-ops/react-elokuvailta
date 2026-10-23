import { useState } from "react";

function MovieCard(props) {
  const [votes, setVotes] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  function addVote() {
    setVotes(votes + 1);
  }

  function toggleDescription() {
    setIsDescriptionVisible(!isDescriptionVisible);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>Genre: {props.genre}</p>
      <p>Ikäraja: {props.ageLimit}</p>

      <p>{props.isAvailable ? "Saatavilla" : "Ei saatavilla"}</p>

      {isDescriptionVisible && <p>{props.description}</p>}

      <p>Ääniä: {votes}</p>

      {props.isAvailable && <button onClick={addVote}>Äänestä</button>}

      <button onClick={toggleDescription}>
        {isDescriptionVisible ? "Piilota kuvaus" : "Näytä kuvaus"}
      </button>
    </div>
  );
}

export default MovieCard;
