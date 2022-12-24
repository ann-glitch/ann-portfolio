import React from "react";
import "./App.scss";

import { Navbar } from "./components";
import { About, Header, Footer, Testimonials, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
