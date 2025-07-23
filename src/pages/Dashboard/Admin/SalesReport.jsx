import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const SalesReport = () => {
  const [axiosSecure] = useAxiosSecure();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { data: sales = [], isLoading } = useQuery({
    queryKey: ["salesReport"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/payments");
      return res.data;
    },
  });

  const filteredSales = sales.filter((sale) => {
    const saleDate = new Date(sale.createdAt);
    if (startDate && saleDate < startDate) return false;
    if (endDate && saleDate > endDate) return false;
    return true;
  });

  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "60px",
    },
    {
      name: "Buyer Email",
      selector: (row) => row.buyerEmail,
      sortable: true,
    },
    {
      name: "Transaction ID",
      selector: (row) => row.transactionId || "N/A",
    },
    {
      name: "Amount",
      selector: (row) => `৳ ${row.total}`,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) =>
        new Date(row.createdAt).toLocaleDateString("en-GB"),
      sortable: true,
    },
  ];

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredSales);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SalesReport");
    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, "sales-report.xlsx");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Sales Report | Admin | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Sales Report
      </h2>

      {/* 🔍 Date Range Filter + Export */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">From:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-bordered w-full"
              placeholderText="Start Date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">To:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="input input-bordered w-full"
              placeholderText="End Date"
            />
          </div>
        </div>

        <button
          onClick={exportToExcel}
          className="btn bg-green-600 hover:bg-green-700 text-white"
        >
          Export Excel
        </button>
      </div>

      {/* 📋 Data Table */}
      {isLoading ? (
        <p className="text-center text-gray-600">Loading sales data...</p>
      ) : (
        <DataTable
          columns={columns}
          data={filteredSales}
          pagination
          highlightOnHover
          striped
          persistTableHead
        />
      )}
    </section>
  );
};

export default SalesReport;
