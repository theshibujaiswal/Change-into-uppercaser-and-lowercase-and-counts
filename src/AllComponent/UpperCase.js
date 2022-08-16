import React, { useState } from "react";

import "./UpperCase.css";

const UpperCase = () => {
  const bgcolor = {
    backgroundColor: "yellow",
  };
  const [text, changetext] = useState("type Text");
  const change = () => {
    changetext(text.toUpperCase());
  };
  const lower = () => {
    changetext(text.toLowerCase());
  };

  const Clear = () => {
    changetext("");
  };
//   const copy = () => {
//     changetext(text.select);
//     // navigator.clipboard.writeText(text.value)
//   };

  const onchange = (e) => {
    changetext(e.target.value);
  };
  let DarkMode = "Darkmode";
  const container = {
    backgroundColor: "skyblue",
    color: "black",
  };
  const [color, changevalue] = useState(container);
  const [Dark, darkchange] = useState(DarkMode);
  let darkmode = () => {
    if (color.backgroundColor == "skyblue" && DarkMode == "Darkmode") {
      darkchange("LightMODE");
      changevalue({
        backgroundColor: "black",
        color: "white",
      });
    } else if (color.backgroundColor == "black" && DarkMode == "Darkmode") {
      darkchange("Darkmode");
      changevalue({
        backgroundColor: "skyblue",
        color: "black",
      });
    }
  };

  return (
    <div className="container-fluid" style={bgcolor}>
      <div className="container" style={color}>
        <div className="row">
        <div className="col">
        <h1> Change text into UPPARCASE</h1>
        </div>
          
        </div>
        <textarea
          className="textarea"
          type="Text"
          onChange={onchange}
          value={text}
          rows="12"
        />
        <br></br>
        <button className="btn btn-primary mx-2" onClick={change}>
          UPPERCASE
        </button>
        <button className="btn btn-primary  mx-2" onClick={lower}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={Clear}>
          ClearText
        </button>

        {/* <button className="btn btn-primary mx-2" onClick={copy}>
         Copy Text
        </button> */}

        <h3>
          Word Count: {text.split(" ").length}
          <span> Charector Count:{text.length}</span>
        </h3>

        <h3>Text Preview</h3>
        <p>{text}</p>

        <button className="btn btn-secondary mx-2" onClick={darkmode}>
          {Dark}
        </button>
      </div>
    </div>
  );
};

export default UpperCase;
