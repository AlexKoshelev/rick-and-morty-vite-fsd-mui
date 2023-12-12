import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import Person4Icon from "@mui/icons-material/Person4";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
interface PropsDrawer {
  show: boolean;
  closeMenu: () => void;
}
const LeftMenu: React.FC<PropsDrawer> = (props) => {
  const { show, closeMenu } = props;

  return (
    <Drawer
      anchor="left"
      open={show}
      onClose={closeMenu}
      sx={{
        backgroundColor: "#7b678254",
        width: "100%",
        height: "100%",
        "& .MuiDrawer-paper": {
          backgroundColor: "#9e66b3",
        },
      }}
    >
      <List
        sx={{
          width: "100%",
          minWidth: 300,
          maxWidth: 360,
          backgroundColor: "#7b678254",
          ml: 3,
          mt: 3,
        }}
      >
        <ListItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
          <ListItemAvatar>
            <Avatar>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary="Закрыть" />
        </ListItem>
        <NavLink to={""}>
          <ListItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Главная" />
          </ListItem>
        </NavLink>
        <NavLink to={"heroes"}>
          <ListItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            <ListItemAvatar>
              <Avatar>
                <Person4Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Герои" />
          </ListItem>
        </NavLink>
        <NavLink to={"episodes"}>
          <ListItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            <ListItemAvatar>
              <Avatar>
                <FmdGoodIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Эпизоды" />
          </ListItem>
        </NavLink>
        <NavLink to={"locations"}>
          <ListItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            <ListItemAvatar>
              <Avatar>
                <QueuePlayNextIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Локации" />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
};
export default LeftMenu;
