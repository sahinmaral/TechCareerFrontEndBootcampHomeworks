import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Header />

      <Homepage />


      <Footer />
    </React.Fragment>
  );
}

export default App;
