import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Media, Form, Label, Input } from "reactstrap";

const Data = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "+91 909 - 913 - 2531",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "F80-81, Grounf Floor",
    desc2: "Avadh Textile Market",
    desc3: "Opp. New Bombay Market",
    desc4: "Umarawada, Surat-395010",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "yaanacreats@gmail.com",
  }
];

const ContactDetail = ({ img, title, desc1, desc2, desc3 = '', desc4 = '' }) => {
  return (
    <li>
      <div className="contact-icon">
        <i className={`fa ${img}`} aria-hidden="true"></i>
        <h6>{title}</h6>
      </div>
      <div className="media-body">
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
        <p>{desc4}</p>
      </div>
    </li>
  );
};
const Contact = () => {
  return (
    <CommonLayout parent="home" title="Contact">
      <section className="contact-page section-b-space">
        <Container>
          <Row className="section-b-space">
            <Col lg="7" className="map">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9642625581514!2d72.84807511503156!3d21.193578587506842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f38245393a3%3A0xaeb7de0fa4f5995f!2sYaana%20Creats!5e0!3m2!1sen!2sde!4v1655119842668!5m2!1sen!2sde"
                allowFullScreen
                ></iframe>
            </Col>
            <Col lg="5">
              <div className="contact-right">
                <ul>
                  {Data.map((data, i) => {
                    return (
                      <ContactDetail
                        key={i}
                        img={data.img}
                        title={data.title}
                        desc1={data.desc1}
                        desc2={data.desc2}
                        desc3={data.desc3}
                        desc4={data.desc4}
                      />
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Form className="theme-form">
                <Row>
                  <Col md="6">
                    <Label for="name">First Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your name"
                      required=""
                    />
                  </Col>
                  <Col md="6">
                    <Label for="email">Last Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="last-name"
                      placeholder="Email"
                      required=""
                    />
                  </Col>
                  <Col md="6">
                    <Label for="review">Phone number</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="review"
                      placeholder="Enter your number"
                      required=""
                    />
                  </Col>
                  <Col md="6">
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                    />
                  </Col>
                  <Col md="12">
                    <Label for="review">Write Your Message</Label>
                    <textarea
                      className="form-control"
                      placeholder="Write Your Message"
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </Col>
                  <Col md="12">
                    <button className="btn btn-solid" type="submit">
                      Send Your Message
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Contact;
