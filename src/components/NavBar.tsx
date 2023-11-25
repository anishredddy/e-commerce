import Link from "next/link";
import MainNav from "./main-nav";
import NavBarShop from "./NavBar-shop";

const NavBar = () => {
  return (
    <div className="border-b">
      <div className="ml-2 mr-6 w-full ">
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center  h-16">
          <Link
            href="/"
            className="ml-4 flex lg:ml-0 gap-x-2 no-underline font-bold text-xl text-gray-900"
          >
            STORE
          </Link>
          <MainNav />
          <NavBarShop />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
