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

const faqData = [
  {
    qus: "What is Yaana Creats return policy?",
    ans: [
      "Our 100% buyer protection program allows for easy returns Only for products not as per description/photo on the website and products which you received in damaged/defective/broken condition.",
      "All products must be returned in their original condition along with the bills and labels."
    ]
  },
  {
    qus: "How to raise dispute for an order?",
    ans: [
      "You can raise a dispute within 7 days of delivery, in either of by sending an email to support@yaanacreats.com with images of broken/defective/damaged products within 7 days of delivery, please mention your order number in the email and sign into your Yaana Creats account if you are a registered customer (Easy method).",
      "Product After 7 days Of Delivery Return Can not accepted."
    ]
  },
  {
    qus: "When will i be refunded?",
    ans: [
      "Reverse pickup orders We will initiate refund once the item is picked up by our courier partner.",
      "Self ship orders We will refund when your item back from warehouse. The refund amount wii be credited within 3 to 5 working days in your Yaana Creats Acoount."
    ]
  },
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
      "We try to process all deliveries through reputed courier companies like Bluedart, Aramex,E-come, DTDC, DHL and Fedex. In some cases, your pincode is not serviceable by these courier companies, we use Indian Speed Post for those deliveries."
    ]
  },
  {
    qus: "How are items packaged?",
    ans: [
      "All items are carefully packaged as to avoid any form of damage."
    ]
  },
  {
    qus: "Who would be responsible for paying local taxes in countries outside of India?",
    ans: [
      "Customs duty & other international taxes etc. if applicable will have to be borne by the customer according to the laws of the land."
    ]
  },
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
      <CommonLayout parent="home" title="faq">
        <section className="faq-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {faqData.map((faq, i) => (
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
