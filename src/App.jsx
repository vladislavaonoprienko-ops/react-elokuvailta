import MovieCard from "./MovieCard";
import StudySession from "./StudySession";

function App() {
  return (
    <div>
      <h1>Elokuvailta ja Opiskeluseuranta</h1>

      {/* Elokuvakortit */}
      <p>Valitse illan elokuva.</p>
      <MovieCard
        title="Varjojen kaupunki"
        genre="jännitys"
        ageLimit={12}
        description="Nuori valokuvaaja huomaa kuvissaan kaupungin, jota ei pitäisi olla olemassa."
        isAvailable={true}
      />
      <MovieCard
        title="Viimeinen avaruusbussi"
        genre="komedia"
        ageLimit={7}
        description="Avaruusbussi eksyy reitiltä ja päätyy vieraalle galaksille."
        isAvailable={true}
      />
      <MovieCard
        title="Syvänteen kutsu"
        genre="seikkailu"
        ageLimit={12}
        description="Sukeltajat löytävät meren pohjalta jotain odottamatonta."
        isAvailable={false}
      />

      <hr />

      {/* Opiskeluseuranta samassa sovelluksessa */}
      <StudySession subject="JavaScript" targetMinutes={45} />
    </div>
  );
}

export default App;
