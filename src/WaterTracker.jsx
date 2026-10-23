import { useState } from "react";

function WaterTracker() {
  const [water, setWater] = useState(0);

  function drinkGlass() {
    setWater(water + 250);
  }

  function resetWater() {
    setWater(0);
  }

  return (
    <div>
      <h2>Veden seuranta</h2>
      <p>{water} ml</p>
      <button onClick={drinkGlass}>Join lasillisen</button>
      <button onClick={resetWater}>Nollaa</button>
    </div>
  );
}

export default WaterTracker;
