import React, { useState } from "react";
import { TasksQuestions } from "../api";
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

type Props = {
  questions?: TasksQuestions[];
  selectedId?: number;
  onSelect?: (id: number) => void;
  taskTitle?: string;
};
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

const Sidebar = ({ questions, onSelect, selectedId, taskTitle }: Props) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
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
              {taskTitle}
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
            <Typography variant="h5">Questions</Typography>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {!questions && <CircularProgress />}
            {questions?.map((question) => (
              <ListItem
                key={question.id}
                disablePadding
                sx={{
                  backgroundColor: selectedId === question.id && "#1111",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemButton onClick={() => onSelect?.(question.id)}>
                  <ListItemText primary={question.title} />
                  {question.grade !== null && (
                    <ListItemIcon>
                      <Chip
                        size="small"
                        sx={{
                          width: "40px",
                        }}
                        label={question.grade}
                        color={
                          question.grade === 100
                            ? "success"
                            : question.grade === 0
                            ? "error"
                            : "warning"
                        }
                      />
                    </ListItemIcon>
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
