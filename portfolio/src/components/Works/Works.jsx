import { useRef } from "react";
import "./works.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "EMR De-identification Platform",
    img: "./medical.WebP",
    desc: "The EMR De-identification Platform, leveraging state-of-the-art deep learning algorithms, is actively enhancing its capabilities to achieve optimal metrics in securely anonymizing electronic medical records.",
  },
  {
    id: 2,
    title: "Django City Dashboard",
    img: "./dashboard.WebP",
    desc: "The Django City Dashboard, actively evolving with Django, React, PostgreSQL, Redis, Docker, Kubernetes, and machine learning techniques, is a sophisticated platform offering real-time urban data visualization and insightful analytics for efficient city management.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 style={{ color: "white" }}>{item.title}</h2>
            <p>{item.desc}</p>
            <button className="onGoing">In progress</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Current Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Works;
