import { useState, useEffect } from "react";
import Repo from "./components/Repo";
import axios from "axios";

import "./App.css";

function App() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/user/repos", {
        headers: {
          Authorization: "Bearer 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",
        },
      })
      .then((res) => {
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
