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
import CreateProject from "views/CreateProject";


var ids = [1, 2, 3]

const dashboardRoutes = [
  // {
  //   path: "/AllTickets/1",
  //   name: "Ticket 1",
  //   icon: "pe-7s-file",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "/ChooseProject",
    name: "Choose a Project",
    icon: "pe-7s-file",
    component: ChooseProject,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/CreateTicket",
    name: "Create Ticket",
    icon: "pe-7s-plus",
    component: CreateTicket,
    layout: "/admin"
  },
  {
    path: "/AllTickets",
    name: "All Tickets",
    icon: "pe-7s-ticket",
    component: AllTicket,
    layout: "/admin"
  },

  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    upgrade: true,
    path: "/CreateProject",
    name: "Create a Project",
    icon: "pe-7s-plus",
    component: CreateProject,
    layout: "/admin"
  }
];

export default dashboardRoutes;
