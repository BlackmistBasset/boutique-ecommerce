import { useAuth } from '../context/AuthContext';
import { Button, Typography, Container } from '@mui/material';

export const Login = () => {
  const { login, isAuthenticated } = useAuth();
  return (
    <Container sx={{ mt: '100px' }}>
      <Typography variant="h4">Login Page</Typography>
      <Button onClick={login} variant="contained">
        Log In
      </Button>
      {isAuthenticated && <Typography>You are logged in!</Typography>}
    </Container>
  );
};
