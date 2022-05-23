import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../../services/script";
import ServiceLayout from "../../components/common/Service/service1.js";

const TeamData = [
  {
    img: '/assets/images/team/1.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/2.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/3.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/4.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/1.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
];

const Team = ({ img, name, post }) => {
  return (
    <div>
      <div>
        <Media src={img} className="img-fluid blur-up lazyload bg-img" alt="" />
      </div>
      <h4>{name}</h4>
      <h6>{post}</h6>
    </div>
  );
};

const TeamDetailData = [
  {
    img: '/assets/images/avtar.jpg',
    name: "Krushali Goyani",
    post: "Client",
    title: 'Best Quality with Latest Designs!',
    about:
      "Happy to receive this designer Banarasi Silk Lehenga enhanced with zari woven pattern and Banaras silk dupatta. I am a regular customer of Yaana Creats online as I love the designs and materials of the products. Satisfied with purchase! There are many new Lehenga collections at Yaana Creats. I am also quite satisfied with the Quick Delivery of the product. I will surely recommend Yaana Creats for buying the Banarasi Silk Lehenga.",
  },
  {
    img: '/assets/images/2.jpg',
    name: "Diya Bodara",
    post: "Client",
    title: 'Best Shopping Experience At Yaana Creats!',
    about:
      "I love to wear Western Lehenga for the party and special occasions. I could easily find a wide collection of Lehenga at Yaana Creats at the lowest price range compared to other shops. Looks pretty the same as pictures online. The material is soft and comfortable to wear. Yaana Creats has become our favorite website for buying quality products. Very happy with their customer services. I would definitely give 5 out of 5 for Yaana Creats online for giving a better shopping experience.",
  },
  {
    img: '/assets/images/avtar.jpg',
    name: "Manjunath Palekar",
    post: "Client",
    title:'Absolutely Trustworthy!',
    about:
      "It’s a great pleasure to shop for ethnic collection at Yaana Creats! Had a shopping experience! Will recommend others! All the suites are beautiful and worth the money. All the products at Yaana Creats are absolutely trustworthy and beautiful materials. The lehenga was good with absolutely stunning materials. I loved it completely. Thank you so much for sending such beautiful products!! Quick delivery from Yaana Creats also states their dedication to the customers.",
  }
];

const TeamDetail = ({ img, name, post, about, title }) => {
  return (
    <div>
      <div className="media">
        <div className="text-center">
          <Media src={img} alt="#" />
          <h5>{name}</h5>
          <h6>{post}</h6>
        </div>
        <div className="media-body">
          <b>{title}</b>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};
const AboutUs = () => {
  return (
    <>
      <CommonLayout parent="home" title="About-us">
        {/* // <!-- about section start --> */}
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col lg="12">
                <div className="banner-section">
                  <Media
                    src={"/assets/images/about/about_us.jpg"}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Col>
              <Col sm="12">
                <br />
                <p>•	Yaana Creats Fashion was started in 2015, when founders were inspired to create something new and exclusive for every women. Yaana Creats Fashion was born out of desire for women’s collection that looked at home in the city but was built to withstand the outdoors (Ethnic wear, party wear, Bridal Collection, Indowestern, Festive Collection). Today Yaana Creats Fashion is a completely lifestyle collection for  design focused or casual wear women.</p>
                <br />
                <p>•	Our three pillars are AWARENESS, TRUST and LOYALITY. These three pillars are in our thinking and philosophy also. We successfully brought big curves on our customer’s faces we are catering and striving hard to bring many more. This is possible only when we strongly believe in word of mouth publicity and feedbacks we get from our customers. We follow our customer feedbacks seriously and bring changes and alterations wherever as required. This way we have bunch of satisfied customers with us. Customer satisfaction is atmost priority for us, so we LISTEN & LISTEN to them. So that we can create a big difference in minds of customers.</p>
                <br />
                <p>•	Our design philosophy is to create modern, classic pieces that trends and seasons with simplicity. Our Products are created for an urban environment, where we live and spend most of our time, but much of it is constructed with high dedication and keeping customer requirements in mind with value for money philosophy.</p>
                <br />
                <p>•	We accept the challenges that can lead at any time. Our inspiration is the faith of our customer within us and our inspiration is their response that helps us to motivate our services. With a great fan following in worldwide, Yaana Creats is extremely focused on Indian ethnic wear and wants to dominate this space in the coming few years.</p>
                <br />
                <p>•	Every time our new collection gives reflection of customer satisfaction, Trust and Loyalty that we have achieved since the inception. Our inspiration is faith of our customers and strong philosophy we believe in. Yaana Creats Fashion is working hard with our dedicated team to bring smiles on every women face as she has right to STAY BEAUTIFUL ALWAYS</p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <!--Testimonial start--> */}
        <h2 className="container">CLIENTS TESTIMONIALS</h2>
        <section className="testimonial small-section">
          <Container>
            <Row>
              <Col sm="12">
                <Slider
                  {...Slider2}
                  className="slide-2 testimonial-slider no-arrow"
                >
                  {TeamDetailData.map((data, i) => {
                    return (
                      <TeamDetail
                        key={i}
                        img={data.img}
                        name={data.name}
                        post={data.post}
                        title={data.title}
                        about={data.about}
                      />
                    );
                  })}
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <!--Testimonial ends--> */}

        <div className="section-b-space">
          <ServiceLayout
            sectionClass={"service border-section small-section"}
          />
        </div>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
