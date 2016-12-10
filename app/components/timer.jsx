var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState(){
    return {
      count : 0,
      timerStatus : 'paused'
    }
  },
  startTimer(){
    this.timer = setInterval(()=>{
      var newCount = this.state.count + 1;
      this.setState({
        count : newCount
      });
    },1000);
  },
  handleStatusChange(newStatus){
    if(newStatus == 'started'){
      this.startTimer();
      this.setState({
        timerStatus : newStatus
      });
    }
    else if(newStatus == 'paused'){
      this.setState({
        timerStatus : newStatus
      });
      clearInterval(this.timer);
      this.timer = undefined;
    }
    else if(newStatus == 'stopped'){
      this.setState({
        timerStatus : newStatus,
        count : 0
      });
      clearInterval(this.timer);
      this.timer = undefined;
    }
  },
  render(){
    var {timerStatus,count} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
