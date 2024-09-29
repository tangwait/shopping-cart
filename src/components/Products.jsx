import { useState, useEffect } from 'react';
import { useShoppingCart } from './useShoppingCart'; 

const images = import.meta.glob('../assets/images/*.jpg');

const loadImages = async () => {
  const imageMap = {};
  for (const path in images) {
    const imageName = path.split('/').pop().replace('.jpg', '');
    imageMap[imageName] = (await images[path]()).default;
  }
  console.log("Image Map:", imageMap); 
  return imageMap;
};

const Products = () => {
  const { addToCart } = useShoppingCart(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();

        const imageMap = await loadImages();
        console.log("Fetched Products:", json);
        const enhancedProducts = json.map(product => {
          const imageKey = `image${product.id}`;
          return {
            ...product,
            imageUrl: imageMap[imageKey]
          };
        });
        setProducts(enhancedProducts);

        const initialQuantities = enhancedProducts.reduce((acc, product) => {
          acc[product.id] = 1;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleAddToCart = (productId) => {
    const product = products.find(product => product.id === productId);
    if (product) {
      addToCart({ ...product, quantity: quantities[productId] });
    }
  };

  const incQ = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
  };

  const decQ = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1)
    }));
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <p className='product-title'>{product.title}</p>
            <p className='product-price'>${product.price}</p>
            <div className='product-quantity'>
              <button onClick={() => decQ(product.id)} className='less'>{'<'}</button>
              {quantities[product.id]}
              <button onClick={() => incQ(product.id)} className='more'>{'>'}</button>
              <button onClick={() => handleAddToCart(product.id)} className='addToCart'>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
