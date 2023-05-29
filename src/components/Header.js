import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSunnyOutline,MdOutlineNightlight } from "react-icons/md";
import "../Style.css";
import { MdOutlineLightMode, } from "react-icons/md";

function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

const [theme, setTheme] = useState("")

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Muhammed
      </a>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/14yQjyuDAelCOzXSRixhx9r_szQbNwFSG/view?usp=share_link" target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
          <li className="w-8 h-8 text-xl leading-8 rounded full m-1">
            <MdOutlineLightMode className="cursor-pointer" />
          </li>
          <li>
            <MdOutlineNightlight className="cursor-pointer" />
          </li>
        </ul>
      </nav>
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
}

export default Header;
