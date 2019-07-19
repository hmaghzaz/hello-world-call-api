import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
const API_GITHUB = "https://api.github.com/users/ysfmag";

const GithubUserComponent = () => {
  const [data, setData] = useState({});
  const GetUserData = url => {
    axios.get(url).then(response => {
      setData(response.data);
    });
  };
  return (
    <div>
      <input
        onChange={e => {
          console.log("e", e.target.value);
        }}
      />
      <button onClick={() => GetUserData(API_GITHUB)}>github </button>

      {!_.isEmpty(data) && (
        <>
          <p>login : {data.login}</p>
          <p>name : {data.name}</p>
          <p>url : {data.url}</p>
          <p>public_repos:{data.public_repos}</p>
          <p>bio : {data.bio}</p>
        </>
      )}
    </div>
  );
};

export default GithubUserComponent;
