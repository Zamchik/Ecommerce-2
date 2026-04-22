// Cart.jsx
import productsData from "../../../../data/products";
import styles from "./Cart.module.css";

const Cart = ({ cart, setCart, setPageType }) => {
  const cartItems = productsData.filter((p) => cart[p.id]);

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <p>Your cart is empty</p>
        <button onClick={() => setPageType("tv")}>Continue Shopping</button>
      </div>
    );
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * cart[item.id], 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <img src={item.images[0]} alt={item.model} width="60" />
            <div>
              <span>{item.make}</span> <span>{item.model}</span>
            </div>
            <div className={styles.quantityControls}>
              <button onClick={() => updateQuantity(item.id, -1)}>−</button>
              <span>{cart[item.id]}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button onClick={() => removeItem(item.id)}>🗑️</button>
            <span className={styles.itemTotal}>
              ${(item.price * cart[item.id]).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.summary}>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (8%): ${tax.toFixed(2)}</p>
        <p>Shipping: Calculated at checkout</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <div className={styles.actions}>
        <button>Proceed to Checkout</button>
        <button onClick={() => setPageType("tv")}>Back to Shopping</button>
      </div>
    </div>
  );
};

export default Cart;