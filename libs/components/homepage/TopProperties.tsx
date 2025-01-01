import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendPropertyCard from "./TrendPropertyCard";
import TopPropertyCard from "./TopPropertyCard";

const TopProperties = () => {
  const [topProperties, setTopProperties] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Stack className={"top-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Properties</span>
            <p>Top is based on likes</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}>
              <WestIcon className={"swiper-top-prev"} />
              <div className={"swiper-top-pagination"}></div>
              <EastIcon className={"swiper-top-next"} />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {topProperties.length === 0 ? (
            <Box className={"empty-list"}>Top Empty</Box>
          ) : (
            <Swiper
              className={"top-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{
                el: ".swiper-top-pagination",
              }}
            >
              {topProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"top-property-slide"}>
                    <TopPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopProperties;
