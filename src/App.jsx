import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar/NavbarMain";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectPage";
import AchievementPage from "./pages/AchievementPage";
import ScrollToTop from "./components/misc/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            border: "1px solid #F7CE46",
            padding: "16px",
            color: "#fff",
            background: "#1B1622",
          },
          iconTheme: {
            primary: "#1B1622",
            secondary: "#ffffff",
          },
        }}
      />

      <NavbarMain />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
