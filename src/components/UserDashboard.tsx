import { Box, Typography } from '@mui/material';
import { MdOutlineLogin } from 'react-icons/md';
import { GrCart } from 'react-icons/gr';
export const UserDashboard = () => {
  return (
    <Box sx={{ gap: '20px', display: 'flex' }}>
      <Typography sx={{ display: { xs: 'none', md: 'flex' } }}> Hi, userName</Typography>

      <GrCart style={{ fontSize: '22px' }} />
      <MdOutlineLogin style={{ fontSize: '22px' }} />
    </Box>
  );
};
