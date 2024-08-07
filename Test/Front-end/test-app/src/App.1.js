import React from 'react';
import axios from "axios";
import { useState } from 'react';


export default function App() {

  const [post, setPost] = useState([]);

  const handleClick = () => {
    axios.get('https://localhost:7145/api/Vehicle')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const details = res.data;
        setPost(details);

      });

  };
  return (
    <div>
      <button className="button" onClick={handleClick}>Show the content</button>

      <div>
        <ul>
          {post.map((item) => (


            <li>{item.brand}{item.model}</li>

          ))}
        </ul>

      </div>

      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>

        <ul class="dropdown-menu">
          {post.map((item) = )}
          <li><a class="dropdown-item" href="#">Action</a></li>

        </ul>
      </div>
    </div>

  );
}
