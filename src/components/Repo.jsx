import { useState, useEffect } from "react";
import axios from "axios";
import github from "../assets/github.png";

export default function Repo({ item, index }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/n-nikolin/${item.name}/languages`, {
        headers: {
          authorization: "token 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",
        },
      })
      .then((res) => {
        console.log(res.data);
        setLanguages(res.data);
      });
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
        <span className="green-background"></span>
        <span className="red-background"></span>
        <span className="orange-background"></span>
      </div>
      {/* TODO: return languages with values and make progressbar dynamic*/}
      {Object.entries(languages).map(([key, value], i) => {
        return (
          <p className="languages" key={i}>
            {key}, {value}
          </p>
        );
      })}
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
}
