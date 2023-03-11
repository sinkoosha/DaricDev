import {
  logo,
  textStyleOne,
  toggleMenu,
} from "@/styles/muiStyle"
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material"
import React from "react"
import { Box } from "@mui/system"

function NavBar() {
  // ***AppToolbar***
  const AppToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
    color: "#212121",
    boxShadow: "10",
    fontFamily: "Vazir",
  })
  // ***searchBar***
  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    margin: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "35%",
    padding: "4px  8px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }))
  // ***searchBar***
  const Icon = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }))

  return (
    <AppBar position="sticky">
      <AppToolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={textStyleOne}>خانه</Typography>
          <Typography sx={{ minWidth: 100 }}>
            ارتباط با ما{" "}
          </Typography>
        </Box>
      </AppToolbar>
    </AppBar>
  )
}

export default NavBar
