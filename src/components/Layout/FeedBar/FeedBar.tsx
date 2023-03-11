import { Box } from "@mui/material"
import React from "react"
import Slider from "../Slider/Slider"

function FeedBar() {
  return (
    <Box
      flex={8}
      display="block"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <>
        <Slider />
      </>
    </Box>
  )
}

export default FeedBar
