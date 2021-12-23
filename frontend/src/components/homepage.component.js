import React, { Component } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
     <div className="homepage-background">
      <p>This is where the meals will sit</p>
          <button><Link to="/register" style={{ "text-decoration": "none"}}>Register</Link></button>
            <button><Link to="/login" style={{ "text-decoration": "none"}}>Login</Link></button>
        </div>
    )
}

export default Home;