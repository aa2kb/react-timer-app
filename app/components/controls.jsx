var React = require('react');

var Controls = React.createClass({

  onStatusChange : function(newStatus){
    return ()=>{
      this.props.onStatusChange(newStatus);
    }

  },
  render(){
    var {countdownStatus} = this.props;
    var renderStartButton = ()=> {
      if (countdownStatus === 'started') {
        return (<button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>)
      }
      else if (countdownStatus === 'paused' || countdownStatus === 'stopped') {
        return (<button className="button primary" onClick={this.onStatusChange('started')}>Start</button>)
      }
    };
    return (
      <div className="controls">
        {renderStartButton()}
        <buttton className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</buttton>
      </div>
    );
  }
});

module.exports = Controls;