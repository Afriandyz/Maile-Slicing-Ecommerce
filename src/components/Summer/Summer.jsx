import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

const Summer = () => {
  const [celebrate, setCelebrate] = useState([]);

  // Api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((response) => {
        setCelebrate(response.data);
      });
  }, []);

  return (
    <section className="mt-5 p-2">
      <div className="title font-extrabold">
        <h1 className="text-2xl">Celebrate This Summer</h1>
      </div>
      <Swiper spaceBetween={50}>
        {celebrate.map((item, index) => {
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
                  <p className="font-extralight line-clamp-2">
                    {item.description}
                  </p>
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

export default Summer;
