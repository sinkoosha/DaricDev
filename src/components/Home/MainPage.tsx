import React from "react";
import {Box, Stack} from "@mui/system";
import FeedBar from "../Layout/FeedBar/FeedBar";

import NavBar from "../Layout/NavBar/NavBar";
import RightBar from "../Layout/RightBar/RightBar";
import SideBar from "../Layout/SideBar/SideBar";
import {Container} from "@mui/material";

function MainPage() {
  return (
    <Box>
      <NavBar />
      <Container maxWidth="lg" sx={{marginY: "12px"}}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
          fontFamily="Vazir"
        >
          <RightBar />
          <FeedBar />
        </Stack>
      </Container>
    </Box>
  );
}

export default MainPage;
