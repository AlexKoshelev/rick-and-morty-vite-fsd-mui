import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LeftMenu from "../left-menu/left-menu";
import { useAuth } from "../../providers/auth-provider";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const toggleDrawer = () => {
    setShow((p) => !p);
  };

  const auth = useAuth();
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#7b6782" }}>
        <Toolbar>
          <IconButton onClick={toggleDrawer} edge="start">
            <MenuIcon color="secondary"></MenuIcon>
          </IconButton>
          <Typography sx={{ flexGrow: "1" }} variant="h6" component={"span"}>
            Rick and Morty
          </Typography>

          <NavLink to={"login"}>
            <Button color="secondary">
              {auth.user.email ? auth.user.email : "Войти"}
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <LeftMenu show={show} closeMenu={() => setShow(false)} />
    </>
    /*   <nav>
      <ul>
        <li>
          <NavLink to={""}>Главная</NavLink>
        </li>
        <li>
          <NavLink to={"heroes"}>Герои</NavLink>
        </li>
        <li>
          <NavLink to={"locations"}>Локации</NavLink>
        </li>
        <li>
          <NavLink to={"episodes"}>Эпизоды</NavLink>
        </li>
      </ul>
      <ul>
        {" "}
        <li>
          <NavLink to={"login"}>
            {auth.user.email ? auth.user.email : "Войти"}
          </NavLink>
        </li>
      </ul>
    </nav> */
  );
};
export default NavBar;
