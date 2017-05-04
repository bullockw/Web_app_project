import React, { Component } from 'react';
import './App.css';
import './Addlog.css'
import NumericInput from 'react-numeric-input';

class Addlog extends Component {
  handleChange(e) {
    e.preventDefault();
    let food = this.refs.createFood.value;
    let cal = this.refs.createCalorie.value.replace(/^0+/, '');
    let date = this.refs.createDate.value;
    this.refs.createFood.value = null;
    this.refs.createCalorie.value = null;
    this.refs.createDate.value = null;
    if (food && cal && date){
    let log = [food,cal,date]
    this.props.AddFood(log);}
}

  render() {

    return(
      <div className="inputBox">
        <h3>Add a Food</h3>
        <form onSubmit={this.handleChange.bind(this)}>
          <label>
          Food:
          <input  type="text" name="Food" ref="createFood" id="foodActivityBox"/>
          Calories:
          <input  type="number" pattern="[0-9]*" min={0} name="Calorie" ref="createCalorie" id="calorieBox"/>
          Date:
          <input type="date" name="Date" ref="createDate" id="dateBox"/>
          <input type="submit" id="addButton"/>
          </label>
        </form>
      </div>
    );
    }
}
/*
    this.props.createLog(this.refs.createFood.value);
    this.refs.createFood.value='';
    this.refs.createCalorie.value='';
    this.refs.createDate.value='';
    }
  handleCalorie(event) {
    const cal = event.target.value;
    this.props.changeCalorie(cal);
    event.preventDefault();
    }
  }

  handleDate(event) {
    const date = event.target.value;
    this.props.changeCalorie(date);
    event.preventDefault();
  }*/





export default Addlog;
