import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Component/Users";
import Pagination from "./Component/Pagination";
import SearchBar from "./Component/SearchBar";

const App = () => {
  const [users, setUsers] = useState([]);
  const [api, setapi] = useState(
    "https://api.github.com/search/users?q=location:bangalore&per_page=100"
  );
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(10);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await axios.get(api).catch(err => setUsers([]));
      if (res) {
        setUsers(res.data.items);
      }
      setLoading(false);
    };
    fetchUser();
  }, [api]);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const apiUpdate = (query, queryBy) => {
    if (query.length === 0) {
      setapi(
        "https://api.github.com/search/users?q=location:bangalore&per_page=100"
      );
    } else {
      setapi(
        `https://api.github.com/search/users?q=${queryBy}:${query}&per_page=100`
      );
    }
  };
  return (
    <div>
      <header>GitHub Search</header>
      <SearchBar apiUpdate={apiUpdate} />
      <Users users={currentUser} loading={loading} />
      <Pagination
        userPerPage={userPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
