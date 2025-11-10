import heroImage from "../../assets/hero.png";
import "./styles.css";

function Home() {
  return (
    <section className="home">
      <div className="hero-section">
        <img src={heroImage} alt="Banner principal da farmácia" className="hero-img" />
        <div className="hero-content">
          <h1>Farmácia Vida Saudável</h1>
          <p>Cuidando de você e da sua família</p>
        </div>
      </div>
    </section>
  );
}

export default Home;