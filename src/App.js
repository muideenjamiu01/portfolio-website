import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/re-components/sidebar1";
import SidebarTwo from "./components/re-components/SidebarTwo";
import SelectMenu from "./components/re-components//SelectMenu";
import { BrowserRouter } from "react-router-dom";
import CountrySelected from "./components/re-components/CountrySelected";
import UserProfileDropDown from "./components/re-components/UserProfileDropDown";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UserProfileDropDown /> */}
        {/* <CountrySelected /> */}
        {/* <SidebarTwo /> */}
        {/* <SelectMenu /> */}
        <Header />
        <Hero />
        <About />
        <Projects />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
