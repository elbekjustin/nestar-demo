import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentCard = () => {
  return (
    <Stack className="top-agents-box">
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/banner/agent.jpg")`,
        }}
      >
      </Box>
      <Box className={"info"}>
        <strong className={"title"}>Dong Seok</strong>
        <p className="desc">AGENT</p>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
