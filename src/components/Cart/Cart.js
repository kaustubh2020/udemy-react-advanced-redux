import React from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const items = [{ title: 'Test Item', quantity: 3, total: 18, price: 6 }]; // Assuming a static list for simplicity

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <CartItem
            key={index}
            item={item}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
