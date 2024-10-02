import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const testimonials = [
  {
    name: 'Juan Pérez',
    image: 'https://example.com/avatar1.jpg',
    text: 'Los muebles que compré transformaron mi sala de estar. ¡Increíble calidad y diseño!',
  },
  {
    name: 'Ana López',
    image: 'https://example.com/avatar2.jpg',
    text: 'El servicio fue excelente y el mobiliario superó mis expectativas.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box id="testimonials" sx={{ padding: '4rem 2rem', backgroundColor: '#fafafa' }}>
      <Typography variant="h4" gutterBottom align="center">
        Testimonios de Clientes
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} key={testimonial.name}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar src={testimonial.image} sx={{ margin: 'auto', width: 80, height: 80 }} />
              <Typography variant="h6" gutterBottom>{testimonial.name}</Typography>
              <Typography variant="body1" paragraph>{testimonial.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
