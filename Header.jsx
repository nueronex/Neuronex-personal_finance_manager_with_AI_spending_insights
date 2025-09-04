import React, { useState } from "react";
import { Search, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const pages = {
    Dashboard: "/",
    Transactions: "/transactions",
    Budgets: "/budgets",
    Reports: "/reports",
    Settings: "/settings",
    Profile: "/profile",
    "Upload Documents": "/upload",
  };

  const data = Object.keys(pages);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const userEmail = localStorage.getItem("userEmail");
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    } else {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const match = data.find(
        (item) => item.toLowerCase() === query.toLowerCase()
      );
      if (match) {
        navigate(pages[match]);
        setResults([]);
      }
    }
  };

  return (
    <header className="bg-slate-800 text-white px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/images/NEURONEX IMAGE.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold tracking-wide">NEURONEX</h1>
        </div>
        <div className="flex-1 max-w-md mx-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
              onKeyDown={handleKeyDown} 
              className="w-full bg-slate-700 text-white rounded-lg pl-10 pr-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
          {results.length > 0 && (
            <div className="absolute mt-2 w-full bg-white text-gray-900 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {results.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    navigate(pages[item]); 
                    setQuery(item);
                    setResults([]);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">
            Welcome, {userEmail ? userEmail : "Guest"}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
