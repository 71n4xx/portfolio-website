import HeroMain from "../components/hero/HeroMain";
import AboutSecMain from "../components/aboutSection/AboutSecMain";
import SkillsSectionMain from "../components/skillsSection/SkillsSectionMain";
import ProjectSectionMain from "../components/projectSection/ProjectSectionMain";
import AwardsMain from "../components/awardsSection/AwardsMain";
import ContactMain from "../components/contactSection/ContactMain";
import Footer from "../components/Footer";
import SoftSkills from "../components/SoftSkills";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);
      if (el) {
        // Slight delay to ensure element is in DOM
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      <section id="about">
        <HeroMain />
      </section>
      <SoftSkills/>

      <AboutSecMain />
      <SkillsSectionMain />
      <ProjectSectionMain />
      <AwardsMain />
      <section id="contact">
        <ContactMain />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
