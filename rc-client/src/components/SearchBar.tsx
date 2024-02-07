import { useState } from "react";

interface SearchBarProps {
  className?: string;
  setParams: (params: URLSearchParams) => void;
}

const SearchBar = ({ className, setParams }: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    if (search) {
      const params = new URLSearchParams();
      params.set("search", search);
      setParams(params);
    } else {
      const params = new URLSearchParams();
      setParams(params);
    }

  }
  return (
    <div className={className}>
      <input
        className="bg-gray-100 px-2 py-1 rounded-md border-2 border-gray-400"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-yellow-600 text-white font-bold px-2 py-1 rounded-md ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
