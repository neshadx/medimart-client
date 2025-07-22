// src/pages/Invoice.jsx
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "../assets/ico.png"; // ✅ MediMart logo path
import { toast } from "react-toastify";

const Invoice = () => {
  const [invoice, setInvoice] = useState(null);
  const navigate = useNavigate();
  const printRef = useRef();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("invoice"));
    if (!stored) {
      toast.error("No invoice found!");
      navigate("/");
      return;
    }
    setInvoice(stored);
  }, [navigate]);

  const handlePrint = () => {
    const printContent = printRef.current;
    const win = window.open("", "", "width=800,height=600");
    win.document.write(`<html><head><title>Invoice</title></head><body>`);
    win.document.write(printContent.innerHTML);
    win.document.write(`</body></html>`);
    win.document.close();
    win.print();
  };

  if (!invoice) return null;

  const { cartItems, total, transactionId, paymentDate } = invoice;

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 bg-white">
      <Helmet>
        <title>Invoice | MediMart</title>
      </Helmet>

      <div ref={printRef} className="border p-6 rounded shadow">
        {/* Logo & Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold text-green-600">MediMart</h2>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Transaction ID: <span className="font-semibold">{transactionId}</span></p>
            <p>Date: {new Date(paymentDate).toLocaleString()}</p>
          </div>
        </div>

        {/* Buyer Info */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-1 text-gray-700">Customer Info</h3>
          <p className="text-sm text-gray-600">
            Email: <span className="font-semibold">{invoice.buyerEmail || "Anonymous"}</span>
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="table w-full border">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th>#</th>
                <th>Medicine</th>
                <th>Company</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx} className="text-sm text-gray-700">
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.company || "N/A"}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="text-right text-lg font-bold text-green-700">
          Grand Total: ${total.toFixed(2)}
        </div>
      </div>

      {/* Print Button */}
      <div className="text-center mt-6">
        <button onClick={handlePrint} className="btn btn-primary">
          Print Invoice
        </button>
      </div>
    </section>
  );
};

export default Invoice;
