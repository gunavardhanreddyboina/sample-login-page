import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,
} from '@mui/material';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would typically handle logout logic
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Welcome to Your Dashboard
            </Typography>
            <Typography variant="body1" paragraph align="center">
              You have successfully logged in to your account.
            </Typography>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                This is your protected home page. You can only see this page when you're logged in.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 