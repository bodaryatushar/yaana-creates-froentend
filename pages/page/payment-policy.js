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

const paymentPolicyData = [
  {
    qus: "How do i pay for a Yaana Creats purchase?",
    ans: [
      "Yaana Creats offers you multiple payment methods. Whatever your online mode of payment, you can trust assured that Yaana Creats trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.",
      "You may use Internet Banking, Debit Card, Credit Card and Cash on Delivery to make your purchase. We also accept payments made using Visa, MasterCard, American Express and Any Club credit/debit cards."
    ]
  },
  {
    qus: "Can i make a credit/debit card or Internet Banking payment through my mobile?",
    ans: [
      "Yes, you can make credit card payments through the Yaana Creats mobile site. Yaana Creats uses 256-bit encryption technology to protect your card information while securely transmitting it to the secure and trusted payment gateways managed by leading banks."
    ]
  },
  {
    qus: "Does Craftsvilla store my credit card information?",
    ans: [
      "No, Yaana Creats does not collect or store your account information at all. Your transaction is authorized at multiple points, first by EBS/CCavenue and subsequently by Visa/MasterCard/Amex secure directly without any information passing through us."
    ]
  }
];

const FaqList = ({ faq }) => {
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
      <CommonLayout parent="home" title="Payment Policy">
        <section className="faq-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {paymentPolicyData.map((faq, i) => (
                    <FaqList faq={faq} key={i} />
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
