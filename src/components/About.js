import React from "react";

const About = () => {
  return (
    <div className="Bigdiv">
      <div className="div-left">
        <h1>What is the purpose of a game review?</h1>
        <p>Just as making a videogame is
        about combining programming and entertainment, reviewing a videogame
        is about understanding how a game should function and whether that
        experience works as intended
        
        we basically just gave you what we think are top tier games for the moment 
        if you want to watch a youtube video to fully understand what joy games give <br/> <br/>
        CLICK HERE ===============================>>>>></p>
      </div>
      <div className="div-right">
        <iframe
          width="900"
          height="500"
          src="https://www.youtube.com/embed/PUZNXi_KEaQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
