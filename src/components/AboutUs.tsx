import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const SectionBox = styled(Box)(({ theme }) => ({
  padding: "4rem 2rem",
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: "bold",
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
}));

const AboutUs: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // La animación se activa cuando el 20% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionBox id="about" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <Title variant="h4" align="center">
          Sobre Nosotros
        </Title>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h6" gutterBottom>
              Nuestra Misión
            </Typography>
            <Paragraph variant="body1">
              En Muebles Modernos, nos dedicamos a ofrecer muebles de alta
              calidad que combinan diseño innovador con la máxima comodidad.
              Nuestro compromiso es transformar cada espacio en un lugar único y
              funcional, adaptado a tus necesidades y estilo.
            </Paragraph>

            <Typography variant="h6" gutterBottom>
              ¿Por qué Elegirnos?
            </Typography>
            <Paragraph variant="body1">
              Nuestros muebles no solo cumplen con los estándares más altos de
              calidad, sino que también ofrecen un diseño estético y elegante.
              Trabajamos con los mejores materiales y artesanos para asegurar
              que cada pieza sea duradera y hermosa.
            </Paragraph>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
                p: 2,
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Únete a Nosotros
              </Typography>
              <Typography variant="body1" paragraph>
                Estamos comprometidos con ofrecer un excelente servicio al
                cliente y productos excepcionales. Si estás interesado en saber
                más o en colaborar con nosotros, no dudes en ponerte en
                contacto.
              </Typography>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button variant="contained" color="secondary" href="#contact">
                  Contáctanos
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </SectionBox>
  );
};

export default AboutUs;
