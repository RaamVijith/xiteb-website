import "../../assets/styles/components/homePageComponents/Section2_details.css";
import { motion, useTransform, useScroll } from "framer-motion";

import { useRef } from "react";

const Section2_details = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

export default Section2_details;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="section2-details">
      <div className="inner">
        <motion.div style={{ x }} className="content">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div key={card.id} className="card">
      <img src={card.url} alt="pic" />
      <h1>{card.title}</h1>
    </div>
  );
};


// card design
type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/projects/web2.webp",
    title: "Customized Software Solutions",
    id: 1,
  },

  {
    url: "https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/projects/web.webp",
    title: "Award Winning Designs",
    id: 2,
  },

  {
    url: "https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/projects/web4.webp",
    title: "Intellectual & Rich Clientele",
    id: 3,
  },

  {
    url: "https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/projects/web3.webp",
    title: "No: 01 in Google Search",
    id: 4,
  },

  {
    url: "https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/projects/web5.webp",
    title: "Exposure in Diverse Industries",
    id: 5,
  },
];
