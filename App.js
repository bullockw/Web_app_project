import React, { Component } from 'react';

import './App.css';
import Addlog from './Addlog'
import MyTable from './entry'
import SumCal from './sumcal'
import Addexercise from './Addexercise'
import Webcam from './webcam'
import ExerciseTable from './ExerciseEntry'
import AddDiary from './AddDiary'
import DiaryTable from './DiaryEntry'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log:[],
      exercise:[],
      diary:[],
      screenshot:null
    };
  }


  AddFood(f) {
        let foo = f[0];
        let cal = f[1];
        let date = f[2];
        let log = {food: foo, calorie: cal, date:date}
        this.setState({log:this.state.log.concat(log)});
        console.log(this.state)
  }

  AddExercise(ex) {
        let act = ex[0];
        let cal = ex[1];
        let t = ex[2];
        let date = ex[3];
        let exercise = {activity: act, calburned: cal,time: t, date:date};
        this.setState({exercise:this.state.exercise.concat(exercise)});
        console.exercise(this.state)
  }

  AddDiary(d) {
        let refl = d[0];
        let date = d[1];
        let diary = {reflection: refl, date: date}
        this.setState({diary:this.state.diary.concat(diary)});
        console.log(this.state)
  }

  DelFood(index) {
    let newState = this.state.log.splice(index,1);
    this.setState(newState);
    console.log(this.state);
  }

  DelExercise(index) {
    let newState = this.state.exercise.splice(index,1);
    this.setState(newState);
    console.log(this.state);
  }

  DelDiary(index) {
    let newState = this.state.diary.splice(index,1);
    this.setState(newState);
    console.log(this.state);
  }



  screenshot() {
    var screenshot = this.refs.webcam.getScreenshot();
    this.setState({screenshot: screenshot});
  }

  render() {
    console.log(this.state.log)
    var cals = 0;
    for(var i = 0; i < this.state.log.length; i++)
    { cals += this.state.log[i].calorie
    }
    console.log(cals)
    //console.log(this.state.log[1].food)
    return (
      <div className="App">
        <div className="App-header">

          <h1> Wellness Tracker
          </h1>
        </div>
        <Addlog AddFood={this.AddFood.bind(this)}/>
        <div id="table">
        <center>
        <MyTable state={this.state} DelFood={this.DelFood.bind(this)}/>
        </center>
        </div>
        <Addexercise AddExercise={this.AddExercise.bind(this)}/>
        <div id="table">
        <center>
        <ExerciseTable state={this.state} DelExercise={this.DelExercise.bind(this)}/>
        </center>
        </div>
        <AddDiary AddDiary={this.AddDiary.bind(this)}/>
        <div id="table">
        <center>
        <DiaryTable state={this.state} DelDiary={this.DelDiary.bind(this)}/>
        </center>
        </div>
        <div><SumCal state={this.state}/></div>
        <div id="padding"/>

      </div>

    );
    }
  }


export default App;

/*
<h1>react-webcam</h1>
<Webcam ref='webcam'/>
  <h2>Screenshots</h2>
  <div className='screenshots'>
    <div className='controls'>
      <button onClick={this.screenshot}>capture</button>
    </div>
    { this.state.screenshot ? <img src={this.state.screenshot} /> : null }
  </div> */
