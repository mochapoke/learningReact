import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react';

// mobx는 기본적으로 useContext를 활용하는듯?
const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: [],
    // function도 가져갈 수 있다.
    addBug: (bug) => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const BugsHeader = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => <h1>{store.bugsCount} bugs!</h1>);
};

const BugsList = () => {
  const store = React.useContext(StoreContext);

  // useObserver로 return을 감싸주지않으면
  // 정말 변화를 observe하지 않는다ㅏ!
  return useObserver(() => (
    <ul>
      {store.bugs.map((bug) => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ));
};

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        store.addBug(bug);
        setBug('');
        e.preventDefault();
      }}
    >
      <input type='text' value={bug} onChange={(e) => setBug(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  );
};

function App() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </main>
    </StoreProvider>
  );
}

export default App;
