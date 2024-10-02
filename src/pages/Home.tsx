import React from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import ProductCategories from "../components/ProductCategories";
import ProductList from "../components/ProductList";
import Testimonials from "../components/Testimonials";
import DesignInspiration from "../components/DesignInspiration";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <ProductCategories />
      <Testimonials />
      <DesignInspiration />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
