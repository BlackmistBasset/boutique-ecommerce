import { useState } from 'react';

import { Cart } from './Cart';

import { Box, Typography } from '@mui/material';
import { MdOutlineLogin } from 'react-icons/md';
import { GrCart } from 'react-icons/gr';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const UserDashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Box sx={{ gap: '20px', display: 'flex' }}>
        <Typography sx={{ display: { xs: 'none', md: 'flex' } }}> Hi, {user?.username}</Typography>

        <GrCart style={{ fontSize: '22px', cursor: 'pointer' }} onClick={toggleDrawer(true)} />
        <MdOutlineLogin style={{ fontSize: '22px', cursor: 'pointer' }} onClick={handleLogOut} />
      </Box>
      <Cart open={open} setOpen={setOpen} />
    </>
  );
};
