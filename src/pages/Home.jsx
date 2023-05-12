import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner from "../assets/banner.jpeg";
import product from "../assets/product.jpeg";
import sale1 from "../assets/sale1.jpg";
import sale2 from "../assets/sale2.jpg";
import sale3 from "../assets/sale3.jpg";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col>
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={banner} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner} alt="" />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <h3>Featured Categories</h3>
        <Row className="my-4">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img src={product} />
              Property 10,000+ listings
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img src={product} />
              Property 10,000+ listings
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img src={product} />
              Property 10,000+ listings
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img src={product} />
              Property 10,000+ listings
            </Card>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={sale1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sale3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sale3} alt="" />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
