import Container from "../../../components/shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import {BsChatRightQuote} from 'react-icons/bs'
const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [testimonials, setTestimonials] = useState();
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    fetch("https://summer-camp-sports-academie-server.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);
  return (
    <Container>
      <div className="my-10 bg-[#8f9734] h-1/2">
        <div className="w-1/2 mx-auto text-center relative top-24">
          <p className="text-[#e5b640]">Testimonials</p>
          <h2 className=" text-white  border-y-4 py-2 text-5xl font-bold">
            WHAT PEOPLE SAY
          </h2>
        </div>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
                  <div className="relative top-32">
                  <div className="flex flex-col justify-center items-center w-3/4 mx-auto text-center space-y-5 ">
                      <BsChatRightQuote className="text-white font-medium h-11 w-11"/>
                      <p className="text-white font-medium">{testimonial.message}</p>
                      <p className="font-semibold">{ testimonial.name}</p>
                <img
                  className="h-20 w-20 rounded-full object-cover"
                  src={testimonial.image}
                  alt=""
                />
              </div>
                 </div>
            </SwiperSlide>
          ))}
          <div className="p-2">
            <svg ref={progressCircle}></svg>
            <span
              className="bg-indigo-500 px-2 py-1 rounded-full font-medium text-white"
              ref={progressContent}
            ></span>
          </div>
        </Swiper>
      </div>
    </Container>
  );
};

export default Testimonials;
