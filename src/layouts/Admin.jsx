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
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";
import axios from "axios"
// import Signup from "views/Singup/Signup"


import { style } from "variables/Variables.jsx";

import routes from "routes.js";
import TicketRoutes from "ModelRoutes/TicketRoutes"

import image from "assets/img/sidebar-3.jpg";
// import SpecificTicket from "views/SpecificTicket";
// import Dashboard from "views/Dashboard";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      color: "#171F24",
      hasImage: false,
      fixedClasses: "dropdown show-dropdown open",
      ProjectChosen:localStorage.getItem("NameOfChosenProject")
    };
  }


  // componentWillMount(){
  //   var tkts = JSON.parse(localStorage.getItem("tickets"))
  //   console.log(tkts)
    
  // }


  handleNotificationClick = position => {
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level: level,
      position: position,
      autoDismiss: 15
    });
  };


  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        // case of component being a ticket we need to pass down the id so it can get its content
        if(prop.name==="Ticket"){
          // console.log(prop)
          return (
            //this is where the routes are created
            <Route
              path={prop.layout + prop.path}
              render={props => (
                <prop.component //this is for example "SpecificTicket"
                  {...props}
                  handleClick={this.handleNotificationClick}
                  TicketId = {prop.TicketId}
                />
              )}
              key={key}
            />
          );
        }
        else if(prop.name==="Project"){
          // console.log(prop)
          return (
            //this is where the routes are created
            <Route
              path={prop.layout + prop.path}
              render={props => (
                <prop.component //this is for example "SpecificTicket"
                  {...props}
                  handleClick={this.handleNotificationClick}
                  ProjectId = {prop.ProjectId}
                />
              )}
              key={key}
            />
          );
        }
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component //this is for example "SpecificTicket"
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleHasImage = hasImage => {
    this.setState({ hasImage: hasImage });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  componentDidMount() {
    var selected = null;
    // console.log("the routes on the sidebar are", routes)
    if(localStorage.getItem('SelectedProject') !== null){
      // alert(localStorage.getItem('SelectedProject'))
      selected = localStorage.getItem('SelectedProject');

      console.log(selected)

      
      axios.get(`https:/teaaurora.ngrok.io/api/Project/${selected}`)
      .then(res => {
        // console.log("res.data is", res.data)
        localStorage.setItem("NameOfChosenProject", res.data.projectName)
        // routes[5].name = localStorage.getItem("NameOfChosenProject")
        // routes[5].Icon = "pe-7s-file"



      })
      if(localStorage.getItem("NameOfChosenProject") !== null){
        // var srs = { 
        //   name: localStorage.getItem("NameOfChosenProject"),
        //   icon: "pe-7s-file",
        //   // path: window.location.href,
        //   layout: "/admin"
        // }

        var exists = false;

        // for (var i=0; i<routes.length; i++) { //iterate through each object in an array
        //   if (JSON.stringify(routes[i]) === JSON.stringify(srs) ) {
        //           alert("EQUALS");
        //           exists = true;
        //    }
        // }

      if(exists === false){

          routes.unshift({ 
            name: "Project Name : " + localStorage.getItem("NameOfChosenProject"),
            icon: "pe-7s-angle-right-circle",
            type:"None"
            // path: window.location.href,
            // layout: "/admin"
          })

        
      }



      }

      // this.setState({ProjectChosen:"Second choice"})




    
    }
    // console.log("routes are", routes)
    // console.log("state is", this.state)


    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level: level,
      position: "tr",
      autoDismiss: 15
    });
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(TicketRoutes)}</Switch>
          <Footer />
          {/* <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleHasImage={this.handleHasImage}
            bgColor={this.state["color"]}
            bgImage={this.state["image"]}
            mini={this.state["mini"]}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          /> */}
        </div>

      </div>
    );
  }
}

export default Admin;
