import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import React from "react"
import {
  rightBarChipsStyle,
  rightBarStyle,
} from "@/styles/muiStyle"

function RightBar() {
  return (
    <Box flex={2} p={2} sx={rightBarStyle}>
      <Typography variant="h3">مقالات</Typography>
      <Box sx={rightBarChipsStyle}>
        <Chip label="اموزش نکست SSR" variant="outlined" />
        <Chip label="اموزش جاوا اسکریپت" variant="outlined" />
        <Chip label="SSR در نکست " variant="outlined" />
        <Chip label="اموزش جاوا اسکریپت" variant="outlined" />
        <Chip label="اموزش نکست SSR" variant="outlined" />
        <Chip label="اموزش جاوا اسکریپت" variant="outlined" />
        <Chip label="SSR در نکست " variant="outlined" />
        <Chip label="اموزش جاوا اسکریپت" variant="outlined" />
      </Box>
    </Box>
  )
}

export default RightBar
