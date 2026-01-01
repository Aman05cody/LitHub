import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import FreeBooks from "../components/FreeBooks";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBooks />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
