import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./Product";

const ProductList: React.FC = () => {
  const products = [
    {
      name: "Sofá Moderno",
      price: 299,
      image:
        "https://img.freepik.com/foto-gratis/diseno-interiores-marcos-fotos-plantas_23-2149385437.jpg",
    },
    {
      name: "Mesa de Centro",
      price: 99,
      image:
        "https://media.admagazine.com/photos/63643d86181bc087f601b9e0/16:9/w_2560%2Cc_limit/tempo_ad_mueble.jpg",
    },
    {
      name: "Silla Ergonomica",
      price: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zhOo_Q0bRD4OQzSLWklWKRZvENwsvRgqZRoS5pumfF1sI41vRktp9F1wUWyecfus3e0&usqp=CAU",
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.name}>
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
