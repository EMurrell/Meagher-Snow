import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar.js";
import Meta from "../components/Meta.js";
import Header from "../components/Header.js";
import Features from "../components/Features.js";
import Footer from "../components/Footer.js";
import About from "../components/About.js";
import Services from "../components/Services.js";

export default function Home() {
  return (
    <>
      <Meta />
      <Navbar />
      <Header />
      {/* <Features /> */}
      <About />
      <Services />
      <Footer />
    </>
  );
}
