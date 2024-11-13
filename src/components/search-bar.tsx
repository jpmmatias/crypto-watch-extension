import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="flex w-full gap-2">
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      placeholder="Search for a coin"
      className="w-full p-2 mb-2 border border-gray-300 rounded-md"
    />
    <button
      onClick={() => onChange("")}
      className="px-4 py-2 text-white bg-red-500 rounded-md"
    >
      Clear
    </button>
  </div>
);
