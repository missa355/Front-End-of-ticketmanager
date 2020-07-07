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
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Table } from 'react-bootstrap'
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import axios from "axios"
import "css_assets/project.css"


import avatar from "assets/img/faces/face-3.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";


const edit = (<Tooltip id="edit_tooltip">View Ticket</Tooltip>);
const edit_butt =<OverlayTrigger placement="top" overlay={edit}>
                  <Button
                      bsStyle="info"
                      simple
                      type="button"
                      bsSize="xs"
                  >
                      <i className="fa fa-edit"></i>
                  </Button>
                  </OverlayTrigger>

const thArray = ["Project Name", "Project ID","Project Manager", "Created", ""];

const tdArray = [
  [ "Cashapp" , "1224879671" , "Missa355" , "5/29/2020"] ,
  [ "Delcrave" , "1224879671" , "Missa355" , "5/29/2020"] ,
  [ "Icetunes" , "1224879671" , "Missa355" , "5/29/2020"] ,
  [ "Highwear" , "1224879671" , "Missa355" , "5/29/2020"] 

  // [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
  // [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
  // [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
  // [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
  // [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
];

class AllTickets extends Component {
    state = {
        pids:[],
        tdArray:[],
        Pnames:[]
    }

  componentDidMount = () => {
      Axios.get("http://localhost:8080/api/Project/uid/missa355")
      .then(res=>{
          for(var i=0; i < res.data.length; i++){
            this.setState({tdArray:[...this.state.tdArray, [res.data[i].projectName, res.data[i].pid, "PlaceHolder", res.data[i].dateCreated]]})
            this.setState({pids:[...this.state.pids, res.data[i].pid]})
            this.setState({Pnames:[...this.state.Pnames, res.data[i].projectName]})

          }

    })

  }

  chooseproject = (key) => {
    //   alert(this.state.pids[key])
      localStorage.setItem("SelectedProject", this.state.pids[key])
      localStorage.setItem("NameOfChosenProject", this.state.Pnames[key])

      console.log(localStorage.getItem("SelectedProject"))
    //   window.location.href = "http://localhost:3000/admin/dashboard";

  }

  
  render() {
    if(localStorage.getItem("Authorization") === "false" || localStorage.getItem("Authorization") === null){
        return (<Redirect to="/admin/Login"/>)
      }
    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
      {/* <Tooltip id="edit_tooltip">Edit Task</Tooltip> */}
        <Row>
            <Col md={6}>
              <Card
                    title="Select Project"
                    category=""
                    stats="Updated 3 minutes ago"
                    statsIcon="fa fa-history"
                    content={
                      <Table hover>
                          <thead>
                              <tr>
                                  {
                                      thArray.map((prop, key) => {
                                          return (
                                          <th key={key}>{prop}</th>
                                          );
                                      })
                                  }
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.tdArray.map((prop,key) => {
                                      return (
                                          <tr className="project" key={key} onClick={()=>this.chooseproject(key)}>{
                                              prop.map((prop,key)=> {
                                                  return (
                                                      <td  key={key}>{prop}</td>
                                                  );
                                              })
                                          }
                                          {/* //this is the custom added "edit buttom" */}
                                            <td><Link to={`/admin/ChooseProject/${this.state.pids[key]}`}>{edit_butt}</Link></td> 
                                          </tr>
                                      )
                                  })
                              }

                          </tbody>
                      </Table>
                    }
                  />           
            </Col>
            <Col md={6}>
                <Row>
                    <Col lg={6} sm={6}>
                    <StatsCard
                            bigIcon={<i className="pe-7s-ticket" />}
                            statsText="Total Tickets filed"
                            statsValue="15"
                            statsIcon={<i className="fa fa-refresh" />}
                            statsIconText="Updated now"
                        />
                    </Col>
                    <Col lg={6} sm={6}>
                    <StatsCard
                        bigIcon={<i className="pe-7s-ticket" />}
                        statsText="Total Tickets Resolved"
                        statsValue="13"
                        statsIcon={<i className="fa fa-calendar-o" />}
                        statsIconText="Last day"
                    />
                    </Col>
                
                </Row>

                <Row>
                    <Col lg={6} sm={6}>
                    <StatsCard
                            bigIcon={<i className="pe-7s-ticket" />}
                            statsText="Total Unresolved Tickets"
                            statsValue="15"
                            statsIcon={<i className="fa fa-refresh" />}
                            statsIconText="Updated now"
                        />
                    </Col>
                    <Col lg={6} sm={6}>
                    <StatsCard
                        bigIcon={<i className="pe-7s-ticket" />}
                        statsText="Total Urgent Tickets"
                        statsValue="13"
                        statsIcon={<i className="fa fa-calendar-o" />}
                        statsIconText="Last day"
                    />
                    </Col>
                
                </Row>
         
            </Col>
          </Row>
          
      </div>
    );
  }
}

export default AllTickets;
