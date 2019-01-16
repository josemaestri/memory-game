const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Memory Game</h1>
        </div>
        <div className="col">
          <h2>Click an image to begin.</h2>
        </div>
      </div>
      <div className="col">
        <h2>
          <Scoreboard></Scoreboard>
        </h2>
      </div>
    </div>
  </header>
);

export default Header;