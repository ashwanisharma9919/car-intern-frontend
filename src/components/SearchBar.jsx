import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = () => {
  const { handleSearch } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (query.trim() === "") {
      alert("Please enter a search query");
      return;
    }
    await handleSearch(query);
    setQuery("");
    navigate("/search");
  };

  return (
    <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden w-full max-w-md mx-auto">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search cars..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-2 text-gray-700 outline-none placeholder-gray-400"
      />

      {/* Search Button */}
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
      >
        <Search className="h-5 w-5" />
        <span className="ml-2 text-sm font-medium">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
