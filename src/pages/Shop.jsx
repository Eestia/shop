import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Placeholder from '../components/Placeholder'; 

export default function Shop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Nos Produits</h2>
      {loading ? <Placeholder /> : <ProductList />}
    </div>
  );
}

