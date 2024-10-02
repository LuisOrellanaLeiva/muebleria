import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ProductProps {
  product: {
    id: number;
    name: string;
    image: string;
  };
  onClick: () => void; // Agregamos la función onClick para abrir el modal
}

const Product: React.FC<ProductProps> = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card onClick={onClick}>
        {" "}
        {/* Al hacer clic, se abrirá el modal */}
        <CardMedia
          component="img"
          height="350"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Product;
