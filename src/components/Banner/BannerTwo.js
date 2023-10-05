import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerTwo = () => {
  return (
    <div className="banner-area space-pb--r70">
      <Container>
        <Row>
          <Col md={6}>
            <div className="single-banner">
              <img src="/images/banners/bannerOne.jpg" alt="shop_banner_img1" />
              <div className="single-banner__info">
                <h5>Super Sale</h5>
                <h3 className="title">New Collection</h3>
                <Link href="/shop/grid-left-sidebar" className="link">
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="single-banner">
              <img
                src="/images/banners/bannerSecond.jpg"
                alt="shop_banner_img1"
              />
              <div className="single-banner__info">
                <h5>New Season</h5>
                <h3 className="title">Sale 40% Off</h3>
                <Link href="/shop/grid-left-sidebar" className="link">
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerTwo;
