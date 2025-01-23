import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  // Helper function to check authentication
  const checkAuthStatus = async () => {
    try {
      const { isAuthenticated } = getKindeServerSession();
      return await isAuthenticated(); // Returns true or false
    } catch (error) {
      console.error("Error checking authentication status:", error);
      return false; // Default to false if there's an error
    }
  };

  const isUserAuthenticated = await checkAuthStatus();

  // Common links for authenticated and unauthenticated users
  const links = (
    <>
      <li>
        <Link href={"/"}>HOME</Link>
      </li>
      <li>
        <Link href={"/profile"}>PROFILE</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">BLOG__GER</a>
      </div>

      {/* Navbar center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end">
        <ul>
          {isUserAuthenticated ? (
            <li>
              <LogoutLink
                className="btn btn-ghost bg-red-500 text-white font-bold"
                postLogoutRedirectURL="https://blogger-kappa-rust.vercel.app/"
              >
                Log out
              </LogoutLink>
            </li>
          ) : (
            <li>
              <LoginLink className="btn btn-ghost bg-green-500 text-white font-bold">
                Login
              </LoginLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
