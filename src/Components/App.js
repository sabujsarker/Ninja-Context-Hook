import React from 'react';
import Nav from './Nav/Nav'
import Book from './Book/Book'
import ThemeContextProvider from '../Contexts/ThemeContext'
import ThemeToggle from './ThemeToggle/ThemeToggole';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <Nav/>
          <Book/>
          <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
