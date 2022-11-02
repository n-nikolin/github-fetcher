import React from "react";

export default function ProgressBar() {
  return (
    <>
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
    </>
  );
}
