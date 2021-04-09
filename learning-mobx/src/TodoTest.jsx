import React from 'react';
import { makeObservable, observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title) {
    // 내가 관찰(observe)하고싶은 것을 이렇게 따로 적어줘야함
    // makeAutoObservable로 할 수 있지만 이렇게 '명시'해놓음으로
    // 더 자세히 알 수 있음
    makeObservable(this, {
      // observable할 수 있는건 원시값, 객체, 참조, 배열 등등 가능
      title: observable,
      finished: observable,
      // action은 state를 변경시킬 수 있는 코드.
      // observable인 state를 변경하는건 모두 action으로 하는 게
      // mobx 의 성능상 좋다
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos = [];

  // JS Getter을 이용하여 observable 값을 computed(계산)함
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      // computed로 계산된 값이라고 명시해준다
      // makeObservable 안에 넣었기에 자동으로 값이 업데이트되지만,
      // 필요할 경우에만 업데이트 된다.
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }
}

// 아래처럼 observer로 감싸게 되면, 필요한 경우에만 리렌더링된다.
// 그이상은 렌더되지 않는다.
const TodoListView = observer(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks Left : {todoList.unfinishedTodoCount}
  </div>
));

const TodoView = observer(({ todo }) => (
  <li>
    <input
      type='checkbox'
      checked={todo.finished}
      onClick={() => todo.toggle()}
    />
    {todo.title}
  </li>
));

const store = new TodoList([
  new Todo('Get coffee'),
  new Todo('Wrtie simpler code'),
]);
console.log(store);

const TodoTest = () => {
  return (
    <main>
      <TodoListView todoList={store} />
    </main>
  );
};

export default TodoTest;
