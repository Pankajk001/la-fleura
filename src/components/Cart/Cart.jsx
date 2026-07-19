import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../Button';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.product.isPriceOnRequest ? 0 : item.product.price * item.quantity);
  }, 0);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const hasVariableItem = cartItems.some(item => item.product.isPriceOnRequest);

  const handleWhatsAppCheckout = () => {
    let message = `Hi, I would like to place an order for the following items:\n\n`;
    
    cartItems.forEach((item, index) => {
      const priceText = item.product.isPriceOnRequest 
        ? 'Finalize on WhatsApp'
        : `₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`;
      message += `${index + 1}. ${item.product.name} (x${item.quantity}) - ${priceText}\n`;
    });
    
    message += `\n*Total Amount: ₹${totalPrice.toLocaleString('en-IN')}${hasVariableItem ? '+' : ''}*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919654537655?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeFromCart(item.product.id);
    } else {
      updateQuantity(item.product.id, item.quantity - 1);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <h2>Your cart is currently empty</h2>
            <Link to="/">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.backWrapper}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Collections
          </Link>
        </div>
        
        <h1 className={styles.title}>Your Cart</h1>
        
        <div className={styles.cartList}>
          {cartItems.map((item) => (
            <div key={item.product.id} className={styles.cartItem}>
              <img src={item.product.src} alt={item.product.name} className={styles.itemImage} />
              
              <div className={styles.itemDetails}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3 className={styles.itemName}>{item.product.name}</h3>
                    <div className={styles.itemPrice}>
                      ₹ {item.product.priceDisplay || item.product.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <button 
                    className={styles.removeBtn} 
                    onClick={() => removeFromCart(item.product.id)}
                    title="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                
                <div className={styles.itemActions}>
                  <div className={styles.quantitySelector}>
                    <button 
                      type="button"
                      className={styles.qtyBtn} 
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className={styles.qtyValue}>{item.quantity}</span>
                    <button 
                      type="button"
                      className={styles.qtyBtn} 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className={styles.itemTotal}>
                    {item.product.isPriceOnRequest ? 'Finalize on WhatsApp' : `₹ ${(item.product.price * item.quantity).toLocaleString('en-IN')}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Total ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
            <span className={styles.summaryValue}>₹ {totalPrice.toLocaleString('en-IN')}{hasVariableItem ? '+' : ''}</span>
          </div>
          
          <Button 
            variant="whatsapp" 
            className={styles.whatsappBtn}
            onClick={handleWhatsAppCheckout}
          >
            Continue to buy {totalItems} {totalItems === 1 ? 'product' : 'products'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
