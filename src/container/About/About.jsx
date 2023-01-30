import "./About.scss";

import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  return (
    <>
      <h2 className="head-text header">
        About<span> Me</span>
      </h2>

      <div className="app__profiles">
        <p className="p-text para">
          A curious and self-starter developer with a year of experience
          building backend elements and connecting applications to web-based
          services. Learning new things and having new experiences are one of my
          obsessions. I always tell my sister that if NASA ever needed
          volunteers to investigate a new world they discovered, I would sign
          up. (NASA if you are reading this, my offer is still very much open
          hehe). I pride myself in my excellent analytical and problem-solving
          skills and I enjoy collaborative work in a dynamic, challenging and
          team-based environment.
          <br />
          <br />
          When I'm not coding, I'm definitely sleeping or watching a murder
          documentary.
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
