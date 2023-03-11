import { Box } from "@mui/material"
import React from "react"

function SideBar() {
  return (
    <Box
      bgcolor="blueviolet"
      flex="1"
      p={2}
      sx={{ display: { xs: "none", sm: "grid" } }}
    >
      SideBar
    </Box>
  )
}

export default SideBar
