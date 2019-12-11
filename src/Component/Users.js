import React from "react";
import "../static/Users.css";
const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  if (users.length <= 0) {
    return <h2>No results found..</h2>;
  }
  const userList = users.map(user => (
    <li className="card " key={user.id}>
      <img
        className="card-img-top"
        src={user.avatar_url}
        alt={user.login}
        height="250px"
      />
      <div className="card-body">
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          <p className="card-title">{user.login}</p>
        </a>
      </div>
    </li>
  ));

  return <ul className="list-items">{userList}</ul>;
};

export default Users;
