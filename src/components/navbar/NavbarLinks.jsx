import { Link, useNavigate, useLocation } from "react-router-dom";


const links = [
  { link: "/", hash: "#about", section: "about" },
  // { link: "/skills", section: "skills" },
  { link: "/achievements", section: "achievements" },
  { link: "/projects", section: "projects" },
  { link: "/", hash: "#contact", section: "contact me" }, // scroll target
];

const NavbarLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (path, hash) => {
  if (location.pathname === path) {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate(path, { state: { scrollTo: hash } });
  }
};

  return (
    <ul className="flex gap-6 text-center lg:flex-row lg:relative sm:flex-col sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] sm:bg-darkViolet/30 backdrop-blur-lg lg:bg-darkViolet sm:w-full p-6">
      {links.map((item, index) => (
        <li key={index} className="group">
          {item.hash ? (
            <button
              onClick={() => handleScrollLink(item.link, item.hash)}
              className="text-xl font-special text-white font-normal group-hover:text-yellow transition-all duration-500"
            >
              {item.section}
            </button>
          ) : (
            <Link
              to={item.link}
              className="text-xl font-special text-white font-normal group-hover:text-yellow transition-all duration-500"
            >
              {item.section}
            </Link>
          )}
          <div className="mx-auto bg-yellow h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
