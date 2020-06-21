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
import { Table } from 'react-bootstrap'
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import axios from "axios"


import avatar from "assets/img/faces/face-3.jpg";
import { Link } from "react-router-dom";


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

const thArray = ["Category", "User ID","User Name","Priority","Status","Created", "Attachment", ""];



  // [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
  // [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
  // [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
  // [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
  // [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]

class AllTickets extends Component {

  state = {
    tids:[],
    tdArray : [
      // [ "Software" , "1224879671" , "Missa355" , "Urgent" , "In-progress", "5/29/2020", "Issue.png" ] ,
      // [ "Software" , "1224879671" , "Missa355" , "Urgent" , "In-progress", "5/29/2020", "Issue.png" ] ,
      // [ "Software" , "1224879671" , "Missa355" , "Urgent" , "In-progress", "5/29/2020", "Issue.png" ] ,
      // [ "Software" , "1224879671" , "Missa355" , "Urgent" , "In-progress", "5/29/2020", "Issue.png" ] 
    ]


  }

  componentDidMount = () => {
    if(localStorage.getItem("SelectedProject") !== null){
    axios.get(`http://localhost:8080/api/Ticket/projects/${localStorage.getItem("SelectedProject")}`)
        .then(res => {
          for(var i=0; i<res.data.length; i++){
            this.setState({tdArray:[...this.state.tdArray, [res.data[i].category, res.data[i].uid, res.data[i].uid, 
            res.data[i].priority,  res.data[i].status, res.data[i].dateCreated, "Issue.png"] ]})
  
            this.setState({tids:[...this.state.tids, res.data[i].tid]})
          }

          console.log(this.state)

          }
        )
    }

  }

  
  render() {
    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
      {/* <Tooltip id="edit_tooltip">Edit Task</Tooltip> */}
        <Row>
            <Col md={12}>
              <Card
                    title="Tickets"
                    category="All Departments"
                    stats="Updated 3 minutes ago"
                    statsIcon="fa fa-history"
                    content={
                      <Table hover>
                          <thead>
                              <tr>
                                  {
                                      thArray.map((prop, key) => {
                                          return (
                                          <th  key={key}>{prop}</th>
                                          );
                                      })
                                  }
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.tdArray.map((prop,key) => {
                                      return (
                                          <tr key={key}>{
                                              prop.map((prop,key)=> {
                                                  return (
                                                      <td  key={key}>{prop}</td>
                                                  );
                                              })
                                          }

                                            <td><Link to={`/admin/AllTickets/${this.state.tids[key]}`}>{edit_butt}</Link></td> 
                                          </tr>
                                      )
                                  })
                              }

                          </tbody>
                      </Table>
                    }
                  />           
            </Col>
          </Row>
          
      </div>
    );
  }
}

export default AllTickets;
