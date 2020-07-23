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
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import axios from "axios"

import AllTickets from "../views/AllTickets"
import {Redirect} from "react-router-dom"
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  // dataPie,
  // legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  // dataBar,
  optionsBar,
  responsiveBar,
  // legendBar
} from "variables/Variables.jsx";

// Data for Pie Chart
var legendPie = {
  names: ["Resloved", "Unresolved", "Urgent"],
  types: ["info", "danger", "warning"]
};
//data for bars
var dataBar = {
  labels: [
    "Software",
    "Hardware",
    "Networking",
    "Logistics",
    "Other"

  ],
  series: [
    [20, 15, 30, 5, 6]
  ]
  ,
};

class Dashboard extends Component {

  state = {
    NumberOfTickets:0,
    Resolved: 0,
    Unresolved: 0,
    Urgent: 0,
    dataPie : 
    {
      labels: ["40%", "20%", "40%"],
      series: [40, 20, 40]
    },
    Software:0,
    Hardware:0,
    Network:0,
    Logistics:0
  }


  componentDidMount = () => {
    // localStorage.setItem("SelectedProject", "175faa0e-b2bf-4c9d-8d45-984c03e7f93b")
    // localStorage.setItem("NameOfChosenProject", "MickeiScoop")
    
    //
    if(localStorage.getItem("SelectedProject") !== null){
      axios.get(`https://teaaurora.ngrok.io/api/Ticket/projects/${localStorage.getItem("SelectedProject")}`
      // {
      //   auth: {
      //       username: "user",
      //       password: "5ac4ea64-9229-4522-adc3-127ec2939ea0"
      //   }
      // }
    )
          .then(res => {
              console.log(res)
              this.setState({NumberOfTickets:res.data.length})
              var resloved = 0;
              var unresloved = 0;
              var urgent = 0;

              var software = 0;
              var hardware = 0;
              var network = 0;
              var logistics = 0;

              for(var i=0; i<res.data.length; i++){
                if(res.data[i].status !== "Resolved"){
                  unresloved++;
                }
                if(res.data[i].status === "Resolved"){
                  resloved++;
                }
                if(res.data[i].priority === "Important" || res.data[i].priority === "Very Important"){
                  urgent++;
                }
                if(res.data[i].category === "Software"){
                  software++
                }
                if(res.data[i].category === "Hardware"){
                  hardware++
                }
                if(res.data[i].category === "Network"){
                  network++
                }
                if(res.data[i].category === "Logistics"){
                  logistics++
                }

              }
              var value1 = (resloved/(resloved + unresloved + urgent))*100
              var value2 = (unresloved/(resloved + unresloved + urgent))*100
              var value3 = (urgent/(resloved + unresloved + urgent))*100
              
              
              this.setState({Software:software, Hardware:hardware, Network:network, Logistics:logistics})


              this.setState({Resolved:resloved, Unresolved:unresloved, Urgent:urgent})
              this.setState({    dataPie : 
                {
                  labels: [(Math.floor(value1)).toString() + "%",(Math.floor(value2)).toString()+"%", (Math.floor(value3)).toString()+"%"],
                  series: [value1, value2, value3]
                }})

            // for(var i=0; i<res.data.length; i++){
            //   this.setState({tdArray:[...this.state.tdArray, [res.data[i].category, "1224879671", res.data[i].creatorName, 
            //   res.data[i].priority,  res.data[i].status, res.data[i].dateCreated, "Issue.png"] ]})
    
            //   this.setState({tids:[...this.state.tids, res.data[i].tid]})
            // }
  
            // console.log(this.state)
  
            }
          )
      }
  }


  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    if(localStorage.getItem("Authorization") === "false" || localStorage.getItem("Authorization") === null){
      return (<Redirect to="/admin/Login"/>)
    }
    
    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-ticket" />}
                statsText="Tickets filed"
                statsValue={this.state.NumberOfTickets}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-ticket" />}
                statsText="Tickets Resolved"
                statsValue={this.state.Resolved}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-ticket" />}
                statsText="Unresolved Tickets"
                statsValue={this.state.Unresolved}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-ticket" />}
                statsText="Urgent Tickets"
                statsValue={this.state.Urgent}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Ticket Statistics"
                category="Last Week Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={this.state.dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              <Card
                id="chartActivity"
                title="Categories"
                category="All Ticket countes by category"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Software",
                          "Hardware",
                          "Networking",
                          "Logistics"
                      
                        ],
                        series: [
                          [this.state.Software, this.state.Hardware, this.state.Network, this.state.Logistics]
                        ]
                        ,
                      }}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                // legend={
                //   <div className="legend">{this.createLegend(legendBar)}</div>
                // }
              />
            </Col>

            <Col md={7}>
              <Card
                title="Ticket Logs"
                // category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width"  style={{overflowY: 'scroll', maxHeight:"320px"}}>
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <AllTickets/>

              {/* <Card
                    title="Tickets"
                    category="All Departments"
                    stats="Updated 3 minutes ago"
                    statsIcon="fa fa-history"
                    content={
                      <AllTickets/>
                    }
                  />            */}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
