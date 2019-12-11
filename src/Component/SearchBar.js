import React, { useState } from "react";
import "../static/SearchBar.css";
export default function SearchBar({ apiUpdate }) {
  const [query, setQuery] = useState("");
  const [queryBy, setQueryBy] = useState("user");
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="Search value"
      />
      <select onChange={e => setQueryBy(e.target.value)}>
        <option>user</option>
        <option>location</option>
      </select>
      <button
        className="btn btn-primary"
        onClick={() => apiUpdate(query, queryBy)}
      >
        Search
      </button>
    </div>
  );
}
