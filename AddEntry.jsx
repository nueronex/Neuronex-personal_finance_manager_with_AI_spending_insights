// src/pages/AddEntry.js
import React from 'react';

const AddEntry = () => {
  return (
    <div className="card"style={{marginTop:"5rem"}}>
      <h1 className="text-2xl font-bold mb-4">Add New Transaction</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Type</label>
          <select className="border rounded p-2 w-full">
            <option>Expense</option>
            <option>Income</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input type="number" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select className="border rounded p-2 w-full">
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input type="date" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <button type="submit" className="btn-primary w-full">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddEntry;
