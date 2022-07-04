import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="div1">
        <div className="div2">
          <h1>Márcio Alves</h1>
          <h3>Full-Stack Developer - Front-End Developer</h3>
          <p>
            ReactJS | JavaScript | Redux | NodeJS | Python | Django | MongoDB |
            PostgreSQL | Git & Github | AWS | Docker
          </p>
          <div className="btnbox">
            <a
              href="https://github.com/alvesmarcio"
              className="btn"
              aria-current="page"
            >
              GIT HUB
            </a>
            <a href="https://www.linkedin.com/in/alvesmarcio/" className="btn">
              LINKEDIN
            </a>
          </div>
          <a
            href="mailto:alvesmarcio@hotmail.com"
            className="text-decoration-none"
          >
            <p>alvesmarcio@hotmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
