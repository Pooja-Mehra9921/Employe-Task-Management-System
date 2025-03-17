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
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WindowIcon from '@mui/icons-material/Window';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NewspaperIcon from '@mui/icons-material/Newspaper';

// styles
import "./style.css"

// custom components
import Home from "../../components/Home";
import Boards from "../../components/Boards";
import Projects from "../../components/Projects";
import Analytics from "../../components/Analytics";
import WorkFlows from "../../components/WorkFlows";
import Notifications from "../../components/Notifications";
import Newslatter from "../../components/Newslatter";

const drawerWidth = 200; // Set the sidebar width

const Dashboard = () => {


    const listItems = [

        { title: "Dashboard", icon : <HomeIcon/>, path: <Home/>},
        { title: "Task Board", icon : <DashboardIcon/> , path: <Boards/>},
        { title: "Projects", icon : <WindowIcon/> , path: <Projects/>},
        { title: "Employees", icon : <LeaderboardIcon/> , path: <Analytics/>},
        { title: "Reports", icon : <GroupsIcon/> , path: <WorkFlows/>},
        { title: "Notifications", icon : <NotificationsIcon/> , path: <Notifications/>},
        { title: "Settings", icon : <NewspaperIcon/>, path: <Newslatter/>},
    ]

    const [selectedComponent,  setSelectedComponent] = useState(<Home/>);
  return (
    <Box className="right-section" sx={{ display: "flex" }}>
      {/* Fixed Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar>
          <Box className="css-1ygil4i-MuiToolbar-root"></Box>
          <Typography className="dashboard-title" variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={()=> setSelectedComponent(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box className="MuiBox-root css-7xtdhl"  component="main" sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}>
        <Toolbar />
        {
         selectedComponent
        }
      </Box>
    </Box>
  );
};

export default Dashboard;
