import { useState, useEffect } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar  absolute top-0 z-10 p-12 w-full flex items-start justify-start gap-20 text-white font-bold  ">
      <div className={open ? "" : "logo m-auto sm:m-0"}>
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div
        className={
          open
            ? "absolute w-full top-0 left-0 min-h-screen bg-black opacity-70 "
            : "hidden "
        }
      ></div>
      <nav
        className={
          open
            ? "bg-white absolute top-0 left-0 w-full text-black py-8 shadow-2xl transition-all duration-500 visited:text-yellow "
            : "hidden md:block "
        }
      >
        <ul
          className={
            open
              ? "flex ml-16 gap-4 "
              : "absolute text-white left-38 flex gap-8 shadow-2xl transition-all duration-500 visited:text-yellow"
          }
        >
          <li>
            <a
              className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500"
              href="#home"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute top-8 left-8 lg:hidden black:fill-black z-30">
        <button onClick={() => setOpen(!open)}>
          <img
            src={open ? "images/icon-close.svg" : "images/icon-hamburger.svg"}
            className={open ? " -mt-0" : "mt-4"}
            alt="cart"
          />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
