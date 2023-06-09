import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Container from "../../../components/shared/Container";
import Loader from "../../../components/shared/Loader";

const Banner = () => {
  const [loading, setLoading] = useState(false);
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/slider")
      .then((res) => res.json())
      .then((data) => {
        setSliders(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider._id}>
              <div className="relative w-full ">
                <img
                  className="w-full h-screen object-cover"
                  src={slider.picture}
                  alt=""
                />
                <div className="absolute h-full top-0 w-full flex flex-col space-y-3  justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ">
                  <h2 className="text-gray-300 md:text-6xl text-2xl font-semibold">
                    {slider.name}
                  </h2>
                  <p className="text-gray-200 text-center md:px-40">
                    {slider.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Banner;
