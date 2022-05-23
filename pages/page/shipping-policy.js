import React, { useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import {
  Collapse,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const shippingPolicaData = [
  {
    qus: "What are the shipping charges?",
    ans: [
      "Delivery charge varies with each product. Most of product FREE delivery in India.",
      "Some items may have a shipping cost depending on the product."
    ]
  },
  {
    qus: "What is the estimated delivery time?",
    ans: [
      "The estimated time of delivery is within 7 working days for domestic orders and 15-20 working days for international orders. All orders get shipped within 4 to 5 days from the warehouse."
    ]
  },
  {
    qus: "How will the delivery be done?",
    ans: [
      "We try to process all deliveries through reputed courier companies like Bluedart, Aramex,E-come, DTDC, DHL and Fedex. In some cases, your pincode is not serviceable by these courier companies, we use Indian Speed Post for those deliveries.",
      "If there is no courier service available in your area, we will get in touch with you and try to work out a convenient alternate delivery location that is serviced by our courier partners."
    ]
  },
  {
    qus: "How are items packaged?",
    ans: [
      "All items are carefully packaged as to avoid any form of damage.",
    ]
  },
  {
    qus: "Who would be responsible for paying local taxes in countries outside of India?",
    ans: [
      "Customs duty & other international taxes etc. if applicable will have to be borne by the customer according to the laws of the land."
    ]
  }
];

const PolicyList = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card>
      <CardHeader id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            onClick={toggle}
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {faq.qus}
          </button>
        </h5>
      </CardHeader>
      <Collapse
        isOpen={isOpen}
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          {faq.ans.map(ans => <p>{ans}</p>)}
          {/* <p>{faq.ans}</p> */}
        </div>
      </Collapse>
    </Card>
  );
};

const FaqPage = () => {
  return (
    <>
      <CommonLayout parent="home" title="Shipping Policy">
        <section className="faq-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {shippingPolicaData.map((faq, i) => (
                    <PolicyList faq={faq} key={i} />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default FaqPage;
