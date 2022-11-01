import { useState, useEffect } from "react";
import axios from "axios";

import github from "./assets/github.png";

import "./App.css";

function App() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    axios.get("https://api.github.com/users/n-nikolin/repos").then((res) => {
      console.log(res.data);
      setProjectData(res.data);
    });
  }, []);
  return (
    <div className="conatainer">
      <h1>my repos</h1>
      {projectData.map((item, index) => {
        return (
          <div className="wrapper" key={index} id={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.topics.map((item, key) => {
              return (
                <span className="topics" key={key}>
                  {item}
                </span>
              );
            })}
            {/* TODO: return languages with values */}
            <div className="line-chart">
              <span className="green-background"></span>
              <span className="red-background"></span>
              <span className="orange-background"></span>
            </div>
            <ul>
              <li>
                <span className="circle"></span>
                javascript 84%
              </li>
              <li>
                <span className="circle"></span>
                html 11%
              </li>
              <li>
                <span className="circle"></span>
                css 5%
              </li>
            </ul>
            <a href={item.html_url}>
              <img src={github} alt="" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
