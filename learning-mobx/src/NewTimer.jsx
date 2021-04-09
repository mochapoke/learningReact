import React, { useState } from 'react';
import { observer, useLocalObservable } from 'mobx-react';

// const TimerView = observer(() => {
// new Timer()는 class로 만든 Timer이다!
//   const [timer] = useState(() => new Timer()); // See the Timer definition above.
//   return <span>Seconds passed: {timer.secondsPassed}</span>;
// });

const NewTimer = observer(() => {
  // useLocalObservable은 위의 class형을 사용하지 않고
  // 여기서 바로
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    increase() {
      this.secondsPassed++;
    },
  }));
  return <span>secondsPassed : {timer.secondsPassed}</span>;
});

export default NewTimer;
