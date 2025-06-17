import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 