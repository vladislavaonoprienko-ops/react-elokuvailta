import { useState } from "react";

function StudySession(props) {
  const [minutesDone, setMinutesDone] = useState(0);

  function addTime() {
    setMinutesDone(minutesDone + 15);
  }

  function resetTime() {
    setMinutesDone(0);
  }

  return (
    <div>
      <h2>Opiskelukerta</h2>
      <p>Aihe: {props.subject}</p>
      <p>Tavoite: {props.targetMinutes} minuuttia</p>
      <p>Tehty: {minutesDone} minuuttia</p>

      {minutesDone < props.targetMinutes ? (
        <p>Tavoite on vielä kesken.</p>
      ) : (
        <p>Tavoite saavutettu!</p>
      )}

      <button onClick={addTime}>+ 15 min</button>
      <button onClick={resetTime}>Nollaa</button>
    </div>
  );
}

export default StudySession;
