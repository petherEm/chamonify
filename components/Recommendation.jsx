"use client";

// swiper react components

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// components
import { Button } from "./ui/button";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const recommendationData = [
  {
    name: "Swissotel Hotel",
    image: "/recommendation/hote-4.jpg",
    location: "Chamonix, Haute-Savoie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos vel sapiente autem eveniet officia delectus architecto adipisci enim est? Id tenetur veniam impedit excepturi est sunt ex delectus culpa.",
    price: 400,
    testmionial: {
      message:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      personName: "Ian Marcus",
    },
  },
  {
    name: "Ski Oasis",
    image: "/recommendation/hotel-5.jpg",
    location: "St Gervais, Haute-Savoie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos vel sapiente autem eveniet officia delectus architecto adipisci enim est? Id tenetur veniam impedit excepturi est sunt ex delectus culpa.",
    price: 400,
    testmionial: {
      message:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      personName: "Robert Rene",
    },
  },
  {
    name: "Peaks Lodge",
    image: "/recommendation/hotel-6.jpg",
    location: "Megeve, Haute-Savoie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos vel sapiente autem eveniet officia delectus architecto adipisci enim est? Id tenetur veniam impedit excepturi est sunt ex delectus culpa.",
    price: 400,
    testmionial: {
      message:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      personName: "Emily Louise",
    },
  },
];

const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                  <h2 className="h2 mb-4">{hotel.name}</h2>
                  <p className="text-soft_green text-sm mb-6">
                    {hotel.location}
                  </p>
                  <p className="mb-[60px]">{hotel.desc}</p>
                  <div className="flex items-center gap-x-[50px]">
                    <Button variant="accent" className="px-[44px]">
                      Book Now!
                    </Button>
                    <div className="text-black">
                      <span className="font-bold text-2xl">{hotel.price}</span>
                      <span className="text-sm"> EUR/Night</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]">
                  <div>
                    <Image
                      src={hotel.image}
                      width={905}
                      height={5}
                      quality={100}
                      className="xl:rounded-tl-[20px] xl:rounded-bl-[20px]"
                    />
                    <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                      <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                        {hotel.testmionial.message}
                      </p>
                      <p className="text-xl font-bold">
                        {hotel.testmionial.pesonName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        alt=""
        className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </motion.section>
  );
};

export default Recommendation;
