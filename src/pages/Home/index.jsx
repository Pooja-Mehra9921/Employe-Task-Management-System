import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WindowIcon from "@mui/icons-material/Window";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NewspaperIcon from "@mui/icons-material/Newspaper";

// styles
import "./style.css";

// custom components
import Projects from "../../components/Projects";
import Notifications from "../../components/Notifications";
import Header from "../../components/Header";
import DashBoard from "../../components/DashBoard";
import TaskBoard from "../../components/TaskBoard";
import EmployeesDetail from "../../components/EmployeesDetail";
import Reports from "../../components/Reports";
import Settings from "../../components/Settings";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200; // Set the sidebar width

const Home = () => {

  const navigate = useNavigate();
  const listItems = [
    { title: "Dashboard", icon: <HomeIcon />, component: <DashBoard/>  },
    { title: "Task Board", icon: <DashboardIcon />, component: <TaskBoard /> },
    { title: "Projects", icon: <WindowIcon />, component: <Projects /> },
    { title: "Employees", icon: <LeaderboardIcon />, component: <EmployeesDetail /> },
    { title: "Reports", icon: <GroupsIcon />, component: <Reports /> },
    { title: "Notifications", icon: <NotificationsIcon />, component: <Notifications /> },
    { title: "Settings", icon: <NewspaperIcon />, component: <Settings /> },
  ];

  const [selectedComponent, setSelectedComponent] = useState(<DashBoard />);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>

    <Box className="right-section" sx={{ display: "flex"}}>
      {/* Fixed Sidebar */}
      <Drawer
      className="MuiDrawer-paper"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex:1,
          backgroundColor:"#3750eb",
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar>
          <Typography className="dashboard-title" variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                style={{
                  backgroundColor: activeIndex === index ? "white" : "#3750eb",
                  color: activeIndex === index ? "black" : "white",
                  borderRadius: activeIndex === index ? "20px" : "10px",
                  margin:"auto 10px"
                }}
                onClick={() => {
                  setSelectedComponent(item.component);
                  setActiveIndex(index);
                }}
              >
                <ListItemIcon style={{ color: activeIndex === index ? "black" : "white" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        className="MuiBox-root css-7xtdhl"
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}
      >
       <Header title={listItems[activeIndex].title} />
<Box className="main-content-section">
<Toolbar />
{selectedComponent}
</Box>
      
      </Box>
    </Box>
    </>
  );
};

export default Home;
