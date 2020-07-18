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
import axios from "axios"
import { Link } from "react-router-dom";


export class Tasks extends Component {
  // handleCheckbox = event => {
  //   const target = event.target;
  //   console.log(event.target);
  //   this.setState({
  //     [target.name]: target.checked
  //   });
  // };

  state = {
    logs:[],
    links:[]

  }
  componentDidMount = () => {
    if(localStorage.getItem("SelectedProject") !== null){
    axios.get(`https://webticket.mooo.com/api/Ticket/projects/${localStorage.getItem("SelectedProject")}`)
        .then(res => {
          for(var i=0; i<res.data.length; i++){
            this.setState({logs:this.state.logs.concat(res.data[i].logs)})
            for(var k=0; k<res.data[i].logs.length; k++){
              console.log("insise Task")
                this.setState({links:[...this.state.links, res.data[i].tid]})
  
              }


  
          }

          console.log(this.state)

          }
        )
    }

  }
  render() {
    // const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    // const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const tasks_title = [
      <div>
        {this.state.logs.map((block, i) => 
            <div key={i}>
              <Link to={`/admin/AllTickets/${this.state.links[i]}`}><p style={{display:"inline"}} className="text-info"><b>Update {i+1}</b></p> </Link>
              <p style={{display:"inline", fontFamily:"Arial, Helvetica, sans-serif"}} >: {block} </p> 
            </div>
      )}
      </div>
    ];
    var tasks = [];
    var number;
    for (var i = 0; i < tasks_title.length; i++) {
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          {/* <td>
            <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
            />
          </td> */}
          <td>{tasks_title[i]}</td>
          {/* <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" simple type="button" bsSize="xs">
                <i className="fa fa-times" />
              </Button>
            </OverlayTrigger>
          </td> */}
        </tr>
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
