import "../assets/styles/pages/ProjectsPage.css";
import SayHello from "../components/homePageComponents/SayHello";
import Footer from "../components/homePageComponents/Footer";
import CardDesign from "../components/CardDesign";

const ProjectsPage = () => {
  return (
    <div className="project-top-div">
    <div className="projectsPage">
      {/* Section1 */}
      <section className="welcome">
        <div className="project-left">
          <h1>Xiteb since 2010</h1>
          <h2>
            Our <span>Projects</span>
          </h2>
          <p>Some of our recent & main projects</p>
        </div>
        <div className="welcome-right">
          <img
            src="https://cdn-lfcpl.nitrocdn.com/qrIyUeHSNDIqaydCtPMRQNGXljIEdFtW/assets/images/optimized/rev-9221f6f/xiteb.com/img/projects/project.webp"
            alt="welcome pic"
          />
        </div>
      </section>

      {/* Section2 */}
      <h1>Websites</h1>

      <section className="projectPage-section2">
        <CardDesign />
        <CardDesign />
        <CardDesign />
        <CardDesign />
        <CardDesign />
        <CardDesign />
        <CardDesign />
        <CardDesign />
      </section>
      
      
    </div>
    <SayHello />
    <Footer />
    </div>
  );
};

export default ProjectsPage;
