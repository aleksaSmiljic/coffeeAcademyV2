import { Link } from "react-router-dom";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
  //   ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useLoginStore } from "../stores/LoginStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLogin, admin, login } = useLoginStore();

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const user = JSON.parse(localStorage.getItem("user"));
    if (admin?.isLogin) {
      login(admin?.email, admin?.password);
      return;
    }
    if (user?.isLogin) {
      login(user?.email, user?.password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let Links = [
    { name: "Home", link: "/" },
    admin
      ? { name: "Admin", link: "/admin" }
      : { name: "Status", link: "/status" },
    isLogin ? "" : { name: "Register", link: "/register" },
    isLogin
      ? { name: "Logout", link: "/login" }
      : { name: "Login", link: "/login" },
  ];

  function handleCloseClick() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  function handleOpenClick() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <header
        className={`top-0 sticky z-20 p-2 border-b border-black w-full  bg-white md:flex md:items-center md:justify-between ${
          isOpen ? "h-screen" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex item-center top-2 gap-2">
            <Link to="/">
              <img
                onClick={handleCloseClick}
                src="logo.png"
                alt="caffe-academy-logo"
                className="h-auto w-40 py-2 cursor-pointer "
              />
            </Link>
          </div>
          <span className="flex items-center">
            {/* {cart?.length > 0 ? (
              <span
                onClick={handleCloseClick}
                className="w-10 h-10 cursor-pointer md:hidden block"
              >
                <Link to="/cart">
                  <ShoppingCartIcon className="" />
                </Link>
              </span>
            ) : null} */}
            <span
              onClick={handleCloseClick}
              className="w-10 h-10 cursor-pointer md:hidden block"
            >
              <Link to="/login">
                <UserCircleIcon />
              </Link>
            </span>
            <span className="w-10 h-10 cursor-pointer md:hidden block">
              {isOpen ? (
                <XMarkIcon onClick={handleCloseClick} />
              ) : (
                <Bars3Icon onClick={handleOpenClick} />
              )}
            </span>
          </span>
        </div>
        <nav
          className={`md:flex md:items-center md:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          {/* {cart?.length > 0 ? (
            <li
              onClick={handleCloseClick}
              className="hover:text-blue-400 duration-500 block md:inline-block mt-2 md:mt-2 mr-6"
            >
              <Link to="/cart">Cart</Link>
            </li>
          ) : null} */}
          <ul className="md:flex items-center justify-between ">
            {Links.map((link) => (
              <li
                onClick={handleCloseClick}
                key={link.link}
                className={`hover:text-blue-400 duration-500 block md:inline-block mt-2 md:mt-2 ${
                  isLogin ? "md:mr-6" : "md:mr-10"
                } ${
                  link.name === "Login" || link.name === "Logout"
                    ? "md:text-white md:bg-[#248CC5] md:hover:bg-[#164864] md:hover:text-white duration-300 rounded-md md:py-2 md:px-4"
                    : ""
                }`}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
