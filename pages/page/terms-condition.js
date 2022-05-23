import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../../services/script";
import ServiceLayout from "../../components/common/Service/service1.js";


const TermsCondition = () => {
  return (
    <>
      <CommonLayout parent="home" title="Terms and Condition">
        {/* // <!-- about section start --> */}
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <br />
                <p>You have accepted the term and condition mentioned below by using the service of this site :</p>
                <br />
                <p>•	All products/services and information displayed on Yaana Creats constitute an "invitation to offer". Your order for purchase constitutes your "offer" which shall be subject to the terms and conditions as listed below. Yaana Creats reserves the right to accept or reject your offer. If you have supplied us with your valid email address, we will notify you by email as soon as possible to confirm receipt of your order and email you again to confirm details and therefore process the order. Our acceptance of your order will take place upon dispatch of the product(s) ordered. No act or omission of Yaana Creats prior to the actual dispatch of the product(s) ordered will constitute acceptance of your offer.</p>
                <br />
                <p>•	Though even Yaana Creats shall try to deliver the products as per the details/specifications given on the order form by the user, it reserves (in it's absolute discretion) a right to deliver a similar/alternate product for reasons beyond it's control and any such action shall not be deemed as bad-delivery.</p>
                <br />
                <p>•	Every order is delivered as per specifications of the product mentioned online. Even though Yaana Creats shall try to meet the date and time of delivery schedule as given by the user in the order form, any delayed/ early delivery for whatever reason shall not entitle the user for any damages or compensation from Yaana Creats Shall take due caution at the time of delivery to deliver the product to the correct person at the address on the order form, but disclaims any responsibility for claims, damages, and/or compensation.</p>
                <br />
                <p>•	If the user has any question, doubts or confusion in regard to any of the terms &amp; conditions set out herein he should seek clarifications from us through email and should wait for a written clarification before using the service.</p>
                <br />
                <p>•	All prices are inclusive of cartage, service charges, packaging and all other costs involved with the process of ordering and delivering. All the taxes and customs if applied are not included in the invoice value.</p>
                <br />
                <p>•	Yaana Creats may at any time modify the Terms &amp; Conditions of Use of the site without any prior notification to you. You can access the latest version of the User Agreement at any given time on Yaana Creats You should regularly review the Terms &amp; Conditions on Yaana Creats In the event the modified Terms &amp; Conditions is not acceptable to you, you should discontinue using the service. However, if you continue to use the service you shall be deemed to have agreed to accept and abide by the modified Terms &amp; Conditions of Use of this site.</p>
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

export default TermsCondition;
