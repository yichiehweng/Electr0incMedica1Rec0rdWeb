import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/')
      .then(res => {
        this.setState({ medications: res.data });
        console.log(this.state.medications);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

render() {
    return (      
      <div class="container">
      <div class="panel panel-default">      
          <h3 class="panel-title">
            Medication List
          </h3>
        <div class="panel-body">
          <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Medication</Link></h4>
          <table class="table table-stripe">
            <thead>
              <tr>
                <th>ATC Code</th>
                <th>Name</th>
                <th>Trade Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {this.state.medications.map(medication =>
                <tr>
                  <td>{medication.ATCCode}</td>
                  <td>{medication.Name}</td>
                  <td>{medication.TradeName}</td>
                  <td>{medication.Category}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
}

export default App;
