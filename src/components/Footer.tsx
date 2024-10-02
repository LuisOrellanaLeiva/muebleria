import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ padding: '2rem 0', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <Typography variant="body1" gutterBottom>
        &copy; {new Date().getFullYear()} Muebles Modernos
      </Typography>
      <Box sx={{ marginBottom: '1rem' }}>
        <Link href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
          <Facebook />
        </Link>
        <Link href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
          <Twitter />
        </Link>
        <Link href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
          <Instagram />
        </Link>
      </Box>
      <Typography variant="body2">
        <Link href="#" color="inherit">Términos y Condiciones</Link> | 
        <Link href="#" color="inherit"> Política de Privacidad</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
