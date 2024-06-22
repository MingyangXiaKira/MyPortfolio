import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import React, { useRef, Suspense, lazy } from "react";
const Contact = lazy(() => import("./components/Contact/Contact"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Parallax = lazy(() => import("./components/Parallax/Parallax"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Works = lazy(() => import("./components/Works/Works"));
const App = () => {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  const refs = {
    contactRef: contactRef,
    worksRef: worksRef,
  };
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="Homepage">
          <Navbar />
          <Hero refs={refs} />
          <Section />
        </section>
        <section ref={worksRef} id="Portfolio">
          <Parallax type="services" id="Projects" />
          <Section />
        </section>
        <Portfolio />
        <section>
          <Parallax type="others" />
          <Section />
        </section>
        <Works />

        <section ref={contactRef} id="Contact">
          <Contact />
          <Section />
        </section>
      </Suspense>
    </div>
  );
};

export default App;
