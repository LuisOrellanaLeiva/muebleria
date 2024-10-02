import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import img1 from "../assets/imgHeader/img9.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      {["Home", "About Us", "Services", "Pages", "Contact"].map((text) => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ position: "relative" }}>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          boxShadow: "none",
          padding: "20px",
          zIndex: 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Muebleria Nogal
          </Typography>

          {isSmallScreen ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
              >
                {menuItems}
              </Drawer>
            </>
          ) : (
            <>
              {["Home", "About Us", "Services", "Pages", "Contact"].map(
                (text) => (
                  <Button
                    key={text}
                    color="inherit"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1.2rem", // Letra más grande
                      textTransform: "none", // Evitar que el texto sea todo en mayúsculas
                      letterSpacing: "0.05rem", // Espaciado entre letras
                      marginRight: "1.5rem", // Espaciado entre los botones
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)", // Efecto hover suave
                      },
                    }}
                  >
                    {text}
                  </Button>
                )
              )}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0)), url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          color: "black",
          zIndex: 0,
          paddingLeft: { xs: "20px", sm: "50px", md: "50px" },
        }}
        ref={ref}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            borderRadius: "10px",
            maxWidth: "800px",
            textAlign: { xs: "left", sm: "left", md: "center", xl: "center" },
            marginLeft: { xs: "0", sm: "0px", md: "5px", xl: "20px" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Muebles Modernos y Elegantes
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                marginBottom: "2rem",
              }}
            >
              Transformando tu hogar con estilo
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
            transition={{ duration: 1.2 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F6A623",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#E59500",
                },
                padding: "0.8rem 2rem",
              }}
            >
              Ver Productos
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
