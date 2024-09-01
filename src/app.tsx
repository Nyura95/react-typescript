import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import { increment, resetTo, selectCounter } from './features/counter/counterSlice';
import { useAppDispatch } from './hooks/appDispatch';
import { useAppSelector } from './hooks/appSelector';

function App() {
  const { t } = useTranslation();

  const { counter } = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('Welcome to React')} Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <p>
          <button onClick={() => dispatch(increment())}>{counter}</button>
          <button onClick={() => dispatch(resetTo(0))}>reset</button>
        </p>
      </header>
    </div>
  );
}

export default App;
