// export default function Home() {
//   return <div className="container mt-4"><h1>Bienvenue sur la boutique</h1></div>;
// }
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="hero text-white text-center d-flex flex-column justify-content-center align-items-center">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-4 fw-bold">Bienvenue dans notre boutique en ligne</h1>
          <p className="lead">Découvrez nos meilleurs produits à prix mini !</p>
          <Link to="/shop" className="btn btn-primary btn-lg mt-3">Accéder à la boutique</Link>
        </div>
      </header>

      <section className="container text-center py-5">
        <h2 className="mb-4">Pourquoi nous choisir ?</h2>
        <div className="row">
          <div className="col-md-4">
            <i className="bi bi-truck fs-1"></i>
            <h5>Livraison rapide</h5>
            <p>Partout en France en 48h chrono.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-stars fs-1"></i>
            <h5>Produits de qualité</h5>
            <p>On fouille, on teste, vous kiffez.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-credit-card-2-back fs-1"></i>
            <h5>Paiement sécurisé</h5>
            <p>Avec cryptage SSL 100% sécurisé.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
