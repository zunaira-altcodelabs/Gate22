import { Fragment, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { EffectFade, Thumbs, FreeMode } from 'swiper';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../swiper";

const ImageGalleryLeftThumb = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);

  const slides = product?.image.map((img, i) => ({
    src: img,
    key: i,
  }));

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs, FreeMode],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 5,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
    breakpoints: {
      320: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      640: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      768: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      992: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      1200: {
        slidesPerView: 5,
        direction: "vertical"
      }
    }
  };

  return (
    <Fragment>
      <Row className="image-gallery-side-thumb-wrapper">
        <Col xl={10} className="order-1 order-xl-2">
          <div className="product-large-image-wrapper">
            {!!product.image.length && (
              <Swiper options={gallerySwiperParams}>
                  {product.image.map((image, i) => (
                    <SwiperSlide key={i}>
                      <button className="enlarge-icon" onClick={() => setIndex(key)}>
                        <i className="icon-magnifier-add" />
                      </button>
                      <div className="single-image">
                        <img src={image} className="img-fluid" alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            )}
            <Lightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </div>
        </Col>
        <Col xl={2} className="order-2 order-xl-1">
          <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb">
            {!!product.image.length && (
              <Swiper options={thumbnailSwiperParams}>
                {product.image.map((image, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-image">
                      <img src={image} className="img-fluid" alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ImageGalleryLeftThumb;
