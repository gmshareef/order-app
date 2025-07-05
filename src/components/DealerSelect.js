import React from 'react';

const DealerSelect = ({ dealer, setDealer }) => {
  const dealers = ['Dealer A', 'Dealer B', 'Dealer C'];

  return (
    <div>
      <label className="block font-medium">Select Dealer</label>
      <select
        value={dealer}
        onChange={(e) => setDealer(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">-- Select --</option>
        {dealers.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
    </div>
  );
};

export default DealerSelect;
