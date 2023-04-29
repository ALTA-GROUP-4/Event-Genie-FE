import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TbUserCircle,
  TbClipboardText,
  TbTicket,
  TbLogout,
} from "react-icons/tb";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

export const Navbar: FC = () => {
  const [cookie, , removeCookie] = useCookies(["token", "email"]);
  const checkToken = cookie.token;
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you Sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        removeCookie("token", { path: "/" });
        removeCookie("email", { path: "/" });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success Log Out",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });
  };

  const navAfterLogin = () => {
    return (
      <div className="flex justify-between items-center gap-4 sm:gap-8 md:gap-12 xl:gap-16 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 ">
        <div className="hs-dropdown relative inline-flex font-semibold">
          <button
            id="hs-dropdown"
            type="button"
            className=" hs-dropdown-toggle [--placement:top-left] inline-flex justify-center items-center gap-2 rounded-md text-sm bg-transparent text-white shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            <img src="./users.png" alt="" className="w-10" />
            <svg
              className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            aria-labelledby="hs-dropdown-basic"
          >
            <Link to="/users">
              <h3 className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                <TbUserCircle />
                Profile
              </h3>
            </Link>
            <Link to="/my-event">
              <h3 className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                <TbClipboardText />
                My Event
              </h3>
            </Link>
            <Link to="/my-ticket">
              <h3 className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                <TbTicket />
                My Ticket
              </h3>
            </Link>
            <button
              className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              onClick={() => handleLogOut()}
            >
              <TbLogout className="text-lg" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-@19345E text-xl py-5 dark:bg-@264653">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="./Logo1.png" alt="" />
          </Link>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-@EFF1F3 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex justify-between items-center gap-4 sm:gap-8 md:gap-12 xl:gap-16 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            {checkToken ? (
              navAfterLogin()
            ) : (
              <div className="flex gap-5">
                <Link to="/login">
                  <button
                    id="button-update-users"
                    type="submit"
                    className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  >
                    Login
                  </button>
                </Link>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
