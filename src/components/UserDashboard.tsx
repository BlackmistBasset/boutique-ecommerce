import { Box, Typography } from '@mui/material';
import { MdOutlineLogin } from 'react-icons/md';
import { GrCart } from 'react-icons/gr';
import { useAuth } from '../context/AuthContext';

export const UserDashboard = () => {
  const { logout } = useAuth();
  return (
    <Box sx={{ gap: '20px', display: 'flex' }}>
      <Typography sx={{ display: { xs: 'none', md: 'flex' } }}> Hi, userName</Typography>

      <GrCart style={{ fontSize: '22px', cursor: 'pointer' }} />
      <MdOutlineLogin style={{ fontSize: '22px', cursor: 'pointer' }} onClick={logout} />
    </Box>
  );
};
