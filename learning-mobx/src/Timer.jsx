import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Time {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  pause() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Time();

setInterval(() => {
  myTimer.increaseTimer();
}, 1000);

const NewTimer = observer(({ timer }) => (
  <div>
    <span>Seconds Passed: {timer.secondsPassed}</span>
    <button onClick={() => timer.pause()}>pause</button>
  </div>
));

const Timer = () => {
  return <NewTimer timer={myTimer} />;
};

export default Timer;
