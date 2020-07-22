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
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Redirect } from 'react-router-dom'


import axios from "axios"

class Login extends Component {

  Login = (e) => {
    e.preventDefault();

    var var1 = document.getElementById("formControlsUsernameLogin").value.trim()
    var var2 = document.getElementById("formControlsPasswordLogin").value.trim()

    if(var1 !== "" && var2 !== ""){
      axios.get(`https://teaaurora.ngrok.io/api/User/login/${var1}/${var2}`)
      .then(res => 
        {
          console.log(res);
          if (res.data === true){
            localStorage.setItem("Authorization", "true")
          }
        })

    }

    setTimeout(() => {window.location.reload()}, 2000)
    // window.location.reload();


  }

  Signup = (e)=>{
    e.preventDefault();
    var var1 = document.getElementById("formControlsUsername").value.trim()
    var var2 = document.getElementById("formControlsPassword").value.trim()
    var var3 = document.getElementById("formControlsFirstName").value.trim()
    var var4 = document.getElementById("formControlsLastname").value.trim()

    if(var1 !== "" && var2 !== "" && var3 !== "" && var4 !== ""){
      axios.post("https://teaaurora.ngrok.io/api/User", {uid:var1, Password:var2, Firstname:var3, Lastname:var4, projectIds:[]})
      .then(res => console.log(res))
    }


  }


  render() {
    if(localStorage.getItem("Authorization")){
      return(<div><Redirect to="/admin/dashboard" /></div>)


    }
    return (
      <div className="content" style={{backgroundColor:"#171F24"}}>
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Sign Up"
                content={
                  <form>
 <Row>
                      <Col md={6}>
                        <FormGroup controlId="formControlsUsername">
                          <ControlLabel>username</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Enter Username"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                      
                      <Col md={6}>
                        <FormGroup controlId="formControlsPassword">
                          <ControlLabel>password</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "password"
                            bsClass="form-control"
                            placeholder="Enter password"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup controlId="formControlsFirstName">
                          <ControlLabel>first name</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Enter Firstname"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                      
                      <Col md={6}>
                        <FormGroup controlId="formControlsLastname">
                          <ControlLabel>last name</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Enter Lastname"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.Signup}>
                      Sign up
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={6}>
            <Card
                title="Log In"
                content={
                  <form>
                    <Row>
                      <Col md={6}>
                        <FormGroup controlId="formControlsUsernameLogin">
                          <ControlLabel>username</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "text"
                            bsClass="form-control"
                            placeholder="Enter Username"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                      
                      <Col md={6}>
                        <FormGroup controlId="formControlsPasswordLogin">
                          <ControlLabel>password</ControlLabel>
                          <FormControl
                            rows="1"
                            type = "password"
                            bsClass="form-control"
                            placeholder="Enter password"
                            // defaultValue="When trying to call axios.get in the playlist file to get the tracks belonging to that 
                            // playlist we get an issue with it calling another fuction who call the original function causing a 
                            // loop."
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.Login}>
                      Login
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
