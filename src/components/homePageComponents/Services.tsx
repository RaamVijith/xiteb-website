import "../../assets/styles/components/homePageComponents/Services.css";
import { useInView } from "react-intersection-observer";
import phone from "../../assets/phone.png";
import imac from "../../assets/imac.png";
import lap from "../../assets/lap.png";
import { motion } from "framer-motion";

const Services = () => {
  const { ref: div1, inView: div1InView } = useInView({ threshold: 0.2 });
  const { ref: div2, inView: div2InView } = useInView({ threshold: 0.8 });
  const { ref: div3, inView: div3InView } = useInView({ threshold: 0.2 });
  const { ref: div4, inView: div4InView } = useInView({ threshold: 0.8 });
  const { ref: div5, inView: div5InView } = useInView({ threshold: 0.2 });

  return (
    <section className="services">
      <div className="services-left">
        {div1InView && (
          <div className="box1">
            <motion.div
              
              animate={{
                opacity: 1,
                y: [10, -30, 10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              <img
                className="box1-img"
                src="https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/slider/seo.webp"
                alt="welcome pic"
              />
            </motion.div>
          </div>
        )}
        {div2InView && (
          <div className="box2">
             <motion.div
              animate={{
                opacity: 1,
                y: [10, -30, 10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
            <img className="box2-img" src={phone} alt="welcome pic" />
            </motion.div>
          </div>
        )}
        {div3InView && (
          <div className="box3">
             <motion.div
      animate={{
        opacity: 1,
        y: [10, -30, 10],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
            <img className="box3-img" src={imac} alt="welcome pic" />
            </motion.div>
          </div>
        )}
        {div4InView && (
          <div className="box4">
             <motion.div
      animate={{
        opacity: 1,
        y: [10, -30, 10],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
            <img className="box4-img" src={lap} alt="welcome pic" />
            </motion.div>
          </div>
        )}
        {div5InView && (
          <div className="box5">
             <motion.div
      animate={{
        opacity: 1,
        y: [10, -30, 10],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
            <img
              className="box1-img"
              src="https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/slider/games.webp"
              alt="welcome pic"
            />
            </motion.div>
          </div>
        )}
      </div>
      <div className="services-right">
        <div ref={div1} className="div1">
          <h1>Web Design</h1>
          <h5>Let your Web do the Selling</h5>
          <p>
            We develop SEO Friendly Custom websites of any scope & complexity
            starting from a simple 5 pages informative website to an eCommerce
            platform with payment gateways.
            <br />
            <br />
            We convert your simple idea into a digital platform/online store
            which can generate sales as a lead-generating engine.
            <br />
            <br />
            Your primary objectives of the website will be simply met with UX
            driven UI designs that we provide.
          </p>
          <a>LEARN MORE</a>
        </div>

        <div ref={div2} className="div1">
          <h1>Mobile Apps</h1>
          <h5>Take your brand to Clients' Fingertips</h5>
          <p>
            We develop native (iOS & Android) & hybrid mobile apps with enhanced
            user experiences.
            <br />
            <br />
            It is understood that a simple Mobile app can transform your
            business & deliver excellent customer experience whilst taking your
            brand to clients fingertips which will position your business as an
            enriched entity in lucrative potential segments.
          </p>
          <a>LEARN MORE</a>
        </div>

        <div ref={div3} className="div1">
          <h1>Bespoke Software</h1>
          <h5>Systematize Your Business</h5>
          <p>
            Professionals know the importance of Software solutions & how such
            solutions can take their companies to the next level.
            <br />
            <br />
            Bespoke software is unlike off-the-shelf software & specifically
            designed for key business requirements which are also known as
            custom software or tailor-made software solutions.
            <br />
            <br />
            Wise companies invest in bespoke software, whereas the most
            important module/s can be developed first & expanded to other
            modules as & when needed, rather than forcing your employees to work
            on a solution which is already developed for a different purpose.
          </p>
          <a>LEARN MORE</a>
        </div>

        <div ref={div4} className="div1">
          <h1>SEO/SEM</h1>
          <h5>Your Virtual Presence </h5>
          <p>
            Having a world-class website is not enough for your business, if
            your website is not optimized. Paid and/or Organic Optimization
            would be beneficial where your company is brought to the top three
            results, when your potential clients search you on Google, Bing,
            Yandex, Yahoo or any other search engine.
            <br />
            <br />
            Select SEO/SEM services provider who can ‘walk the talk’. Xiteb®
            being a web development company managed to present itself in top 3
            Google search results, when potential clients search us online for
            keywords such as ‘best web design companies in sri Lanka’.
          </p>
          <a>LEARN MORE</a>
        </div>

        <div ref={div5} className="div1">
          <h1>Games</h1>
          <h5>Unique customer experience</h5>
          <p>
            Entertainment Branded Games create greater brand visibility which
            drives customer loyalty & unique customer experience through
            engagement. Moreover, Brand Marketers can gather valuable marketing
            & customer information. An interactive fun game itself is a strategy
            that blurs the line between entertainment & marketing which builds a
            more effective Brand Space with the right Brand Position.
          </p>
          <a>LEARN MORE</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
