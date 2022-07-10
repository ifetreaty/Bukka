import React, { useState, Fragment } from "react";

const Button = () => {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <Fragment>
      <button
        key={1}
        className={active === "2" ? "landing-page-button" : "active-btn"}
        id={"1"}
        onClick={handleClick}
      >
        Order Now
      </button>

      <button
        key={2}
        className={active === "2" ? "active-btn" : "landing-page-button"}
        id={"2"}
        onClick={handleClick}
      >
        View Menu
      </button>

      {/* <button
        key={3}
        className={active === "3" ? "active" : undefined}
        id={"3"}
        onClick={handleClick}
      >
        Jamal
      </button> */}
    </Fragment>
  );
};

export default Button;