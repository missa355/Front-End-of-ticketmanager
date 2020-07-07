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
import { TicketStatus } from "components/Ticketstatus/TicketStatus.jsx";
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

import avatar from "assets/img/faces/face-3.jpg";
import Axios from "axios";

class SpecificProject extends Component {

  state = {
    pid:"",
    Title:"",
    Createdby:"Yet to be implemented",
    DateCreated:"",
    members:[],
    pms:[]

  }

  updateUsersAndPm = (event) =>{
    var splitted1 = false;
    var splitted2 = false;

    event.preventDefault();

    var var3 = document.getElementById("MembersToBeAdded").value;
    if (var3.indexOf(',') > -1) { var3 = var3.split(','); splitted1 = true; }


    var var4 = document.getElementById("MembersToBeRemoved").value;
    if (var4.indexOf(',') > -1) { var4 = var4.split(','); splitted2 = true; }
    

    Axios.get(`http://localhost:8080/api/Project/${this.props.ProjectId}`)
    .then(res => {
        console.log(var3.length);
        if(splitted1 === true && var3.length > 0){
            for(var i=0; i<var3.length; i++){
                var3[i] = var3[i].trim()
                // console.log("trimming")

            }
            console.log("adding multi members", var3)
            Axios.post("http://localhost:8080/api/Project", {pid:res.data.pid, projectName:res.data.projectName, dateCreated:res.data.dateCreated,
                                                         members:res.data.members.concat(var3), projectManagers:res.data.projectManagers})
            .then(res => console.log(res))

        }
        if(splitted1 === false && var3!==""){
            var3 = var3.trim()

            var mems = res.data.members;
            // const index = mems.indexOf(var3);
            console.log("adding single members", var3)

            Axios.post("http://localhost:8080/api/Project", {pid:res.data.pid, projectName:res.data.projectName, dateCreated:res.data.dateCreated,
                                                             members:res.data.members.concat([var3]), projectManagers:res.data.projectManagers})
            .then(res => console.log(res))
                
            
        }
        if(splitted2 === true){
            var mems = res.data.members;
            for(var i=0; i<mems.length; i++){
                var4[i] = var4[i].trim()
                const index = mems.indexOf(var4[i]);
                if (index > -1) {

                    // console.log("removing multi members", var4[i])
                    mems.splice(index, 1);
                    // console.log("new list is", mems)

                }
            }
             console.log("new list is", mems)

            Axios.post("http://localhost:8080/api/Project", {pid:res.data.pid, projectName:res.data.projectName, dateCreated:res.data.dateCreated,
            members:mems, projectManagers:res.data.projectManagers})
            .then(res => console.log(res))



        }
        if(splitted2 === false){
            var4 = var4.trim()

            var mems = res.data.members;
            console.log("mems is", mems)
            console.log("value is", var4)

            const index = mems.indexOf(var4);
            if (index > -1) {
                console.log("removing a single members", var4)

                mems.splice(index, 1);
                Axios.post("http://localhost:8080/api/Project", {pid:res.data.pid, projectName:res.data.projectName, dateCreated:res.data.dateCreated,
                members:mems, projectManagers:res.data.projectManagers})
                .then(res => console.log(res))

            }

        }
    })

  }

  handleChange2= (event) => {
    this.setState({Title: event.target.value});
    console.log(this.state.Title)

  }
  handleChange3= (event) => {
    this.setState({uid: event.target.value});
    console.log(this.state.Createdby)


  }

  handleChange= (event) => {
    this.setState({Description: event.target.value});

    if(event.target.value.length > 0 && event.target.id === "MembersToBeRemoved"){
        document.getElementById("MembersToBeAdded").disabled = true; 

    }
    if(event.target.value.length > 0 && event.target.id === "MembersToBeAdded"){
        document.getElementById("MembersToBeRemoved").disabled = true; 

    }
    if(event.target.value.length === 0 && event.target.id === "MembersToBeAdded"){
        document.getElementById("MembersToBeRemoved").disabled = false; 

    }
    if(event.target.value.length === 0 && event.target.id === "MembersToBeRemoved"){
        document.getElementById("MembersToBeAdded").disabled = false; 

    }
 }
 

  componentDidMount(){
    // console.log(this.props.TicketId)
    Axios.get(`http://localhost:8080/api/Project/${this.props.ProjectId}`)
    .then(res => {
      this.setState({pid:res.data.pid, Title:res.data.projectName, DateCreated:res.data.dateCreated, members: res.data.members, 
                     pms:res.data.projectManagers })
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Project info"
                content={
                  <form>
                    <Row>
                      <Col md={4}>
                        <FormGroup controlId="formControlsTicketTitle">
                          <ControlLabel>Project Title</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Title"
                            value={this.state.Title}
                            onChange={this.handleChange2}

                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                      
                      <Col md={4}>
                        <FormGroup controlId="formControlsCreator">
                          <ControlLabel>Project Manager</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Enter ID"
                            value={this.state.Createdby}
                            onChange={this.handleChange3}
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
                            value={this.state.DateCreated}
                            disabled={true}
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  

                    <Row>
                      <Col md={4}>
                          <h5>Project Members</h5>
                          <ul style={{height:"100px", overflowY:"scroll"}}>
                            {this.state.members.map((block, i) => 
                                    <li key={i} >{block}</li>
                                )}   
                          </ul>
                        
                      </Col>
                      <Col md={4}>
                          <h5>Project Developers</h5>
                          <ul style={{height:"100px", overflowY:"scroll"}}>
                            {this.state.pms.map((block, i) => 
                                    <li key={i} >{block}</li>
                                )}   
                          </ul>
                        
                      </Col>
                      <Col md={4}>
                          <h5>Project Manager(s)</h5>
                          <ul style={{height:"100px", overflowY:"scroll"}}>
                            {this.state.pms.map((block, i) => 
                                    <li key={i} >{block}</li>
                                )}   
                          </ul>
                        
                      </Col>
                    </Row>
                    <Row>

                        <Col md={6}>
                            <FormGroup controlId="MembersToBeAdded">
                            <ControlLabel>Add Members</ControlLabel>
                            <FormControl
                                rows="1"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder="UserId1, UserId2, UserId3"
                                // value={this.state.Description}
                                onChange={this.handleChange}
                                
                            />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="MembersToBeRemoved">
                            <ControlLabel>Remove Members</ControlLabel>
                            <FormControl
                                rows="1"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder="UserId1, UserId2, UserId3"
                                // value={this.state.Description}
                                onChange={this.handleChange}
                                
                            />
                            </FormGroup>
                        </Col>
                    </Row>

                    
                    {/* <Tabs>
                        <TabList>
                          <Tab>Comments</Tab>
                          <Tab>Attachments</Tab>
                        </TabList>

                        <TabPanel>
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
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div>
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
                          </div>
                        </TabPanel>
                      </Tabs>





                    <Row>
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

                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.updateUsersAndPm}>
                      Update Project
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            {/* Information of person who created the Ticket if you want to directly contact them */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SpecificProject;
