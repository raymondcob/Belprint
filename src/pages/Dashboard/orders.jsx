import DataTable from 'react-data-table-component';

const orderData = [
  {
    id: 'ORD-20250801',
    date: '2025-08-01',
    items: 3,
    total: 75.50,
    status: 'Delivered',
  },
  {
    id: 'ORD-20250725',
    date: '2025-07-25',
    items: 1,
    total: 30.00,
    status: 'Pending',
  },
  {
    id: 'ORD-20250715',
    date: '2025-07-15',
    items: 5,
    total: 120.25,
    status: 'Shipped',
  },
  {
    id: 'ORD-20250630',
    date: '2025-06-30',
    items: 2,
    total: 45.00,
    status: 'Delivered',
  },
  {
    id: 'ORD-20250610',
    date: '2025-06-10',
    items: 4,
    total: 95.75,
    status: 'Cancelled',
  },
];

const columns = [
  {
    name: 'Order ID',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Items',
    selector: row => row.items,
    sortable: true,
  },
  {
    name: 'Total',
    selector: row => `$${row.total.toFixed(2)}`,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    cell: row => {
      let color;
      switch (row.status) {
        case 'Delivered':
          color = 'bg-green-100 text-green-800';
          break;
        case 'Shipped':
          color = 'bg-blue-100 text-blue-800';
          break;
        case 'Pending':
          color = 'bg-yellow-100 text-yellow-800';
          break;
        case 'Cancelled':
          color = 'bg-red-100 text-red-800';
          break;
        default:
          color = 'bg-gray-100 text-gray-800';
      }
      return (
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${color}`}>
          {row.status}
        </span>
      );
    },
  },
  {
    name: 'Action',
    cell: () => (
      <button className="text-blue-600 hover:text-blue-800 font-medium">
        View Details
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#f9fafb',
      borderBottom: '2px solid #e5e7eb',
    },
  },
  headCells: {
    style: {
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#4b5563',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      color: '#4b5563',
    },
  },
};

export default function OrderHistory() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order History</h2>
        <DataTable
          columns={columns}
          data={orderData}
          pagination
          highlightOnHover
          pointerOnHover
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}