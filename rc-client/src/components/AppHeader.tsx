import { ReactNode } from "react";
import Link from "./Link";


export default function AppHeader({ children }: { children: ReactNode }) {
  return (
    <div className="px-16 py-8 absolute top-0 left-0 w-full">
      <nav className="bg-yellow-700 p-5 shadow-md shadow-yellow-500 w-full flex justify-between">
        <Link to="/" className="text-white text-3xl hover:text-cyan-500">RestfulCountries</Link>
        {children}
      </nav>
    </div>
  );
}
