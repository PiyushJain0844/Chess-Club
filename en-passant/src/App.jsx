import Timeline from "./components/Timeline";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>♟ En Passant</h1>
        <p>ABESEC Chess Club</p>

        <div className="hero-text">
          A journey of chess, competition, and community.
          <br />
          Every move creates a new story.
        </div>
      </header>

      <Timeline />

      <section className="club-links">
  <h2>Explore En Passant</h2>

  <p>
    Follow the club and stay connected with the chess community.
  </p>

  <div className="links">
    <a
      href="https://enpassant.co.in/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Official Forum
    </a>

    <a
      href="https://www.instagram.com/enpassant.abesec/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>

    <a
      href="https://www.chess.com/club/en-passant-abesec"
      target="_blank"
      rel="noopener noreferrer"
    >
      Chess.com
    </a>
  </div>
</section>

      <footer className="footer">
        <p>En Passant · ABESEC Chess Club</p>
      </footer>
    </div>
  );
}

export default App;