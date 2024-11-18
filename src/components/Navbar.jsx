import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Car, LogOut, LogIn, UserPlus, Plus } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-teal-400 transition-colors"
          >
            <Car className="h-6 w-6 text-teal-400" />
            <span className="font-extrabold text-2xl tracking-wide">AutoHub</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium transition-colors
                ${location.pathname === "/" ? "text-teal-400" : ""}`}
            >
              Home
            </Link>

            {user && (
              <Link
                to="/cars"
                className={`text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${location.pathname === "/cars" ? "text-teal-400" : ""}`}
              >
                Browse Cars
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {user && location.pathname !== "/create" && (
              <Link
                to="/create"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-teal-500 
                  hover:bg-teal-600 rounded-lg shadow-md transition-all transform hover:scale-105"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Car
              </Link>
            )}

            {user ? (
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-600 
                  hover:bg-red-700 rounded-lg shadow-md transition-all transform hover:scale-105"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                {location.pathname !== "/login" && (
                  <Link
                    to="/login"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-teal-500 
                      hover:bg-teal-600 rounded-lg shadow-md transition-all transform hover:scale-105"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                )}
                {location.pathname !== "/register" && (
                  <Link
                    to="/register"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-teal-700 bg-gray-100 
                      hover:bg-gray-200 rounded-lg shadow-md transition-all transform hover:scale-105"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Register
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center px-4 py-2">
        <button className="text-gray-300 hover:text-teal-400">
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
