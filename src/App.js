import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';
import UpdateBook from './components/UpdateBook';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import getTheme from './theme';

const App = () => {
  // State for theme mode
  const [mode, setMode] = useState('dark'); // Default mode is light

  // Function to toggle theme mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Generate theme based on mode
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar mode={mode} toggleTheme={toggleTheme} />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/view-book/:id" element={<ViewBook />} />
            <Route path="/update-book/:id" element={<UpdateBook />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
