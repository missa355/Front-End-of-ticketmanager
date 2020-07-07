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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AddTicketStatus } from "components/AddTicketStatus/AddTicketStatus.jsx";
import axios from "axios"
import {Link} from "react-router-dom"
import {Redirect} from "react-router-dom"


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
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { v4 as uuidv4 } from 'uuid';

import Select from 'react-select'

const options = [
  { value: 'Software', label: 'Software' },
  { value: 'Network', label: 'Network' },
  { value: 'Hardware', label: 'Hardware' },
  { value: 'Logistics', label: 'Logistics' }

]
const options2 = [
  { value: 'New', label: 'New' },
  { value: 'In-Progress', label: 'In-Progress' },
  { value: 'Resolved', label: 'Resolved' }
]
const options3 = [
  { value: 'Normal', label: 'Normal' },
  { value: 'Important', label: 'Important' },
  { value: 'Very Important', label: 'Very Important' }
]

const MyComponent = () => (
  <tbody>
    <tr></tr>
    <tr><td><h5>Category</h5></td><td> <Select options={options}  onChange={this.handleChange}/></td></tr>
    <tr><td><h5>Status</h5></td><td> <Select options={options2} /></td></tr>
    <tr><td><h5>Priority</h5></td><td> <Select options={options3} /></td></tr>

  </tbody>


)




var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
var today = new Date(usaTime);
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
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

class SpecificTicket extends Component {
  state={
    TicketID:"",//will be genreated using uuidv4()
    CreatorID:"missa355",//default creator for now
    ProjectID:"1", //for now the default project id is 1
    TicketTitle:"",//input from user
    TicketCreatorName:"",//input from user
    DateCreated:"",//input from system
    Description:"",//input from user
    Status:"",
    Category:"",
    Priority:""

  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/Ticket")
        .then(res => console.log(res.data))

  }
  handleChange1 = selectedOption => {
    this.setState({Category: selectedOption});
    console.log(`Option selected:`, selectedOption);
  };
  handleChange2 = selectedOption => {
    this.setState({Status: selectedOption});
    console.log(`Option selected:`, selectedOption);
  };
  handleChange3 = selectedOption => {
    this.setState({Priority: selectedOption});
    console.log(`Option selected:`, selectedOption);
  };


  onUpdateTicket = (event) => {
    event.preventDefault();
    var var1 = document.getElementById("formControlsTextarea").value;
    var var2 = document.getElementById("formControlsTicketTitle").value;
    var var3 = document.getElementById("formControlsCreator").value;
    var var4 = document.getElementById("formControlsDate").value;


    if(localStorage.getItem("SelectedProject") !== null){
      console.log(localStorage.getItem("SelectedProject"))

      // var ticketjson = {tid:uuidv4(), pid:localStorage.getItem("SelectedProject"), uid:"missa355", ticketname:var2, dateCreated: var4,
      // creatorName:var3, desc:var1, status:"new", priority:"Normal", category:"software"}
      

      var ticketjson =     {
        tid: uuidv4(),
        pid: localStorage.getItem("SelectedProject"),
        uid: var3,
        dateCreated: var4,
        desc: var1,
        comments:[],
        status: this.state.Status.value,
        priority: this.state.Priority.value,
        category: this.state.Category.value,
        Ticketname: var2,
        logs:[]
        // CreatorName: "zenyatt12"
    }
      console.log(ticketjson)

      axios.post("http://localhost:8080/api/Ticket", ticketjson, {  auth: {
        user: 'user',
        password: 'a8904819-9fe0-43f2-b8b8-5cd76859ac04',
      }})
      .then(res => console.log(res))

      // axios.get("http://localhost:8080/api/Ticket")
      // .then(res => console.log(res))

    }
    // var ticketjson = {tid:uuidv4(), pid:uuidv4(), uid:uuidv4(), Ticketname:var2, dateCreated:var4,
    //                   CreatorName:var3, desc:var1, status:"new", priority:"Normal", category:"software"}

    // axios.post("http://localhost:8080/api/Ticket", ticketjson)
    //     .then(res => console.log(res))
    // window.location.reload(true);

    // window.location.href = "http://localhost:3000/admin/AllTickets";



    

  }

  render() {
    if(localStorage.getItem("Authorization") === "false" || localStorage.getItem("Authorization") === null){
      return (<Redirect to="/admin/Login"/>)
    }

    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Ticket info"
                content={
                  <form>
                    <Row>
                      <Col md={4}>
                        <FormGroup controlId="formControlsTicketTitle">
                          <ControlLabel>Ticket Title</ControlLabel>
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
                      
                      <Col md={4}>
                        <FormGroup controlId="formControlsCreator">
                          <ControlLabel>Creator ID</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Enter UserID"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
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
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Description</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/*  */}
                    <Tabs>
                        <TabList>
                          <Tab>Comments</Tab>
                          <Tab>Attachments</Tab>
                        </TabList>

                        <TabPanel>
                          {/* <div>
                            <blockquote>
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi
                                enim ad minim veniam.
                              </p>
                              <small><b>Zen Yatta</b> : <i>Saturday, May 30, 2020, 7:44 PM</i> </small>
                            </blockquote>
                          </div>
                          <div>
                            <blockquote>
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi
                                enim ad minim veniam.
                              </p>
                              <small><b>Zen Yatta</b> : <i>Saturday, May 30, 2020, 7:44 PM</i> </small>
                            </blockquote>
                          </div> */}
                        </TabPanel>
                        <TabPanel>
                          {/* <div>
                            <ul>
                              <li>      
                                <h5>
                                  CallbackLoop.png
                                </h5>
                              </li>
                              <li>      
                                <h5>
                                  CallbackLoop.png
                                </h5>
                              </li>

                            </ul>
                          </div> */}
                        </TabPanel>
                      </Tabs>




                    {/*  */}

                    {/* <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Your comment</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="No comment."
                          />
                        </FormGroup>
                      </Col>
                    </Row> */}

                      <Button bsStyle="info" pullRight fill type="submit" onClick={this.onUpdateTicket}>
                        Update Ticket
                      </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            {/* Information of person who created the Ticket if you want to directly contact them */}
            <Col md={4}>
            <Card
                title="Ticket"
                // category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width"  >
                    <table className="table">
                      <tbody>
                        <tr></tr>
                        <tr><td><h5>Category</h5></td><td> <Select options={options}  onChange={this.handleChange1}/></td></tr>
                        <tr><td><h5>Status</h5></td><td> <Select options={options2} onChange={this.handleChange2} /></td></tr>
                        <tr><td><h5>Priority</h5></td><td> <Select options={options3} onChange={this.handleChange3} /></td></tr>

                      </tbody>
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SpecificTicket;
