import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./HeaderStyle/searchStyle";
import { SearchIconWrapper } from "./HeaderStyle/SearchIconWrapper";
import { StyledInputBase } from "./HeaderStyle/StyledInputBase";
import { useContext } from "react";
import DataStore from "../DataStore";

export default function SearchAppBar() {
  const { city, setCity, cityInfos, setCityInfos } = useContext(DataStore);

  const getCityFromSearch = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const getCityInfos = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"a7ccf39f58624360e151dce17c818ef3"}`
    )
      .then((data) => data.json())
      .then((data) => setCityInfos(data));
  };

  useEffect(() => {
    getCityInfos();
  }, [city]);

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            WETTER APP WITH MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onClick={getCityFromSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
