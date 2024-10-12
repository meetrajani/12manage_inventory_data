import React from 'react';

const InventoryDashboard = ({ items }) => {
  return (
    <div className="inventory-dashboard">
      <h2>Inventory Dashboard</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Stock Level</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td>{item.supplier}</td>
              <td>
                <span className={`badge ${item.quantity < 10 ? 'badge-danger' : 'badge-success'}`}>
                  {item.quantity < 10 ? 'Low' : 'Sufficient'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDashboard;
