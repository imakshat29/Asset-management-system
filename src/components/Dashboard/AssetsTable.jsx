import React from 'react';
import { MoreVertical, Monitor } from 'lucide-react';
import "../../styles/Dashboard.css";

const assetsData = [
    { id: "LAP-001", name: "MacBook Pro M2", user: "Sarah J.", status: "Active" },
    { id: "MON-005", name: "Dell Monitor 32'", user: "Mike R.", status: "Maintenance" },
    { id: "PHN-012", name: "iPhone 14 Pro", user: "None", status: "Available" },
    { id: "ACC-021", name: "Logitech MX Mouse", user: "Design T.", status: "Active" },
];

const getStatusBadge = (status) => {
    let style = "px-3 py-1 text-xs font-medium rounded-full";
    if (status === "Active") return <span className={`${style} bg-green-100 text-green-700`}>{status}</span>;
    if (status === "Maintenance") return <span className={`${style} bg-amber-100 text-amber-700`}>{status}</span>;
    if (status === "Available") return <span className={`${style} bg-blue-100 text-blue-700`}>{status}</span>;
    return <span className={`${style} bg-slate-100 text-slate-600`}>{status}</span>;
};

export default function AssetsTable() {
  return (
    <div className="card" style={{ padding: '0' }}>
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-lg text-slate-800">High-Value Assets</h3>
        <button className="text-indigo-600 text-sm font-medium hover:underline">See Full Inventory</button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: '#F9FAFB', color: '#6B7280', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <tr>
              <th style={{ padding: '16px 24px' }}>Asset ID</th>
              <th style={{ padding: '16px 24px' }}>Name</th>
              <th style={{ padding: '16px 24px' }}>User</th>
              <th style={{ padding: '16px 24px' }}>Status</th>
              <th style={{ padding: '16px 24px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assetsData.map((asset, index) => (
              <tr key={asset.id} style={{ borderBottom: index < assetsData.length - 1 ? '1px solid #F3F4F6' : 'none', transition: 'background-color 0.2s' }} className="hover:bg-slate-50/50">
                <td style={{ padding: '16px 24px', fontWeight: '500', color: '#1F2937' }}>{asset.id}</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Monitor size={16} style={{ color: '#4F46E5' }} />
                    {asset.name}
                  </div>
                </td>
                <td style={{ padding: '16px 24px', color: '#4B5563' }}>{asset.user}</td>
                <td style={{ padding: '16px 24px' }}>{getStatusBadge(asset.status)}</td>
                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: '4px', borderRadius: '4px', transition: 'color 0.2s, background 0.2s' }} className="hover:bg-slate-200 hover:text-indigo-600">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}