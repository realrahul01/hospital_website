import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, Row, Col } from "antd";
import moment from "moment";

const { Option } = Select;

const CustomerDetails = ({ setAcc,productSearchRef }) => {
  const [form] = Form.useForm();
  const [editable, setEditable] = useState(true);
  const invoiceRef = useRef(null);
  const referByRef = useRef(null);
  const dateRef = useRef(null);
  const customerRef = useRef(null);

  const handleNameSelect = (value, option) => {
    // Fetch customer details from the provided data based on the selected name
    const customerDetails = {
      gst: option.data.gstNumber,
      address: option.data.address,
      invoiceNo: option.data.invoiceNo,
    };

    form.setFieldsValue(customerDetails);
    invoiceRef.current.focus();
  };

  const handleDateChange = (date, dateString) => {
    // Handle date change if needed
    console.log(dateString);
    setAcc();
  };

  // refer focus
  const handleInvoiceKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      referByRef.current.focus();
    }
  };

  // date focus
  const handleReferByKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      dateRef.current.focus();
    }
  };

  const saveHandler = () => {
    setAcc();
    setEditable(false);
    productSearchRef.current.focus();
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const clientData = [
    {
      clientName: "Healthy Life Pharmacy",
      gstNumber: "33AABCC1234567",
      address: "Shop No. 12, Main Road, XYZ City- 123456",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "Med Plus Retail",
      gstNumber: "27DEFGH4567890",
      address: "Plot No. 56, ABC Colony, PQR Town- 456789",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "Apollo Pharmacy",
      gstNumber: "12HIJKL7890123",
      address:
        "1st Floor, Building No. 34, New Market Street, MNO City- 789012",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "Wellness Forever",
      gstNumber: "23MNOPQ0123456",
      address: "Shop No. 78, ABC Mall, DEF Road, XYZ Town- 123456",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "MediCare Plus",
      gstNumber: "34QRSTU4567890",
      address: "15th Floor, Tower B, Business Park, PQR City- 456789",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "Health First",
      gstNumber: "15VWXYZ7890123",
      address: "Ground Floor, Block No. 21, Main Bazar, MNO Town- 789012",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "Life Care Pharmacy",
      gstNumber: "26ABCD1234567",
      address: "Shop No. 34, DEF Market, XYZ Road, PQR City- 123456",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "WellBeing Solutions",
      gstNumber: "37EFGH4567890",
      address: "Unit No. 12, Tower A, Commercial Complex, MNO Town- 456789",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "MedStore",
      gstNumber: "18IJKL7890123",
      address: "Building No. 7, Opposite Clock Tower, XYZ City- 789012",
      invoiceNo: "HSTRBF8341",
    },
    {
      clientName: "Healthy U",
      gstNumber: "29MNOPQ0123456",
      address: "Shop No. 5, ABC Square, DEF Market, PQR Town- 123456",
      invoiceNo: "HSTRBF8341",
    },
  ];

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ date: moment() }}
      // onFinish={handleSave}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please select a name" }]}
            ref={customerRef}
          >
            <Select
              showSearch
              placeholder="Select a customer"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onSelect={handleNameSelect}
              autoFocus
              // disabled={!editable}
            >
              {clientData.map((client) => (
                <Option
                  key={client.clientName}
                  value={client.clientName}
                  data={client}
                >
                  {client.clientName}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="GST"
            name="gst"
            initialValue="GST Number from Database"
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Invoice No." name="invoiceNo">
            <Input
              disabled={!editable}
              ref={invoiceRef}
              onKeyDown={handleInvoiceKeyDown}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Address" name="address">
            <Input disabled={!editable} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Refer By"
            name="referBy"
            rules={[{ required: true, message: "Please select a doctor" }]}
          >
            <Select
              showSearch
              placeholder="Select a doctor"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              disabled={!editable}
              ref={referByRef}
              onKeyDown={handleReferByKeyDown}
            >
              <Option value="doctor1">Doctor 1</Option>
              <Option value="doctor2">Doctor 2</Option>
              <Option value="doctor3">Doctor 3</Option>
              <Option value="doctor4">Doctor 4</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YYYY"
              placeholder="Select a date"
              onChange={(date, dateString) =>
                handleDateChange(date, dateString)
              }
              disabled={!editable}
              ref={dateRef}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        {editable ? (
          <Button type="primary" onClick={saveHandler} htmlType="submit">
            Save
          </Button>
        ) : (
          <Button type="primary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default CustomerDetails;
