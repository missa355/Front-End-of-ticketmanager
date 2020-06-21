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

class SpecificTicket extends Component {

  state = {
    tid:"",
    pid:"",
    uid:"",
    Title:"",
    Createdby:"",
    DateCreated:"",
    Description:"",
    Comments:[],
    category:"",
    Status:"",
    Priority:""
    // logs:[]

  }

  EditTicket = (event) => {
    event.preventDefault();

    var var1 = document.getElementById("formControlsCommmentArea").value;


    Axios.get(`http://localhost:8080/api/Ticket/${this.props.TicketId}`)
    .then(res => {
      Axios.post("http://localhost:8080/api/Ticket", 
      {
        tid: res.data.tid,
        pid: res.data.pid,
        uid: res.data.uid,
        dateCreated: res.data.dateCreated,
        desc: res.data.desc,
        comments:res.data.comments.concat(var1),
        status: res.data.status,
        priority: res.data.priority,
        category: res.data.category,
        ticketname: res.data.ticketname,
        logs:res.data.logs
        // CreatorName: "zenyatt12"
    })
      console.log(this.state)
    })
  }

  handleChange= (event) => {
    this.setState({Description: event.target.value});
  }

  componentDidMount(){
    // console.log(this.props.TicketId)
    Axios.get(`http://localhost:8080/api/Ticket/${this.props.TicketId}`)
    .then(res => {
      this.setState({tid:res.data.tid, pid:res.data.pid, uid:res.data.uid, Title:res.data.ticketname, DateCreated:res.data.dateCreated, category:res.data.category,
                    Status:res.data.status, Priority:res.data.priority, Createdby:res.data.uid, Description:res.data.desc, Comments:res.data.comments
      })
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Ticket info"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Ticket Title",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: this.state.Title,
                        },
                        {
                          label: "Created by",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: this.state.Createdby,
                          disabled: true
                        },
                        {
                          label: "Date Created",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: this.state.DateCreated,
                          placeholder: "DD/MM/YYYY",
                          disabled: true

                        }
                      ]}
                    />
                  

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Description</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            value={this.state.Description}
                            onChange={this.handleChange}
                            
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
                          <div>
                          {this.state.Comments.map((block, i) => 
                            <blockquote key={i}>
                              <p>
                                {block}
                              </p>
                              <small><b>Zen Yatta</b> : <i>Saturday, May 30, 2020, 7:44 PM</i> </small>
                            </blockquote>                          
                          )}  
                          </div>
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
                          </div> */}
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




                    {/*  */}

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsCommmentArea">
                          <ControlLabel>Your comment</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="No comment."
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.EditTicket}>
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
                      <TicketStatus status={this.state.Status} priority={this.state.Priority} category={this.state.category} />
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
