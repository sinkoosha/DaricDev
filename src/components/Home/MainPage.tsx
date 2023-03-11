import { Box, Stack } from "@mui/system"
import React from "react"
import FeedBar from "../Layout/FeedBar/FeedBar"

import NavBar from "../Layout/NavBar/NavBar"
import RightBar from "../Layout/RightBar/RightBar"
import SideBar from "../Layout/SideBar/SideBar"

function MainPage() {
  return (
    <div>
      <Box>
        <NavBar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
          fontFamily="Vazir"
        >
          <RightBar />
          <FeedBar />
        </Stack>
      </Box>
    </div>
  )
}

export default MainPage
