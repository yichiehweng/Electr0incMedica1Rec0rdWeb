import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Create extends Component {

    constructor() {
      super();
      this.state = {
        ATCCode: '',
        Name: '',
        TradeName: '',
        Category: ''
      };
    }
    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  
    onSubmit = (e) => {
      e.preventDefault();
  
      const { ATCCode,Name,TradeName,Category } = this.state;
      console.log(this.state);
  
      axios.post('http://localhost:8000/', { ATCCode,Name,TradeName,Category})
        .then((result) => {
          this.props.history.push("/")
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    render() {
      const { ATCCode,Name,TradeName,Category } = this.state;
      return (
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                Add Medication
              </h3>
            </div>
            <div class="panel-body">
              <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Medication List</Link></h4>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="ATCCode">ATC Code:</label>
                  <input type="text" class="form-control" name="ATCCode" value={ATCCode} onChange={this.onChange} placeholder="ATC Code" />
                </div>
                <div class="form-group">
                  <label for="Name">Name:</label>
                  <input type="text" class="form-control" name="Name" value={Name} onChange={this.onChange} placeholder="Name" />
                </div>
                <div class="form-group">
                  <label for="TradeName">Trade Nmae:</label>
                  <input type="text" class="form-control" name="TradeName" value={TradeName} onChange={this.onChange} placeholder="Trade Name" />
                </div>
                <div class="form-group">
                  <label for="Category">Category:</label>
                  <input type="text" class="form-control" name="Category" value={Category} onChange={this.onChange} placeholder="Category" />
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Create;