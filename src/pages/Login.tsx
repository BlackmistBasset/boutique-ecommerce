import { useAuth } from '../context/AuthContext';
import { useFetch } from '../hooks/useFetch';
import { Button, Typography, Container, TextField, Alert } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserType } from '../types/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [loginError, setLoginError] = useState<boolean>(false);

  const navigate = useNavigate();

  const { response } = useFetch({
    method: 'GET',
    url: `/users`
  });

  const { login } = useAuth();

  interface LoginInputs {
    firstName: string;
    password: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    setLoginError(false);
    const userFound = response?.data.find((user: UserType) => {
      return user.username === data.firstName && user.password === data.password;
    });

    if (userFound) {
      login(userFound);
      navigate('/products');
    } else {
      setLoginError(true);
    }
  };

  return (
    <Container sx={{ mt: '100px' }}>
      <Typography variant="h4" textAlign="center" mb="20px">
        Boutique Login
      </Typography>

      <Container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: '300px',
          border: '1px solid black',
          borderRadius: '15px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <TextField
          label="Username"
          placeholder="Username"
          {...register('firstName', { required: true })}
          error={errors.firstName ? true : false}
          helperText={errors.firstName ? 'Username is required' : ''}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
          error={errors.password ? true : false}
          helperText={errors.password ? 'Password is required' : ''}
        />
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </Container>

      {loginError && (
        <Alert severity="error" sx={{ marginTop: '30px', maxWidth: '500px', marginX: 'auto' }}>
          Incorrect username and / or password. Please try again.
        </Alert>
      )}
    </Container>
  );
};
