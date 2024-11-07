import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import axios from "axios";

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);

  // Api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        setCarousel(response.data);
      });
  }, []);

  return (
    <section className="mt-14">
      <Swiper spaceBetween={50}>
        {carousel.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="wrapper">
                <div className="image flex items-center justify-center p-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={"150px"}
                    className="shadow-lg rounded-xl p-3"
                  />
                </div>
                <div className="title p-3 font-bold">
                  <h1>{item.title}</h1>
                  <p className="font-extralight line-clamp-2">{item.description}</p>
                  <h1 className="text-[#F7411B] text-center">${item.price}</h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
