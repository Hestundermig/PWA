import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import PWAPrompt from "react-ios-pwa-prompt";

function App() {
  return (
    <>
      <header>
        <p>Sej header</p>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Sej footer</p>
      </footer>
      <PWAPrompt copyTitle="Føj til hjemmeskærm" />
    </>
  );
}

export default App;