import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import ServiceLayout from "../../components/common/Service/service1.js";


const TermsCondition = () => {
  return (
    <>
      <CommonLayout parent="home" title="Return Policy">
        {/* // <!-- about section start --> */}
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div class="return-rule">

                  <p>Yaana Creats committed to maintaining a long lasting relationship with our customers by providing them good return policy.</p>
                  <br/>
                  <p>We would like to inform you that we are selling genuine & quality product. So, If Customer Received item in Damaged Condition / Manufacturing Defect / Wrong Item Delivered.</p>
                  <br/>

                  <p>In that condition we will be take return our product within 7 Days.</p>
                  <br/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <div class="return-note">
                  <p><span>Note-</span> *Our Goods are Packed under the Supervision of the CCTV. If you have any problem or complain related to Packaging. Then we are able to provide you CCTV cd’s*.</p>
                  <br/>
                  <p>In case a customer needs to return a product which is not satisfactory, a customer just needs to give us a call Or Send what’s-app Massage on our customer care helpline <a href="tel:+91 90991 32531">+91 90991 32531</a>, between 10:00 AM to 6:00 PM, 6 days a week or drop us a mail on <a href="mailto:yaanacreats@gmail.com">yaanacreats@gmail.com</a></p>
                  <br/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <div class="rule-wrap">
                  <ul style={{marginLeft: '10px'}}>

                    <li>

                      <p>•	Return request regarding strains or damage need to be filed within 48 hours of product delivery.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	Customers should make sure that the products that are returned, should reach Yaana Creats office within 6-8 days from the date the return request is accepted by Yaana Creats.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	Customers also need to send an image of the product & a digital copy of the invoice of the product while filing complains.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	After returning of the product either you can take another product or you will get credit note for future shopping.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	Discount will not be applicable, In case of replacement of the discount based product.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	We do not accept return or refund, In case of product is purchased from the offer page.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	Customer will be able to get refund only in case of shopping amount is above 1000 Rs.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	A customer can cancel the order only within 24 hours of placing the order & not beyond 24 hours.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	In case customer need to return a product which is not satisfactory, a customer just need to give us a call Or Send what’s-up Massage on our customer care  helpline  between 10:00 AM to 6:00 PM, 6 days a week or drop us a mail.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	In case of cancellation, the refund might take 2-3 working days to reflect in customer's account from the date of cancellation.</p>
                      <br />
                    </li>

                    <li>

                      <p>•	The apparel description on the website contains details and product specifications which are approximate values, closest to reality. While we strive to be accurate in showcasing colors there still may be minor variations because of the light and settings during photography and also the color settings and properties of various monitors. Other details like weight, work details and size may vary slightly as well. Hence the customer should keep in mind the slight variation when placing the order online.</p>
                      <br />
                    </li>

                  </ul>
                </div>
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
