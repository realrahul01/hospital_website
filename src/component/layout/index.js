import React, { useState, useRef } from "react";
import { Row, Col } from "antd";
import CustomerDetails from "../customerdetils";
import { Collapse } from "antd";
import TaxTable from "../taxtable";
import InvoiceCard from "../invoice";

const { Panel } = Collapse;

const AntDGridComponent = () => {
  // const [Acc, setAcc] = useState(true);
  const [activeKey, setActiveKey] = useState(["1"]);
  const productSearchRef = useRef(null);

  const handleCollapseChange = (keys) => {
    setActiveKey(keys);
    if (keys.length === 0) {
      // If the collapse is closed
      productSearchRef.current.focus(); // Set focus on the search product input field
    }
  };

  return (
    <div style={{ padding: "8px" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Collapse
            accordion
            activeKey={activeKey}
            onChange={handleCollapseChange}
            style={{ background: "#FFFF" }}
          >
            <Panel header="Customer Details" key="1">
              <CustomerDetails setAcc={() => setActiveKey([])} productSearchRef={productSearchRef}/>
            </Panel>
          </Collapse>
          <div style={{ marginTop: "15px" }}>
            <TaxTable productSearchRef={productSearchRef}/>
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div style={{ background: "#FFFF", padding: "8px" }}>
            <InvoiceCard />
          </div>
        </Col>
      </Row> 
    </div>
  );
};

export default AntDGridComponent;
