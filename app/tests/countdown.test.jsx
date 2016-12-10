var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

 var Countdown = require('Countdown');

describe('Countdown',()=>{
  it('should exits',()=>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown',()=>{
    it('should set state to started and countdown and stop at zero',(done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      expect(countdown.state.count).toBe(3);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(2);
      },1001);


      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      },4001);
    });

    it('should pause countdown on paused status',(done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      },1001);
    });


    it('should reset countdown on stope status',(done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      },1001);
    });
  });
});