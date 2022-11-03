import { useState, useEffect } from "react";
import axios from "axios";
import github from "../assets/github.png";

export default function Repo({ item, index }) {
  const [languages, setLanguages] = useState([]);
  const [total, setTotal] = useState();

  const getTotal = (resp) => {
    let res = 0;
    for (let k in resp) {
      res += resp[k];
    }
    return res;
  };

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/n-nikolin/${item.name}/languages`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        setLanguages(res.data);
        setTotal(getTotal(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper" key={item.id} id={index}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {item.topics.map((item, key) => {
        return (
          <p className="topics" key={key}>
            {item}
          </p>
        );
      })}
      <div className="line-chart">
        {Object.entries(languages).map(([key, value], i) => {
          return (
            <span
              className="progress-bar-section"
              key={i}
              id={key.toLowerCase()}
              style={{
                width: `${(value / total) * 100}%`,
              }}
            ></span>
          );
        })}
      </div>
      <ul>
        {Object.entries(languages).map(([key, value], i) => {
          return (
            <li>
              <span key={i} className="circle" id={key.toLowerCase()}></span>
              {key}: {((value / total) * 100).toFixed(1)}%
            </li>
          );
        })}
      </ul>
      <a href={item.html_url}>
        <img src={github} alt="" />
      </a>
    </div>
  );
}
