import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="App">
      <h1>my repos</h1>
      {projectData.map((item, index) => {
        return (
          <div key={index} id={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.topics.map((item, key)=>{
              return <span key={key}>{item}</span>
            })}
            {/* TODO: return languages with values */}
            <a href={item.html_url}>link</a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
