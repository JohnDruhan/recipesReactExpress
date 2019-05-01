import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>React Recipe Finder</h1>
      <h3>Search Below</h3>
      <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
        Powered by Recipe Puppy
      </a>
    </div>
  );
}

export default Jumbotron;
