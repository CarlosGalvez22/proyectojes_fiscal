import React, { Component } from "react";
import axios from 'axios';



export default class FiscaliaList extends Component {

  constructor(props)
  {
    super(props);
    this.state={listFiscalias:[]}
  }

  componentDidMount(){

    axios.get("http://localhost:4000/fiscalia/fiscalia-list")
    .then(res => {
      const data = res.data.data;
      this.setState({ listFiscalias:data });
    })
    .catch(error => {
      alert(error)
    });

  }
  render(){return(
    this.loadFillData());}


  loadFillData() {
    return this.state.listFiscalias.map((data) => {
return (

<tr>
          <th>{data._id}</th>
          <td>{data.fiscalianombre}</td>
    
          <td>
            <button class="btn btn-outline-info "> Edit </button>
          </td>
          <td>
            <button class="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
)
    })
  }
}
