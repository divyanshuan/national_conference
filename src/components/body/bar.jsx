import React from "react";
import "../../styles/bar.css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper.min.css";
// import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
// import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
function Bar() {
  return (
    <div className="bar">
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p className="quote">
              Slide 1
              ihioh;obluginugfioefniubfbigiedhfbiuefbiwujksbdiugfibakfnuygfaiurfukvfaudkvwydvfadvguyyvfsad
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="quote">Slide 2</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="quote">Slide 3</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Bar;
