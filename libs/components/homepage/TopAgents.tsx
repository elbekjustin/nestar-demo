import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";
import TopAgentCard from "./TopAgentCard";

// const PopularProperties = ({ initialInput, ...props }: any) => {
//   const [popularProperties, setPopularProperties] = useState<number[]>(initialInput);

  const TopAgents = () => {
  const [topAgents, TopAgents] = useState<number[]>([1, 2, 3, 4, 5]);
  return (
    <Stack className="top-agents">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Top Agents</span>
            <p>Our Top Agents always ready to serve you</p>
          </Box>
          <Box className="right">
            <div className="more-box">
              <Link href={"/agents"}>
                <span>See All Agents</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          <Swiper
            className="top-agents-swiper"
            slidesPerView={"auto"}
            spaceBetween={25}
            navigation={{
              nextEl: ".swiper-popular-next",
              prevEl: ".swiper-popular-prev",
            }}
            pagination={{
              el: ".swiper-popular-pagination",
            }}
          >
            {topAgents.map((property, index) => {
              return (
                <SwiperSlide key={index} className="top-agents-slide">
                  <TopAgentCard />
                </SwiperSlide>
              );
            })} 
          </Swiper>
        </Stack>
      </Stack>
    </Stack>
  );
};

// PopularProperties.defaultProps = {
//   initialInput: [1, 2, 3, 4, 5, 6, 7],
// };

export default TopAgents;
