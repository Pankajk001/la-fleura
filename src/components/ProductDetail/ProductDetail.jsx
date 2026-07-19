import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import Button from '../Button';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  const navigate = useNavigate();

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product not found</h2>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = (e) => {
    if (e) e.preventDefault();
    if (added) return;
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = (e) => {
    if (e) e.preventDefault();
    const isAlreadyInCart = cartItems.some(item => item.product.id === product.id);
    if (!isAlreadyInCart) {
      addToCart(product, quantity);
    }
    navigate('/cart');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContainer}>
        <div className={styles.backWrapper}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Collections
          </Link>
        </div>
      
      <div className={styles.content}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img src={product.src} alt={product.name} className={styles.image} />
          </div>
        </div>
        
        <div className={styles.detailsColumn}>
          <div className={styles.category}>{product.category.replace('-', ' ')}</div>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>₹ {product.priceDisplay || product.price.toLocaleString('en-IN')}</div>
          
          <div className={styles.description}>
            <p>
              {isReadMore && product.description.length > 150
                ? `${product.description.slice(0, 150)}...`
                : product.description}
              {product.description.length > 150 && (
                <span onClick={toggleReadMore} className={styles.readMore}>
                  {isReadMore ? ' Read more' : ' Show less'}
                </span>
              )}
            </p>
          </div>
          
          <div className={styles.actions}>
            <div className={styles.firstRowActions}>
              <div className={styles.quantitySelector}>
                <button type="button" onClick={handleDecrease} className={styles.qtyBtn}><Minus size={16} /></button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button type="button" onClick={handleIncrease} className={styles.qtyBtn}><Plus size={16} /></button>
              </div>
              
              <Button 
                variant="primary" 
                className={styles.addBtn}
                onClick={handleAddToCart}
                style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
              >
                <ShoppingBag size={18} />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </Button>
            </div>
            
            <Button 
              variant="secondary" 
              className={styles.buyBtn}
              onClick={handleBuyNow}
              style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
            >
              Buy Now
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
