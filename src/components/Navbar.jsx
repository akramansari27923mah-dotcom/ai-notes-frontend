import { useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Workflow,
  Layers,
  Rocket,
  Loader,
  LoaderCircle,
  LogOut,
  KeyRound,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AuthCon } from "../contexts/auth.context";
import useAuth from "../hooks/auth.hook";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("0%");
  const [showProfile, setShowProfile] = useState(false);
  const { user, loader } = AuthCon();
  const { logout } = useAuth();

  return (
    <div
      id="Home"
      className="flex  justify-between items-center py-4 md:px-8 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-400 border-b  border-white/30 "
    >
      <div className="flex justify-center items-center gap-2">
        <img src="logo.png" alt="Logo" />
        <h1 className="md:text-2xl text-lg font-bold italic text-white">
          NoteCraft AI
        </h1>
      </div>

      {/* for leptop */}
      <div className="md:block hidden">
        <ul className="flex justify-center items-center gap-5 text-white font-semibold ">
          <li className="cursor-pointer">
            <a href="#Features">Features</a>
          </li>
          <li className="cursor-pointer">
            <a href="#Works">How it Works</a>
          </li>
          <li className="cursor-pointer">
            <a href="#Perfect">Perfect For</a>
          </li>
          <Link
            to={"/create"}
            className="px-4 py-2 rounded-lg bg-white text-black shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75"
          >
            Get Started
          </Link>
          <Link
            to={"/dashboard"}
            className="px-4 py-2 rounded-lg bg-white text-black shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75"
          >
            Dashboard
          </Link>
          <Link
            to={"/aitutor"}
            className="px-4 py-2 rounded-lg bg-white text-black shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75"
          >
            AI Tutor
          </Link>
          {user && (
            <div
              onClick={() => setShowProfile(!showProfile)}
              className="capitalize py-1 px-3 font-bold text-lg rounded-full bg-white text-black hover:scale-105 transition-all duration-300 active:scale-75 cursor-pointer shadow-lg"
            >
              {user?.username[0]}
            </div>
          )}
          {!user && (
            <li className="px-4 py-2 animate__animated animate__rubberBand  animate__repeat-3 rounded-lg bg-green-500 active:scale-75 transition-all duration-300 hover:opacity-80">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}
          {showProfile && user && (
            <div className="absolute top-[70px] right-[60px] z-20 animate-fadeIn">
              <div className="w-[270px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 space-y-5">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                    {user?.username?.charAt(0).toUpperCase()}
                  </div>

                  <h2 className="text-gray-800 font-semibold">
                    {user?.username || (
                      <LoaderCircle
                        className="animate-spin mx-auto"
                        size={16}
                      />
                    )}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {user?.email || (
                      <LoaderCircle
                        className="animate-spin mx-auto"
                        size={14}
                      />
                    )}
                  </p>
                </div>

                <div className="border-t"></div>

                <div className="space-y-3">
                  <Link
                    to="/change-password"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-200 hover:scale-[1.03]"
                  >
                    <KeyRound size={18} />
                    Change Password
                  </Link>

                  <button
                    onClick={() => {
                      (logout(), setShowProfile(false));
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all duration-200 active:scale-95"
                  >
                    {loader ? (
                      <LoaderCircle className="animate-spin" size={18} />
                    ) : (
                      <>
                        <LogOut size={18} />
                        Logout
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}{" "}
        </ul>
      </div>

      {/* for mobile */}
      <div className="md:hidden cursor-pointer text-white">
        <Menu onClick={() => setOpenMenu("45%")} />
      </div>

      {/* mobile menu bar */}
      <div
        style={{ width: openMenu }}
        className="fixed  md:hidden top-0 right-0 h-screen overflow-hidden transition-all duration-300 bg-gray-900 z-10"
      >
        <button className="text-white p-2" onClick={() => setOpenMenu("0%")}>
          <X />
        </button>

        <ul className="flex flex-col items-center gap-6 text-white">
          <li className="cursor-pointer">
            <a href="#Features" className="flex items-center gap-2">
              <Sparkles size={18} />
              Features
            </a>
          </li>

          <li className=" cursor-pointer">
            <a href="#Works" className="flex items-center gap-2">
              <Workflow size={18} />
              How it Works
            </a>
          </li>

          <li className=" cursor-pointer">
            <a href="#Perfect" className="flex items-center gap-2">
              <Layers size={18} />
              Perfect For
            </a>
          </li>

          <Link
            to={"/dashboard"}
            className="px-4 py-2 rounded-lg bg-white/40 text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75"
          >
            Dashboard
          </Link>

          <Link
            to={"/aitutor"}
            className="px-4 py-2 rounded-lg bg-white/40 text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 active:scale-75"
          >
            AI Tutor
          </Link>

          <Link
            to={"/create"}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/40 cursor-pointer hover:bg-white/60 transition text-nowrap"
          >
            <Rocket size={18} />
            Get Started
          </Link>

          {user && (
            <Link
              to="/change-password"
              className="flex items-center text-nowrap justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-200 hover:scale-[1.03]"
            >
              <KeyRound size={18} />
              Change Password
            </Link>
          )}

          {!user ? (
            <li className="px-4 py-2 rounded-lg bg-green-500 active:scale-75 transition-all duration-300 hover:opacity-80">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          ) : (
            <li
              className="px-4 py-2 rounded-lg bg-red-500 active:scale-75 transition-all duration-300 hover:opacity-80 cursor-pointer"
              onClick={logout}
            >
              {loader ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                "Logout"
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
