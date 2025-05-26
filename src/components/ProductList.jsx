import { useEffect, useState } from 'react';
import productsData from '../data/products';
import ProductCard from './ProductCard';
import Placeholder from './Placeholder';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Placeholder />;

  return (
    <div className="row">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
