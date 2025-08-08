import DataTable from 'react-data-table-component';

const quoteData = [
  {
    id: 'Q12345',
    type: 'Standard',
    subtotal: 100.00,
    gst: 12.50,
    total: 112.50,
    date: '2023-10-01',
    moreInfo: {
      product:'Single Sided Signs',
      qty:1,
      size: ' 3ft (W) X 3 ft (L)',
      type:'PVC, Matte Vinyl',
      total: '$9.5'
    },
  },
  {
    id: 'Q12346',
    type: 'Express',
    subtotal: 200.00,
    gst: 25.00,
    total: 225.00,
    date: '2023-10-02',
    moreInfo: {
      product:'Single Sided Signs',
      qty:1,
      size: ' 3ft (W) X 3 ft (L)',
      type:'PVC, Matte Vinyl',
      total: '$9.5'
    },
  },
];

const ExpandedComponent = ({ data }) => (
  <div className="p-4 bg-gray-100 border rounded flex justify-around">
   <div className='flex items-center content-center justify-center '>
    <h4 className='mr-2'>{data.moreInfo.product}</h4>
    <span className=  'text-white rounded-full p-1 bg-black w-6  h-7'>{data.moreInfo.qty}</span>
   </div>
  
   <h4 className='mr-2'>{data.moreInfo.size}</h4>
   <h4 className='mr-2'>{data.moreInfo.type}</h4>
   <h4 className='mr-2'>{data.moreInfo.total}</h4>
   
  </div>
);

const quoteColumns = [
  {
    name: 'Quote #',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable: true,
  },
  {
    name: 'Subtotal',
    selector: row => `$${row.subtotal.toFixed(2)}`,
    sortable: true,
  },
  {
    name: 'GST',
    selector: row => `$${row.gst.toFixed(2)}`,
    sortable: true,
  },
  {
    name: 'Total',
    selector: row => `$${row.total.toFixed(2)}`,
    sortable: true,
  },
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
];

export default function Quotes() {
  return (
    <main className="w-full py-4 ">
      <h2 className="display-4">Quotes</h2>
      <div className=" w-full text-center ">
        <DataTable
          columns={quoteColumns}
          data={quoteData}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          customStyles={{
            headRow: { style: { backgroundColor: '#e2e3e5' } },
            rows: { style: { fontSize: '1.15rem' } },
          }}
          pagination
          striped
          highlightOnHover
        />
      </div>
    </main>
  );
}