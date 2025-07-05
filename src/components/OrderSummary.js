import React from 'react';

const OrderSummary = ({ dealer, orderItems }) => {
  const createWhatsAppMessage = () => {
    const itemList = orderItems.map(i => `${i.name}: ${i.quantity}`).join('\n');
    return `Dealer: ${dealer}\nOrder List:\n${itemList}`;
  };

  const handleSend = () => {
    const message = encodeURIComponent(createWhatsAppMessage());
    const phoneNumber = '919999999999'; // Change to your distributor number
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  if (!dealer || orderItems.length === 0) return null;

  return (
    <div>
      <h3 className="font-semibold mb-2">Order Summary</h3>
      <ul className="list-disc pl-6">
        {orderItems.map((item) => (
          <li key={item.name}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
      <button
        onClick={handleSend}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Send via WhatsApp
      </button>
    </div>
  );
};

export default OrderSummary;
