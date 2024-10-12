import React, { useState, useEffect } from 'react';
import './App.css';
import InventoryDashboard from './components/InventoryDashboard';
import ItemForm from './components/ItemForm';
import SupplierManagement from './components/SupplierManagement';

const App = () => {
  const [items, setItems] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/suppliers')
      .then((response) => response.json())
      .then((data) => setSuppliers(data));
  }, []);

  const addItem = (item) => {
    fetch('http://localhost:3001/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...item, id: items.length + 1 }),
    })
      .then((response) => response.json())
      .then((newItem) => setItems([...items, newItem]));
  };

  const addSupplier = (supplier) => {
    fetch('http://localhost:3001/suppliers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...supplier, id: suppliers.length + 1 }),
    })
      .then((response) => response.json())
      .then((newSupplier) => setSuppliers([...suppliers, newSupplier]));
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Inventory Management System</h1>

      {/* Inventory Dashboard */}
      <div className="mb-4">
        <InventoryDashboard items={items} />
      </div>

      {/* Form to Add/Update Items */}
      <div className="mb-4">
        <h2>Add New Inventory Item</h2>
        <ItemForm onSubmit={addItem} />
      </div>

      {/* Supplier Management */}
      <div className="mb-4">
        <h2>Supplier Information</h2>
        <SupplierManagement suppliers={suppliers} onAddSupplier={addSupplier} />
      </div>
    </div>
  );
};

export default App;
