import { ReactNode } from "react";
import Link from "./Link";

export default function AppHeader({ children }: { children: ReactNode }) {
  return (
    <div className="md:px-36 md:pt-8 fixed top-0 left-0 w-full z-50">
      <nav className="bg-yellow-700 p-2 md:p-5 shadow-md shadow-yellow-500 w-full flex flex-col md:flex-row justify-between">
        <Link
          to="/"
          className="text-white text-2xl md:text-3xl hover:text-cyan-500"
        >
          RestfulCountries
        </Link>
        <div className="w-full flex justify-end">{children}</div>
      </nav>
    </div>
  );
}
