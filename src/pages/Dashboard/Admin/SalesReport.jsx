







// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { Helmet } from "react-helmet-async";
// import DataTable from "react-data-table-component";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const SalesReport = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const { data: sales = [], isLoading } = useQuery({
//     queryKey: ["salesReport"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/payments");
//       return res.data;
//     },
//   });

//   const filteredSales = sales.filter((sale) => {
//     const saleDate = new Date(sale.createdAt);
//     if (startDate && saleDate < startDate) return false;
//     if (endDate && saleDate > endDate) return false;
//     return true;
//   });

//   const columns = [
//     {
//       name: "#",
//       selector: (row, index) => index + 1,
//       width: "60px",
//     },
//     {
//       name: "Buyer Email",
//       selector: (row) => row.buyerEmail,
//       sortable: true,
//     },
//     {
//       name: "Transaction ID",
//       selector: (row) => row.transactionId || "N/A",
//     },
//     {
//       name: "Amount",
//       selector: (row) => `৳ ${parseFloat(row.total).toFixed(2)}`,
//       sortable: true,
//     },
//     {
//       name: "Status",
//       selector: (row) => row.status === "paid" ? "✔ Paid" : "🕒 Pending",
//       sortable: true,
//     },
//     {
//       name: "Date",
//       selector: (row) =>
//         new Date(row.createdAt).toLocaleDateString("en-GB"),
//       sortable: true,
//     },
//   ];

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(filteredSales);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "SalesReport");
//     const buffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     const blob = new Blob([buffer], { type: "application/octet-stream" });
//     saveAs(blob, "sales-report.xlsx");
//   };

//   const exportToPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Sales Report", 14, 16);
//     const tableData = filteredSales.map((sale, i) => [
//       i + 1,
//       sale.buyerEmail,
//       sale.transactionId || "N/A",
//       `৳ ${parseFloat(sale.total).toFixed(2)}`,
//       sale.status,
//       new Date(sale.createdAt).toLocaleDateString("en-GB"),
//     ]);
//     doc.autoTable({
//       head: [["#", "Buyer Email", "Transaction ID", "Amount", "Status", "Date"]],
//       body: tableData,
//       startY: 20,
//     });
//     doc.save("sales-report.pdf");
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Sales Report | Admin | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         Sales Report
//       </h2>

//       {/* 🔍 Date Filter + Export */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
//         <div className="flex gap-4">
//           <div>
//             <label className="block text-sm font-semibold mb-1">From:</label>
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               className="input input-bordered w-full bg-white text-black"
//               placeholderText="Start Date"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-1">To:</label>
//             <DatePicker
//               selected={endDate}
//               onChange={(date) => setEndDate(date)}
//               className="input input-bordered w-full bg-white text-black"
//               placeholderText="End Date"
//             />
//           </div>
//         </div>

//         <div className="flex gap-2 mt-2 md:mt-7">
//           <button
//             onClick={exportToExcel}
//             className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
//           >
//             Export Excel
//           </button>
//           <button
//             onClick={exportToPDF}
//             className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white"
//           >
//             Export PDF
//           </button>
//         </div>
//       </div>

//       {/* 📋 Data Table */}
//       {isLoading ? (
//         <p className="text-center text-gray-600">Loading sales data...</p>
//       ) : (
//         <DataTable
//           columns={columns}
//           data={filteredSales}
//           pagination
//           highlightOnHover
//           striped
//           persistTableHead
//         />
//       )}
//     </section>
//   );
// };

// export default SalesReport;




// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { Helmet } from "react-helmet-async";
// import DataTable from "react-data-table-component";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const SalesReport = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const { data: sales = [], isLoading } = useQuery({
//     queryKey: ["salesReport"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/payments");
//       return res.data;
//     },
//   });

//   const filteredSales = sales.filter((sale) => {
//     const saleDate = new Date(sale.createdAt);
//     if (startDate && saleDate < startDate) return false;
//     if (endDate && saleDate > endDate) return false;
//     return true;
//   });

//   const columns = [
//     {
//       name: "#",
//       selector: (row, index) => index + 1,
//       width: "60px",
//     },
//     {
//       name: "Buyer Email",
//       selector: (row) => row.buyerEmail,
//       sortable: true,
//     },
//     {
//       name: "Transaction ID",
//       selector: (row) => row.transactionId || "N/A",
//     },
//     {
//       name: "Amount",
//       selector: (row) => `৳ ${parseFloat(row.total).toFixed(2)}`,
//       sortable: true,
//     },
//     {
//       name: "Status",
//       selector: (row) =>
//         row.status === "paid" ? "✔ Paid" : "🕒 Pending",
//       sortable: true,
//     },
//     {
//       name: "Date",
//       selector: (row) =>
//         new Date(row.createdAt).toLocaleDateString("en-GB"),
//       sortable: true,
//     },
//   ];

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(filteredSales);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "SalesReport");
//     const buffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     const blob = new Blob([buffer], { type: "application/octet-stream" });
//     saveAs(blob, "sales-report.xlsx");
//   };

