import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  // Detectar tamaños de pantalla para ajustar la cantidad de tarjetas visibles
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Limitar a 3 tarjetas visibles como máximo
  const maxVisibleItems = 3;

  // Calcular el número de ítems visibles basados en el tamaño de la pantalla
  const itemsPerPage = Math.min(
    isSmallScreen ? 1 : isMediumScreen ? 2 : maxVisibleItems,
    items.length
  );

  const handleNext = () => {
    if (currentIndex < items.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Manejadores de swipe para permitir arrastrar las tarjetas con el mouse o touch
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true, // Habilita el swipe con mouse
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      width="100%"
      {...swipeHandlers} // Aplicamos el swipe handler
    >
      {/* Mostrar el botón de retroceder solo si currentIndex > 0 */}
      {currentIndex > 0 && (
        <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 0 }}>
          <ArrowBack />
        </IconButton>
      )}

      {/* Contenedor de los elementos */}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "80%", // Ajustar el ancho al contenedor del carrusel
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            width: `${(items.length / itemsPerPage) * 100}%`,
            justifyContent:
              items.length < maxVisibleItems ? "center" : "flex-start", // Centramos si hay menos de 3 tarjetas
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: `0 0 calc(${
                  items.length === 1
                    ? "30%" // Si hay 1 card, ocupar 50% del ancho
                    : items.length === 2
                    ? "60%" // Si hay 2 cards, ocupar 40% del ancho para cada una
                    : "100%" // Si hay 3 o más, dividir el espacio en partes iguales
                } / ${itemsPerPage})`,
                padding: 2,
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Mostrar el botón de avanzar solo si hay más productos por ver */}
      {currentIndex < items.length - itemsPerPage && (
        <IconButton
          onClick={handleNext}
          sx={{ position: "absolute", right: 0 }}
        >
          <ArrowForward />
        </IconButton>
      )}
    </Box>
  );
};

export default Carousel;
