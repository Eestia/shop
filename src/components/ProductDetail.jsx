import { useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produit introuvable.</p>;

  return (
  <div className="container mt-4 d-flex flex-column align-items-center text-center">
    <h2>{product.name}</h2>
    <img src={product.image} alt={product.name} className="product-image img-fluid" />
    <p>{product.description}</p>
    <h4>{product.price}€</h4>
  </div>
);
}
