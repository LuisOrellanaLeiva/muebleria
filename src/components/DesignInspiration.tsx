import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const inspiration = [
  {
    image: 'https://img.freepik.com/foto-gratis/sala-estar-lujo-loft-renderizado-3d-estanteria-cerca-estanteria_105762-2224.jpg',
    description: 'Sala de estar moderna con sofá y mesa de centro.'
  },
  {
    image: 'https://img.freepik.com/foto-gratis/representacion-3d-moderno-comedor-sala-estar-decoracion-lujo-sofa-verde_105762-2140.jpg',
    description: 'Dormitorio elegante con cama y lámparas minimalistas.'
  }
];

const DesignInspiration: React.FC = () => {
  return (
    <Box id="inspiration" sx={{ padding: '4rem 2rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Inspiración de Diseño
      </Typography>
      <Grid container spacing={4}>
        {inspiration.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                position: 'relative',
                height: 300,
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '1rem',
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra de texto para mejorar la legibilidad
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignInspiration;
