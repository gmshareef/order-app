import React, { useState } from 'react';

const items = [
  { name: 'Almonds' },
  { name: 'Cashew' },
  { name: 'Turmeric Powder' },
  { name: 'Black Pepper' },
];

const ItemList = ({ onAddItem }) => {
  const [quantities, setQuantities] = useState({});

  const handleChange = (name, qty) => {
    const quantity = parseInt(qty) || 0;
    setQuantities({ ...quantities, [name]: quantity });
    onAddItem({ name, quantity });
  };

  return (
    <div>
      <h2 className="font-semibold">Items</h2>
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-2 mb-2">
          <span className="w-40">{item.name}</span>
          <input
            type="number"
            min="0"
            value={quantities[item.name] || ''}
            onChange={(e) => handleChange(item.name, e.target.value)}
            className="border p-1 w-20 rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
