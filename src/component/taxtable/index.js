import React, { useState, useRef } from "react";
import { Table, Input, Select } from "antd";

const { Option } = Select;

const TaxTable = ({ productSearchRef }) => {
  const [dataVal, setDataVal] = useState([]);
  const qtyRef = useRef(null);

  const data = [
    {
      key: "1",
      product: "Paracetamol tablets 500mg",
      batch: "ABC1234",
      expiryDate: "2025-03-31",
      mrp: 10.0,
      qty: 0,
      discount: 0,
      tax: 5,
      salesTax: 0.5,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "2",
      product: "Multivitamin tablets",
      batch: "DEF5678",
      expiryDate: "2024-10-01",
      mrp: 50.0,
      qty: 0,
      discount: 0,
      tax: 12,
      salesTax: 6.0,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "3",
      product: "Cough syrup for adults",
      batch: "GHI9012",
      expiryDate: "2025-05-15",
      mrp: 150.0,
      qty: 0,
      discount: 0,
      tax: 18.0,
      salesTax: 27.0,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "4",
      product: "Antibacterial cream",
      batch: "JKL3456",
      expiryDate: "2024-07-31",
      mrp: 75.0,
      qty: 0,
      discount: 0,
      tax: 5,
      salesTax: 3.75,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "5",
      product: "Insulin injection 10ml",
      batch: "MNO7890",
      expiryDate: "2025-01-01",
      mrp: 300.0,
      qty: 0,
      discount: 0,
      tax: 5,
      salesTax: 0,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "6",
      product: "Allergy relief tablets",
      batch: "PQR1234",
      expiryDate: "2024-09-01",
      mrp: 25.0,
      qty: 0,
      discount: 0,
      tax: 12,
      salesTax: 3.0,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "7",
      product: "Pain relief gel",
      batch: "STU5678",
      expiryDate: "2025-08-31",
      mrp: 125.0,
      qty: 0,
      discount: 0,
      tax: 5,
      salesTax: 6.25,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "8",
      product: "Antibiotic capsules",
      batch: "VWX9012",
      expiryDate: "2024-12-31",
      mrp: 100.0,
      qty: 0,
      discount: 0,
      tax: 18.0,
      salesTax: 0.5,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "9",
      product: "Digestive enzymes tablets",
      batch: "YZA3456",
      expiryDate: "2025-02-28",
      mrp: 40.0,
      qty: 0,
      discount: 0,
      tax: 5,
      salesTax: 2.0,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
    {
      key: "10",
      product: "Vitamin C effervescent tablets",
      batch: "BCD7890",
      expiryDate: "2024-11-15",
      mrp: 35.0,
      qty: 0,
      discount: 0,
      tax: 12,
      salesTax: 4.2,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    },
  ];

  const handleQtyChange = (key, value) => {
    const newData = dataVal.map((item) => {
      if (item.key === key) {
        const amount = (item.mrp - item.discount) * value;
        const taxAmount = (amount * item.tax) / 100;
        const finalAmount = amount + taxAmount + item.salesTax;
        return { ...item, qty: value, amount, taxAmount, finalAmount };
      }
      return item;
    });

    setDataVal(newData);
  };

  // search product focus
  // const handleProductSelectByKeyDown=(event)=>{
  //   if (event.key === "Enter" || event.key === "Tab") {
  //     event.preventDefault();
  //     productRef.current.focus();
  //   }
  // }

  // qyt focus
  const handleDateByKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      qtyRef.current.focus();
    }
  };

  // for select the data from the option
  const handleProductSelect = (value, option) => {
    const selectedProduct = option.data;
    const newRow = {
      key: selectedProduct.key,
      product: selectedProduct.product,
      batch: selectedProduct.batch,
      expiryDate: selectedProduct.expiryDate,
      mrp: selectedProduct.mrp,
      qty: 0,
      discount: 0,
      tax: selectedProduct.tax,
      salesTax: selectedProduct.salesTax,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
    };
    setDataVal([...dataVal, newRow]);
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: "13%",
    },
    {
      title: "Batch",
      dataIndex: "batch",
      key: "branch",
      width: "8%",
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      key: "expiryDate",
      width: "8%",
    },
    {
      title: "MRP",
      dataIndex: "mrp",
      key: "mrp",
      width: "3%",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      width: "7%",
      render: (text, record) => (
        <Input
          type="number"
          value={text}
          onChange={(e) =>
            handleQtyChange(record.key, parseInt(e.target.value, 10) || 0)
          }
          onKeyDown={handleDateByKeyDown}
          ref={qtyRef}
        />
      ),
    },
    {
      title: "Dis",
      dataIndex: "discount",
      key: "discount",
      width: "4%",
    },
    {
      title: "Tax",
      dataIndex: "tax",
      key: "tax",
      width: "4%",
    },
    {
      title: "Sales Tax",
      dataIndex: "salesTax",
      key: "salesTax",
      width: "4%",
    },
    {
      title: "Amt",
      dataIndex: "amount",
      key: "amount",
      width: "7%",
    },
    {
      title: "Tax Amt",
      dataIndex: "taxAmount",
      key: "taxAmount",
      width: "7%",
    },
    {
      title: "Final Amt",
      dataIndex: "finalAmount",
      key: "finalAmount",
      width: "7%",
    },
  ];

  return (
    <div className="table">
      <Select
        style={{ width: "100%" }}
        showSearch
        placeholder="Select a product"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onSelect={handleProductSelect}
        // onKeyDown={handleProductSelectByKeyDown}
        ref={productSearchRef}
      >
        {data.map((x) => (
          <Option key={x.product} value={x.product} data={x}>
            {x.product}
          </Option>
        ))}
      </Select>

      <Table
        dataSource={dataVal}
        columns={columns}
        bordered
        pagination={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default TaxTable;
