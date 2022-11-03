import { useState, useEffect } from "react";
import Repo from "./components/Repo";
import axios from "axios";

import "./App.css";

function App() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/n-nikolin/repos", {
        // Authorization: "token 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",
      })
      .then((res) => {
        // console.log(res.data);
        setProjectData(res.data);
      });
  }, []);
  return (
    <div className="conatainer">
      <h1>my repos</h1>
      {projectData.map((item, index) => {
        return <Repo item={item} index={index} key={index} />;
      })}
    </div>
  );
}

export default App;
