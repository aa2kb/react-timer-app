var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState(){
    return {
      count : 0,
      countdownStatus : 'stopped'
    }
  },
  componentDidUpdate(prevProps , prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  startTimer(){
    this.timer = setInterval(()=>{
      var newCount = this.state.count - 1;
      this.setState({
        count : newCount >= 0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({
          countdownStatus : 'stopped'
        });
      }
    },1000);
  },
  handleSetCountdown(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange(newStatus){
    this.setState({
      countdownStatus: newStatus
    })
  },
  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  render(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = ()=>{
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      }
      else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
