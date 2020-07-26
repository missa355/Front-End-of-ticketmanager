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
import SpecificProject from "views/SpecificProject.jsx"
import CreateTicket from "views/CreateTicket.jsx"
import Axios from "axios";
import CreateProject from "views/CreateProject";
import Login from "views/Login";



//this is the part to get all tickets and projects
//...
// console.log("insode routes")
// var Tickteids = [];


//


var TicketRoutes = [
  
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
    path: "/SpecificTicket",
    name: "Specific Tickets",
    icon: "pe-7s-ticket",
    component: SpecificTicket,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/Login",
    name: "Login",
    icon: "pe-7s-bell",
    component: Login,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/CreateProject",
    name: "Create a Project",
    icon: "pe-7s-plus",
    component: CreateProject,
    layout: "/admin"
  }
  // ,
  // {
  //   path: "/dashboard",
  //   name: "click here for demo ",
  //   icon: "pe-7s-bookmarks",
  //   component: Dashboard,
  //   layout: "/admin",
  //   demo:true
  // }
  
];



Axios.get("https:/teaaurora.ngrok.io/api/Ticket") //this gets all tickets
.then(res => {
  localStorage.setItem("tickets", JSON.stringify(res.data))
  }); 

  var tkts = JSON.parse(localStorage.getItem("tickets"))

  console.log(tkts, "tkts")
  if(tkts === null){
    tkts = []

}
var i = 0;
for(i=0; i<tkts.length; i++){
  TicketRoutes.unshift(
    {
      path: `/AllTickets/${tkts[i].tid}`,
      name: "Ticket",
      icon: "pe-7s-file",
      component: SpecificTicket,
      layout: "/admin",
      TicketId:tkts[i].tid
    }
  )
  // console.log(tkts[i])

  
}
//Adding the project pages
Axios.get("https:/teaaurora.ngrok.io/api/Project") //this gets all tickets
.then(res => {
  localStorage.setItem("projects", JSON.stringify(res.data))
  }); 

  var projects = JSON.parse(localStorage.getItem("projects"))

if(projects !== null){
  for(var k=0; k<projects.length; k++){
    TicketRoutes.unshift(
      {
        path: `/ChooseProject/${projects[k].pid}`,
        name: "Project",
        icon: "pe-7s-file",
        component: SpecificProject,
        layout: "/admin",
        ProjectId:projects[k].pid
      }
    )
    // console.log(projects[i])
  
    
  }
}


export default TicketRoutes;
