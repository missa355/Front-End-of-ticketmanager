/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import ChooseProject from "views/ChooseProject";
import UserProfile from "views/UserProfile.jsx";
import AllTicket from "views/AllTickets.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import SpecificTicket from "views/SpecificTicket.jsx"
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";
import CreateTicket from "views/CreateTicket.jsx"

const UserRoutes = [
  {
    path: "/ChooseProject",
    name: "Choose a Project",
    icon: "pe-7s-file",
    component: ChooseProject,
    layout: "/user"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/user"
  },
  {
    path: "/CreateTicket",
    name: "Create Ticket",
    icon: "pe-7s-plus",
    component: CreateTicket,
    layout: "/user"
  },
  {
    path: "/AllTickets",
    name: "All Tickets",
    icon: "pe-7s-ticket",
    component: AllTicket,
    layout: "/user"
  },
  {
    path: "/SpecificTicket",
    name: "Specific Tickets",
    icon: "pe-7s-ticket",
    component: SpecificTicket,
    layout: "/user"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/user"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/user"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/user"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/user"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/user"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/user"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/user"
  }
];

export default UserRoutes;