//   const exportToPDF = () => {
//     try {
//       const doc = new jsPDF();
//       doc.text("Sales Report", 14, 16);

//       const tableData = filteredSales.map((sale, i) => [
//         i + 1,
//         sale.buyerEmail,
//         sale.transactionId || "N/A",
//         `৳ ${parseFloat(sale.total).toFixed(2)}`,
//         sale.status === "paid" ? "✔ Paid" : "🕒 Pending",
//         new Date(sale.createdAt).toLocaleDateString("en-GB"),
//       ]);

//       doc.autoTable({
//         head: [["#", "Buyer Email", "Transaction ID", "Amount", "Status", "Date"]],
//         body: tableData,
//         startY: 20,
//         styles: { fontSize: 10 },
//         headStyles: { fillColor: [22, 160, 133] }, // teal/green header
//       });

//       doc.save("sales-report.pdf");
//     } catch (error) {
//       console.error("PDF Export Error:", error);
//       alert("Something went wrong while generating PDF!");
//     }
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Sales Report | Admin | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         Sales Report
//       </h2>

//       {/* 🔍 Date Filter + Export */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
//         <div className="flex gap-4">
//           <div>
//             <label className="block text-sm font-semibold mb-1">From:</label>
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               className="input input-bordered w-full bg-white text-black"
//               placeholderText="Start Date"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-1">To:</label>
//             <DatePicker
//               selected={endDate}
//               onChange={(date) => setEndDate(date)}
//               className="input input-bordered w-full bg-white text-black"
//               placeholderText="End Date"
//             />
//           </div>
//         </div>

//         <div className="flex gap-2 mt-2 md:mt-7">
//           <button
//             onClick={exportToExcel}
//             className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
//           >
//             Export Excel
//           </button>
//           <button
//             onClick={exportToPDF}
//             className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white"
//           >
//             Export PDF
//           </button>
//         </div>
//       </div>

//       {/* 📋 Data Table */}
//       {isLoading ? (
//         <p className="text-center text-gray-600">Loading sales data...</p>
//       ) : (
//         <DataTable
//           columns={columns}
//           data={filteredSales}
//           pagination
//           highlightOnHover
//           striped
//           persistTableHead
//         />
//       )}
//     </section>
//   );
// };

// export default SalesReport;



import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "react-toastify";

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
      selector: (row) => `৳ ${parseFloat(row.total).toFixed(2)}`,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status === "paid" ? "✔ Paid" : "🕒 Pending",
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.createdAt).toLocaleDateString("en-GB"),
      sortable: true,
    },
  ];

  const exportToExcel = () => {
    const excelData = filteredSales.map((sale, i) => ({
      "#": i + 1,
      "Buyer Email": sale.buyerEmail,
      "Transaction ID": sale.transactionId || "N/A",
      "Amount": `৳ ${parseFloat(sale.total).toFixed(2)}`,
      "Status": sale.status === "paid" ? "✔ Paid" : "🕒 Pending",
      "Date": new Date(sale.createdAt).toLocaleDateString("en-GB"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Report");
    XLSX.writeFile(workbook, "sales-report.xlsx");

    toast.success(" Excel downloaded successfully!");
  };

  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(14);
      doc.text("Sales Report", 14, 16);

      const tableData = filteredSales.map((sale, i) => [
        i + 1,
        sale.buyerEmail,
        sale.transactionId || "N/A",
        `Tk. ${parseFloat(sale.total).toFixed(2)}`, // ✅ Tk. instead of ৳
        sale.status === "paid" ? "Paid" : "Pending", // ✅ No emoji
        new Date(sale.createdAt).toLocaleDateString("en-GB"),
      ]);

      autoTable(doc, {
        head: [["#", "Buyer Email", "Transaction ID", "Amount", "Status", "Date"]],
        body: tableData,
        startY: 25,
        styles: { fontSize: 10 },
        headStyles: { fillColor: [34, 139, 34] },
      });

      doc.save("sales-report.pdf");

      toast.success(" PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF Export Error:", error);
      toast.error("❌ PDF export failed. Check console.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Sales Report | Admin | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Sales Report
      </h2>

      {/* 🔍 Filters and Export Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">From:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-bordered w-full bg-white text-black"
              placeholderText="Start Date"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">To:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="input input-bordered w-full bg-white text-black"
              placeholderText="End Date"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-2 md:mt-7">
          <button
            onClick={exportToExcel}
            className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
          >
            Export Excel
          </button>
          <button
            onClick={exportToPDF}
            className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* 📋 Table */}
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
