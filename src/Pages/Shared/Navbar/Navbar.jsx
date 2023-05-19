import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/car.png";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "text-primary2" : isPending ? "pending" : ""
                }
              >
                <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
                  <NavLink
                    to="/alltoys"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-primary2" : isPending ? "bg-white" : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                      All Toys
                    </span>
                  </NavLink>
                </li>
            {user ? (
              <>
                
                <li>
                  <NavLink
                    to="/mytoys"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-primary2" : isPending ? "pending" : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                      My Toys
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addtoy"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-primary2" : isPending ? "pending" : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                      Add Toy
                    </span>
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isActive ? "text-primary2" : isPending ? "pending" : ""
                }
              >
                <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                  Blog
                </span>
              </NavLink>
            </li>
            <li>
              {user ? (
                <Button
                  onClick={logOut}
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                >
                  Log out
                </Button>
              ) : (
                <Link to="/login">
                  <Button outline={true} gradientDuoTone="cyanToBlue">
                    Login
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-3">
          <img className="w-11 h-11 md:w-20 md:h-20" src={logo} alt="" />
          <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]">
            TurboDrive
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-7">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "text-primary2" : isPending ? "pending" : ""
          }
        >
          <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
            Home
          </span>
        </NavLink>
        <NavLink
                    to="/alltoys"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-primary2" : isPending ? "pending" : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                      All Toys
                    </span>
                  </NavLink>
        {user ? (
              <>
                  
                  <NavLink
                    to="/mytoys"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-primary2" : isPending ? "pending" : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                      My Toys
                    </span>
                  </NavLink>
                  <NavLink
                    to="/addtoy"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-primary2" : isPending ? "pending" : ""
                    }
                  >
                    <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
                      Add Toy
                    </span>
                  </NavLink>
              </>
            ) : (
              ""
            )}
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isActive ? "text-primary2" : isPending ? "pending" : ""
          }
        >
          <span className="text-base font-semibold hover:text-primary1 ease-out duration-300">
            Blog
          </span>
        </NavLink>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 items-center">
            <div
              className="tooltip tooltip-left avatar"
              data-tip={user.displayName}
            >
              <div className="w-14 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <Button
              className="hidden lg:block"
              onClick={logOut}
              outline={true}
              gradientDuoTone="cyanToBlue"
            >
              Log out
            </Button>
          </div>
        ) : (
          <Link className="hidden lg:block" to="/login">
            <Button outline={true} gradientDuoTone="cyanToBlue">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
