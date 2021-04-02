import React from 'react';
import {
  observable,
  computed,
  action,
  makeObservable,
  makeAutoObservable,
} from 'mobx';

class Dobuler {
  value;
  constructor(value) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
      // mobx에서는 flow가 async/await을 대체한다
      // action으로 warpping하지않고, flow를 사용한다.
      fetch: flow,
    });
    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }

  // flow는 *함수명 이 컨벤션이다!
  // function* (args){}
  // await대신 yield를 사용한다.
  *fetch() {
    const response = yield fetch('/api/value');
    this.value = response.json();
  }
}

// 클래스형이 아닌 함수형 mobx
function createDouble(value) {
  // 새로운 밸류를 매번 추가해주지않아도 되기때문에
  // makeObservable보다 관리가 쉽고 간단하지만
  // 클래스나 하위 클래스에선 사용 불가능하다.
  return makeAutoObservable({
    value,
    get double() {
      return this.value * 2;
    },
    increment() {
      this.value++;
    },
  });
}

const Doubler = () => {
  return <div></div>;
};

export default Doubler;
