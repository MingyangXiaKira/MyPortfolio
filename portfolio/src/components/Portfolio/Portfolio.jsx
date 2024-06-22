import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MERN E-Commerce Web",
    href: "https://mern-booking-n2kh-1lu2.onrender.com/",
    img: "./ecommercee.WebP",
    desc: "Designed and developed a full-stack e-commerce application using the MERN stack, featuring a responsive UI with Tailwind CSS, RESTful API services, Stripe integration for secure payments, and enhanced security through JWT and middleware authentication.",
  },
  {
    id: 2,
    title: "React19 Landing Page",
    img: "./jsts.jpeg",
    href: "https://react19-landingpage2.vercel.app/",
    desc: "A landing page based on latest published React19 features",
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

            <a href={item.href}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const nonsense = 0;

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
