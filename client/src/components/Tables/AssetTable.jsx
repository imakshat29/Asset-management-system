import React from 'react';
import styles from './AssetTable.module.css';

const MOCK_DATA = [
  { id: 1, name: 'Laptop Pro', user: 'Jane Doe', status: 'In Use' },
  { id: 2, name: 'Monitor 27"', user: 'John Smith', status: 'Available' },
  { id: 3, name: 'Server Rack 5', user: 'IT Team', status: 'Maintenance' },
];

const AssetTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.assetTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Asset Name</th>
            <th>Assigned User</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_DATA.map(asset => (
            <tr key={asset.id}>
              <td>{asset.id}</td>
              <td>{asset.name}</td>
              <td>{asset.user}</td>
              <td>
                <span className={`${styles.statusBadge} ${styles[asset.status.replace(/\s+/g, '')]}`}>
                  {asset.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;