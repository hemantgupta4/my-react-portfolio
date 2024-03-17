import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "a Developer. . .",
          "a Freelancer. . .",
          "a Learner. . .",
          "a Tech Enthusiast. . .",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
