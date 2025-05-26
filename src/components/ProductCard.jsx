import { Link } from 'react-router-dom';
import './ProductCard.css'
export default function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}€</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary">Détails</Link>
        </div>
      </div>
    </div>
  );
}
