import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs: React.FC = () => {
  return (
    <Box id="contact" sx={{ padding: '4rem 2rem', backgroundColor: '#f4f4f4' }}>
      <Typography variant="h4" gutterBottom align="center">
        Contáctanos
      </Typography>
      <Box sx={{ maxWidth: 600, margin: 'auto' }}>
        <TextField
          fullWidth
          label="Nombre"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Mensaje"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '1rem' }}>
          Enviar Mensaje
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
