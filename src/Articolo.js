import React, { useState } from "react";
import { data } from "./data";
import "./index.css";

const Articolo = () => {
  const [articolo, setArticolo] = useState(data);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  const modeClass = isDarkModeOn ? "dark-mode" : "light-mode";

  return (
    <div className={modeClass}>
    <div className="container" >
      <button onClick={toggleDarkMode} className="btn">Toggle dark mode</button>
      
      {articolo.map((el) => {
        const { id, title, body } = el;
        return (
          <article key={id} >
            <h6>{title}</h6>
            <p>{body}</p>
          </article>
        );
      })}
    </div>
    </div>
  );
};

export default Articolo;
