"use client";

import Link from "next/link";

// import { usePathname } from "next/navigation";

// interface MainNavProps {
//   data: any;
// }

const MainNav = () => {
  //   const pathname = usePathname();

  //   const routes = data.map((route) => ({
  //     href: `/category/${route.id}`,
  //     label: route.name,
  //     active: pathname == `/category/${route.id}`,
  //   }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className="no-underline text-gray-500 font-medium text-sm transiton-colors hover:text-black"
      >
        Suits
      </Link>

      <Link
        href="/"
        className="no-underline text-gray-500 font-medium text-sm transiton-colors hover:text-black"
      >
        Shirts
      </Link>
    </nav>
  );
};

export default MainNav;
