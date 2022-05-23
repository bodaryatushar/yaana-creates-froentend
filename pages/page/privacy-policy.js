import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../../services/script";
import ServiceLayout from "../../components/common/Service/service1.js";


const PrivacyPolicy = () => {
  return (
    <>
      <CommonLayout parent="home" title="Privacy Policy">
        {/* // <!-- about section start --> */}
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <br />
                <p>•	Delivery charge varies with each product. Most of product FREE delivery in India. Some items may have a shipping cost depending on the product.</p>
                <br />
                <p>•	The estimated time of delivery is within 7 working days for domestic orders and 15-20 working days for international orders. All orders get shipped within 4 to 5 days from the our warehouse.</p>
                <br />
                <p>•	We try to process all deliveries through reputed courier companies like Bluedart, Aramex, E-come, DTDC, DHL and Fedex. In some cases, your pincode is not serviceable by these courier companies, we use Indian Speed Post for those deliveries.</p>
                <br />
                <p>•	All items are carefully packaged as to avoid any form of damage.</p>
                <br />
                <p>•	Yaana Creats offers you multiple payment methods. Whatever your online mode of payment, you can trust assured that Yaana Creats trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.</p>
                <br />
                <p>•	You may use Internet Banking, Debit Card, Credit Card and Cash on Delivery to make your purchase. We also accept payments made using Visa, MasterCard, American Express and Any Club credit/debit cards.</p>
                <br />
                <p>•	You can make credit card payments through the Yaana Creats mobile site. Yaana Creats uses 256-bit encryption technology to protect your card information while securely transmitting it to the secure and trusted payment gateways managed by leading banks.</p>
                <br />
                <p>•	All Credit/Debit card details remain confidential and private. Yaana Creats and our trusted payment gateways use SSL encryption technology to protect your card information.</p>
                <br />
                <p>•	Yaana Creats does not collect or store your account information at all. Your transaction is authorized at multiple points, first by EBS/CCavenue and subsequently by Visa/MasterCard/Amex secure directly without any information passing through us.</p>
                <br />
              </Col>
            </Row>
          </Container>
        </section>

       

        <div className="section-b-space">
          <ServiceLayout
            sectionClass={"service border-section small-section"}
          />
        </div>
      </CommonLayout>
    </>
  );
};

export default PrivacyPolicy;
