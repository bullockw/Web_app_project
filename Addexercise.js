import React, { Component } from 'react';
import './App.css';
import './Addlog.css'

class Addexercise extends Component {
  handleChange(e) {
    e.preventDefault();
    let activity = this.refs.createActivity.value;
    let cal = this.refs.createCalBurned.value.replace(/^0+/, '');
    let time = this.refs.createTime.value;
    let date = this.refs.createDate.value;
    this.refs.createActivity.value = null;
    this.refs.createCalBurned.value = null;
    this.refs.createTime.value = null;
    this.refs.createDate.value = null;
    if (activity && cal && time && date){
    let log = [activity,cal,time,date]
    this.props.AddExercise(log);}
}

  render() {

    return(
      <div className="inputBox">
      <h3>Add an Exercise Session</h3>
        <form onSubmit={this.handleChange.bind(this)}>
          <label>
          Activity:
          <input  type="text" name="Food" ref="createActivity"id="foodActivityBox"/>
          Time Spent (min):
          <input  type="number" name="Food" ref="createTime" id="timeBox"/>
          Calories Burned:
          <input  type="number" pattern="[0-9]*" min={0} name="Calorie" ref="createCalBurned" id="calorieBox"/>
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





export default Addexercise;
