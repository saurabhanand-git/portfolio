import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { VscDebugBreakpointData } from "react-icons/vsc";
import "../experience/Experience.css";
import "./Achievement.css";

const Achievement = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 1200,
    });
  }, []);
  return (
    <section id="achievement" data-aos="fade-up">
      <h5>What I have Achieved</h5>
      <h2>My Achievements</h2>

      <div className="container experience__container achievement__container">
        <div className="experiences">
          <div className="experience__content">
            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons" />
              <h4>5 star at Hackerrank (Problem Solving,C++)</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons" />
              <h4>3 star at codechef (Highest Rating 1658)</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons" />
              <h4>Leetcode (Highest rating 1460)</h4>
            </div>

            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons" />
              <h4>codeforces (Highest Rating 961)</h4>
            </div>

            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons" />
              <h4>1st prize CTF‐J (By: CES‐MMMUT GKP)</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons" />
              <h4>1st prize LEVELUP‐CTF (By‐ CES‐MMMUT GKP)</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
