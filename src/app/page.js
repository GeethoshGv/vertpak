import Image from "next/image";
import styles from "./globals.scss";
import Hero from "@/components/layout/hero/Hero";
import Product from "@/components/layout/productMenu/Product";
import About from "@/components/layout/about/About";
import Contact from "@/components/layout/contact/Contact";
import Testimonials from "@/components/layout/testimonials/Testimonials";
import Footer from "@/components/layout/footer/Footer";

// import Hero from "../components/layout/hero/Hero";
// import Product from "../components/layout/productMenu/Product";
// import About from "../components/layout/about/About";
// import Contact from "../components/layout/contact/Contact";
// import Testimonials from "../components/layout/testimonials/Testimonials";
// import Footer from "../components/layout/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <About />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}
