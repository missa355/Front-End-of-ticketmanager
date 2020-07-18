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
import {Redirect} from "react-router-dom"

import React, { Component } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { AddTicketStatus } from "components/AddTicketStatus/AddTicketStatus.jsx";
import axios from "axios"
import {Link} from "react-router-dom"


import 'react-tabs/style/react-tabs.css';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { v4 as uuidv4 } from 'uuid';


// import avatar from "assets/img/faces/face-3.jpg";

var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
var today = new Date(usaTime);
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
// var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+formatAMPM(today);
// var dateTime = dateTime.toString();

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

class CreateProject extends Component {
  state={
    UserID:"",
    UserName:"",
    project_ids:[""]

  };

  componentDidMount() {
    // axios.get("http://localhost:8080/api/Ticket")
    //     .then(res => console.log(res.data))

  }


  onUpdateTicket = (event) => {
    var splitted1 = false;
    var splitted2 = false;

    // event.preventDefault();
    var var1 = document.getElementById("formControlsTicketTitle").value;
    var var2 = document.getElementById("formControlsDate").value;

    var var3 = document.getElementById("formControlsMembers").value;
    if (var3.indexOf(',') > -1) { var3 = var3.split(','); splitted1 = true; }


    var var4 = document.getElementById("formControlsManager").value;
    if (var4.indexOf(',') > -1) { var4 = var4.split(','); splitted2 = true; }


    console.log(var4)
    var project = null;


    if(splitted1 === true && splitted2 === true){
      
      project = {pid:uuidv4(), projectName:var1, dateCreated:var2, members:var3, projectManagers:var4}

    }
    else if(splitted1 === true){
      project = {pid:uuidv4(), projectName:var1, dateCreated:var2, members:var3, projectManagers:[var4]}

    }
    else if(splitted2 === true){
      project = {pid:uuidv4(), projectName:var1, dateCreated:var2, members:[var3], projectManagers:var4}

    }
    else if(splitted1 === false && splitted2 === false){
      project = {pid:uuidv4(), projectName:var1, dateCreated:var2, members:[var3], projectManagers:[var4]}

    }
    
    // console.log(project)
    // Creating a project and adding it to the mongo database

    axios.post("https://webticket.mooo.com/api/Project", project)
        .then(res => console.log(res))

    //now we need to add the project id to each Project manager and user

    //we first need to get every user/pm supplied by the creator, query the user/pm, create a new json object based on
    // the queried data, then delete the original elment and replace it with the new one by .save(object) 


    if(splitted1 === true){
      for(var i=0; i<var3.length; i++){
        var3[i] = var3[i].trim()
        console.log(var3[i])
        axios.get(`https://webticket.mooo.com/api/User/${var3[i]}`)
        .then(res=>{
            console.log(res.data, "here")

            if(res.data !== ""){
              axios.post("https://webticket.mooo.com/api/User", {uid:res.data.uid, name:res.data.name, projectIds:res.data.projectIds.concat([project.pid])})
              .then(res=>console.log(res))   
            }
            else{
              console.log("res data is empty");
            }


        })
        .catch(err => console.log(err))


      }
    }
    else if(splitted1 === false){
      var3 = var3.trim()
        axios.get(`https://webticket.mooo.com/api/User/${var3}`)
        .then(res=>{
            console.log(res.data, "here")
            if(res.data !== ""){
            axios.post("https://webticket.mooo.com/api/User", {uid:res.data.uid, name:res.data.name, projectIds:res.data.projectIds.concat([project.pid])})
            .then(res=>console.log(res))
            }
            else{
              console.log("empty")
            }

              


        })
        .catch(err => console.log(err))


    }
    // this portion of code is fore updating the project manage collection

    if(splitted2 === true){
      for(var i=0; i<var4.length; i++){
        var4[i] = var4[i].trim()
        console.log(var4[i])
        axios.get(`https://webticket.mooo.com/api/ProjectManager/${var4[i]}`)
        .then(res=>{
            console.log(res.data, "here")

            if(res.data !== ""){
              axios.post("https://webticket.mooo.com/api/ProjectManager", {pmid:res.data.pmid, name:res.data.name, 
                                                                     projectIds:res.data.projectIds.concat([project.pid])})
              .then(res=>console.log(res))   
            }
            else{
              console.log("res data is empty");
            }


        })
        .catch(err => console.log(err))


      }
    }
    else if(splitted2 === false){
      var4 = var4.trim()
        axios.get(`https://webticket.mooo.com/api/ProjectManager/${var4}`)
        .then(res=>{
            console.log(res.data, "here")
            if(res.data !== ""){
            axios.post("https://webticket.mooo.com/api/ProjectManager", {pmid:res.data.pmid, name:res.data.name, projectIds:res.data.projectIds.concat([project.pid])})
            .then(res=>console.log(res))
            }
            else{
              console.log("empty")
            }

              


        })
        .catch(err => console.log(err))



    }
    

  }

  render() {
    if(localStorage.getItem("Authorization") === "false" || localStorage.getItem("Authorization") === null){
      return (<Redirect to="/admin/Login"/>)
    }

    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Project Details"
                content={
                  <form>
                    <Row>
                      <Col md={6}>
                        <FormGroup controlId="formControlsTicketTitle">
                          <ControlLabel>Project Label</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Title"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                      

                      <Col md={6}>
                        <FormGroup controlId="formControlsDate">
                          <ControlLabel>Date Created</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            // placeholder={dateTime}
                            value={dateTime}
                            disabled={true}
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  

                    <Row>

                      {/* Selecting members of Project */}
                      <Col md={6}>
                        <FormGroup controlId="formControlsManager">
                          <ControlLabel>Select Project Manager(s)</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="UserID1, UserID2, UserID3, ..."
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup controlId="formControlsMembers">
                          <ControlLabel>Add Memebers(s)</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="UserID1, UserID2, UserID3, ..."
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          >

                          </FormControl>
                        </FormGroup>
                      </Col>
                      
                    
                    </Row>


                      <Link to="/admin/dashboard" onClick={this.onUpdateTicket}>
                          <Button bsStyle="info" pullRight fill type="submit">
                            Create Project
                          </Button>
                      </Link>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            {/* Information of person who created the Ticket if you want to directly contact them */}
            {/* <Col md={4}>
            <Card
                title="Ticket"
                // category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width"  >
                    <table className="table">
                      <AddTicketStatus />
                    </table>
                  </div>
                }
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CreateProject;
