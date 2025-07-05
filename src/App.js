import React, { useState } from 'react';
import DealerSelect from './components/DealerSelect';
import ItemList from './components/ItemList';
import OrderSummary from './components/OrderSummary';

const App = () => {
  const [dealer, setDealer] = useState('');
  const [orderItems, setOrderItems] = useState([]);

  const handleAddItem = (item) => {
    const updatedItems = [...orderItems];
    const existing = updatedItems.find((i) => i.name === item.name);
    if (existing) {
      existing.quantity = item.quantity;
    } else {
      updatedItems.push(item);
    }
    setOrderItems(updatedItems.filter(i => i.quantity > 0));
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Order Taking App</h1>
      <DealerSelect dealer={dealer} setDealer={setDealer} />
      <ItemList onAddItem={handleAddItem} />
      <OrderSummary dealer={dealer} orderItems={orderItems} />
    </div>
  );
};

export default App;
