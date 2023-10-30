import logo from "../../assets/Tradcure.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [mobMenu, setMobMenu] = useState(false);

  const handleMenu = () => {
    setMobMenu(!mobMenu);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="z-50 w-[100%] fixed">
        <nav className="navbar bg-white w-[100%] m-auto p-1 shadow-2xl">
          <div className="flex justify-between">
            <div
              className="md:hidden lg:hidden mx-5 my-auto"
              onClick={handleMenu}
            >
              {!mobMenu ? (
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <FaBars className="cursor-pointer text-black text-2xl" />
                </IconContext.Provider>
              ) : (
                <></>
              )}
              {mobMenu ? (
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <FaArrowLeft className="cursor-pointer text-black text-2xl" />
                </IconContext.Provider>
              ) : (
                <></>
              )}
            </div>

            <div className="m-auto ml-5">
              <Link to="/">
                <img
                  style={{ width: "15rem" }}
                  className={`max-w-xs ${
                    isActive("/") ? "text-blue-500" : "text-black"
                  }`}
                  src={logo}
                  alt=""
                />
              </Link>
            </div>

            <ul className="hidden md:flex lg:flex justify-around md:mr-10">
              <li className="my-auto mx-3 md:mx-5 lg:mx-10">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("/") ? "text-blue-500" : ""
                  }`}
                  to={"/"}
                >
                  Shop
                </Link>
              </li>
              <li className="my-auto mx-3 lg:mx-5">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("/dashboard") ? "text-blue-500" : ""
                  }`}
                  to={"/dashboard"}
                >
                  Nutrients Plan
                </Link>
              </li>

              <li className="my-auto mx-3 lg:mx-5">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("/contactus") ? "text-blue-500" : ""
                  }`}
                  to={""}
                >
                  Consulting
                </Link>
              </li>

              <li className="my-auto mx-3 lg:mx-5">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("/contactus") ? "text-blue-500" : ""
                  }`}
                  to={""}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>

              <li className="md:mt-2 md:px-5">
                <button className="mt-0 font-bold border-2 border-black py-1 px-3 rounded-2xl">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
          <div>
            {mobMenu ? (
              <ul className="w-full bg-opacity-80 mx-auto p-4 relative top-5 transition-duration-400 ease-in-out md:hidden">
                <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={"/"}
                    onClick={handleMenu}
                  >
                    Shop
                  </Link>
                </li>
                <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={"/dashboard"}
                    onClick={handleMenu}
                  >
                    Nutrients Plan
                  </Link>
                </li>
                <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={"/contactus"}
                    onClick={handleMenu}
                  >
                    Consulting
                  </Link>
                </li>

                <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={"/contactus"}
                    onClick={handleMenu}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>
                <li className="text-center py-2">
                  <button className="mt-1 font-bold border-2 border-black py-1 px-3 rounded-2xl">
                    Sign In
                  </button>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
