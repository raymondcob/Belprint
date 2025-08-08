import DataTable from "react-data-table-component";
import BelprintLogoBlack from "../../assets/BELPRINT-LOGO.svg";
import { FaPrint } from "react-icons/fa";

// Sample data for the table
const invoiceData = [
  {
    item: "Business Cards (Full Color, 300gsm, 100pcs)",
    qty: 2,
    unitPrice: 25.0,
    total: 50.0,
  },
  { item: "Flyers (A5, Glossy, 500pcs)", qty: 1, unitPrice: 60.0, total: 60.0 },
  {
    item: "Banner (3ft x 6ft, Full Color)",
    qty: 1,
    unitPrice: 40.0,
    total: 40.0,
  },
];

const invoiceColumns = [
  {
    name: "Item",
    selector: (row) => row.item,
    grow: 2,
  },
  {
    name: "Qty",
    selector: (row) => row.qty,
    center: true,
  },
  {
    name: "Unit Price",
    selector: (row) => `$${row.unitPrice.toFixed(2)}`,
    center: true,
  },
  {
    name: "Total",
    selector: (row) => `$${row.total.toFixed(2)}`,
    center: true,
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#f1f5f9",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#4b5563",
    },
  },
  cells: {
    style: {
      fontSize: "0.875rem",
    },
  },
};

export default function Invoice() {
  const subtotal = invoiceData.reduce((sum, item) => sum + item.total, 0);
  const gst = subtotal * 0.125;
  const total = subtotal + gst;

  return (
    <div className="mx-auto max-w-full p-4">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 text-start">
        Invoice
      </h1>

      <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        {/* Header Section */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex items-center">
            <img
              src={BelprintLogoBlack}
              alt="Belprint Logo"
              className="mr-4 h-auto w-40"
            />
            <div>
              <h4 className="mb-1 text-lg font-semibold">
                Belprint Printing Shop
              </h4>
              <div className="text-sm text-gray-500">
                Seagull Street, San Pedro, Belize
                <br />
                +501-628-8081
                <br />
                info@belprint.bz
              </div>
            </div>
          </div>
          <div className="text-right">
            <h5 className="mb-1 text-xl font-semibold">INVOICE</h5>
            <div className="text-gray-700">
              <strong>#INV-20250806</strong>
            </div>
            <div className="text-gray-500">Date: 2025-08-06</div>
          </div>
        </div>

        {/* Billed To Section */}
        <div className="mb-6 mt-5">
          <h6 className="mb-2 text-sm font-semibold text-gray-700">
            Billed To:
          </h6>
          <div className="text-sm text-gray-700">
            <div>
              <strong>User</strong>
            </div>
            <div>Email: User@email.com</div>
            <div>Phone: +501-600-0000</div>
          </div>
        </div>

        {/* Invoice Items Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <DataTable
            columns={invoiceColumns}
            data={invoiceData}
            customStyles={customStyles}
            noHeader
          />
        </div>

        {/* Totals Section */}
        <div className="mt-6 flex justify-end">
          <div className="w-full text-right sm:w-1/2 md:w-1/3">
            <div className="py-1">
              <span className="text-gray-600">Subtotal:</span>
              <span className="ml-2 font-semibold text-gray-800">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="py-1">
              <span className="text-gray-600">GST (12.5%):</span>
              <span className="ml-2 font-semibold text-gray-800">
                ${gst.toFixed(2)}
              </span>
            </div>
            <div className="border-t border-gray-300 pt-2 text-lg font-bold">
              <span className="text-gray-900">Total:</span>
              <span className="ml-2 text-blue-600">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <strong>Notes:</strong>
          <div className="text-black text-sm">
            Thank you for your business! Please allow 2-3 business days for
            production. Contact us for any questions regarding your order.
          </div>
        </div>
        <div className="text-right">
          <button
            className="p-3 bg-white w-25 h-auto rounded-lg border border-blue-600 text-blue-600 hover:cursor-pointer flex items-center hover:text-white hover:bg-blue-500  "
            onClick={()=> window.print()}
          >
            <FaPrint />
            <h4 className="ml-3 text-md">Print</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
