import Link from "next/link";
import React from "react";
import { Col, Container, Media, Row } from "reactstrap";

const Data = [
  {
    img: "/assets/images/fashion/1.jpg",
    about: "women",
    offer: "save 30%",
    link: "#",
    class: " p-left text-left",
  },
  {
    img: "/assets/images/fashion/2.jpg",
    about: "watch",
    offer: "save 60%",
    link: "#",
    class: " p-left text-left",
  },
  {
    img: "/assets/images/fashion/3.jpg",
    about: "sandle",
    offer: "save 30%",
    link: "#",
    class: " p-left text-left",
  },
  {
    img: "/assets/images/fashion/4.jpg",
    about: "kids",
    offer: "save 60%",
    link: "#",
    class: " p-left text-left",
  },
];

const MasterCollectionBanner = ({ img, about, offer, link, classes }) => {
  return (
    <Col md="6">
      <Link href={link}>
        <a>
          <div className={`collection-banner ${classes}`}>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
            <div className="contain-banner">
              <div>
                <h4>{offer}</h4>
                <h2>{about}</h2>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Col>
  );
};

const Collection = ({ first }) => {
  return (
    <section className="banner-padding banner-furniture ratio2_1">
      <Container fluid={true}>
        <Row className="partition3">
          {first
            ? Data.slice(0, 2).map((data, i) => {
                return (
                  <MasterCollectionBanner
                    key={i}
                    img={data.img}
                    link={data.link}
                    about={data.about}
                    offer={data.offer}
                    classes={data.class}
                  />
                );
              })
            : Data.slice(2, 4).map((data, i) => {
                return (
                  <MasterCollectionBanner
                    key={i}
                    img={data.img}
                    link={data.link}
                    about={data.about}
                    offer={data.offer}
                    classes={data.class}
                  />
                );
              })}
        </Row>
      </Container>
    </section>
  );
};

export default Collection;
