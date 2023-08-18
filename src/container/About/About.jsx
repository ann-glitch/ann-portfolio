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
          I am a versatile and inquisitive developer proficient in both front
          and back-end development. With a constant thirst for learning and a
          natural inclination for problem-solving, I excel in collaborative,
          dynamic team settings. My strong analytical skills enable me to break
          down intricate problems and come up with creative solutions. This
          showcases how dedicated I am to pushing things forward.
          <br />
          <br />
          My enthusiasm for exploration extends beyond technology. A testament
          to this is my statement to my sister that I would readily volunteer
          for NASA's exploratory missions to new worlds, an offer that remains
          open. This eagerness to embrace the unknown mirrors my proactive
          approach to professional growth. Whether contributing within a team or
          working independently, I am dedicated to achieving impactful results.
          <br />
          <br />
          Away from the keyboard, I find solace in restful slumber or watching
          murder documentaries to keep my curiosity alive.
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
