import React, { PropsWithChildren, useState } from "react";

import {
  Drawer,
  IconButton,
  ListItem,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  styled,
  AppBarProps as muiAppBarProps,
  Box,
  CircularProgress,
  ListItemIcon,
  Badge,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop: any) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }: any) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends muiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== "open",
})<AppBarProps>(({ theme, open }: any) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

type Props = {
  title: string;
};

const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h5"> {"Dashboard"}</Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton
            onClick={() => navigate("/question-pool")}
            sx={{
              backgroundColor:
                "/question-pool" === location.pathname && "#1111",
            }}
          >
            <ListItemText primary="Question Pool" />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/task-creation")}
            sx={{
              backgroundColor:
                "/task-creation" === location.pathname && "#1111",
            }}
          >
            <ListItemText primary="Task Creation" />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/user-management")}
            sx={{
              backgroundColor:
                "/user-management" === location.pathname && "#1111",
            }}
          >
            <ListItemText primary="User Management" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate("/task-list")}
            sx={{
              backgroundColor: "/task-list" === location.pathname && "#1111",
            }}
          >
            <ListItemText primary="Task List" />
          </ListItemButton>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
