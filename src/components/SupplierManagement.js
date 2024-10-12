import React, { useState } from 'react';

const SupplierManagement = ({ suppliers, onAddSupplier }) => {
  const [newSupplier, setNewSupplier] = useState({ name: '', contact: '', items: '' });

  const handleAddSupplier = (e) => {
    e.preventDefault();
    onAddSupplier(newSupplier);
    setNewSupplier({ name: '', contact: '', items: '' });
  };

  return (
    <div className="supplier-management">
      <form onSubmit={handleAddSupplier} className="form-inline">
        <div className="form-group mr-2">
          <input
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            value={newSupplier.name}
            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group mr-2">
          <input
            type="text"
            className="form-control"
            placeholder="Contact"
            value={newSupplier.contact}
            onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
            required
          />
        </div>
        <div className="form-group mr-2">
          <textarea
            className="form-control"
            placeholder="Items Supplied"
            value={newSupplier.items}
            onChange={(e) => setNewSupplier({ ...newSupplier, items: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Supplier</button>
      </form>

      <ul className="list-group mt-4">
        {suppliers.map((supplier) => (
          <li key={supplier.id} className="list-group-item">
            <strong>{supplier.name}</strong> - {supplier.contact} - Items: {supplier.items}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierManagement;
