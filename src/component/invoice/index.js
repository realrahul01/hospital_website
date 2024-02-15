import React from "react";
import { Card, Row, Col, Divider } from "antd";

const InvoiceCard = () => {
  return (
    <Card title="Invoice Information">
      <Row gutter={[12, 12]}>
        {/* Invoice Information */}
        <Col span={8} className="invoice_item">
          <div>Gross</div>
          <div>Cash Discount</div>
          <div>Other Adjust</div>
          <div>Bill Amount</div>
          <div>Total Tax</div>
          <div>CGST</div>
          <div>SGST</div>
          <div>Discount</div>
          <div>Round Off</div>
          <div>NET</div>
          <div>Paid</div>
          <div>Due</div>
        </Col>
        <Col span={8} className="invoice_Data">
          {/* Placeholder values - Replace with actual values */}
          <div>1000.00</div>
          <div>
            {" "}
            <input type="number" />
          </div>
          <div>
            {" "}
            <input type="number" />
          </div>
          <div>960.00</div>
          <div>50.00</div>
          <div>25.00</div>
          <div>25.00</div>
          <div>-10.00</div>
          <div>0.00</div>
          <div>950.00</div>
          <div>500.00</div>
          <div>450.00</div>
        </Col>
      </Row>
    </Card>
  );
};

export default InvoiceCard;
