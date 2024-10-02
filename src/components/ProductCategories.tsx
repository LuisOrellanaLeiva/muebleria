import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Product from "./Product";
import Carousel from "./Carousel"; // Importamos el carrusel
import cocina1 from "../assets/mueblesCocina/cocina1.jpg";
import cocina2 from "../assets/mueblesCocina/cocina2.jpg";
import dormitorio1 from "../assets/mueblesDormitorio/dormitorio1.jpg";

// Define los tipos
interface ProductType {
  id: number;
  name: string;
  image: string;
}

type ProductCategoriesType = {
  [key: string]: ProductType[];
};

// Categorías de productos
const categories = ["COCINA", "HOGAR", "DORMITORIO", "OFICINA"];

// Simulación de productos
const productCategories: ProductCategoriesType = {
  COCINA: [
    {
      id: 1,
      name: "Cocina Moderna",
      image: cocina1,
    },
    {
      id: 2,
      name: "Cocina Clásica",
      image: cocina2,
    },
    {
      id: 3,
      name: "Cocina Moderna",
      image: cocina1,
    },
    {
      id: 4,
      name: "Cocina Clásica",
      image: cocina2,
    },
  ],
  HOGAR: [
    {
      id: 1,
      name: "Silla Hogar",
      image: cocina2,
    },
    {
      id: 2,
      name: "Silla Hogar 2",
      image: cocina2,
    },
    {
      id: 3,
      name: "Silla Hogar 2",
      image: cocina2,
    },
  ],
  DORMITORIO: [
    {
      id: 1,
      name: "Dormitorio Clásico",
      image: dormitorio1,
    },
    {
      id: 2,
      name: "Dormitorio Clásico",
      image: dormitorio1,
    },
  ],

  OFICINA: [
    {
      id: 5,
      name: "Dormitorio Clásico",
      image: dormitorio1,
    },
  ],
};

// Estilos personalizados
const TabContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ProductCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false); // Para controlar el modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Imagen seleccionada

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };

  const handleOpenModal = (image: string) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  const products = productCategories[categories[selectedCategory]];

  return (
    <Box sx={{ mt: 8 }}>
      {/* Tabs de categorías */}
      <Tabs
        value={selectedCategory}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>

      <TabContainer>
        {/* Usamos el carrusel para mostrar 3 productos */}
        <Carousel
          items={products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onClick={() => handleOpenModal(product.image)}
            />
          ))}
        />
      </TabContainer>

      {/* Modal para mostrar la imagen completa */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <IconButton
            onClick={handleCloseModal}
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <motion.img
              src={selectedImage}
              alt="Imagen completa"
              style={{ width: "100%", height: "auto" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProductCategories;
