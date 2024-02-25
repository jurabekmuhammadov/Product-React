import icon1 from "../../assets/images/features/icon-1.png";
import icon2 from "../../assets/images/features/icon-2.png";
import icon3 from "../../assets/images/features/icon-3.png";
import icon4 from "../../assets/images/features/icon-4.png";

import "./features.scss";
const Features = () => {
  return (
    <section id="features">
      <div className="container features__container">
        <h1>Product was Built Specifically for You</h1>
        <div className="cards">
          <div className="card">
            <div className="top">
              <img src={icon1} alt="icon" />
            </div>
            <div className="bottom">
              <h4>First click tests</h4>
              <p>While most people enjoy casino gambling,</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={icon2} alt="icon" />
            </div>
            <div className="bottom">
              <h4>Design surveys</h4>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={icon3} alt="icon" />
            </div>
            <div className="bottom">
              <h4>Preference tests</h4>
              <p>The Myspace page defines the individual.</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={icon4} alt="icon" />
            </div>
            <div className="bottom">
              <h4>Five second tests</h4>
              <p>Personal choices and the overall personality of the. </p>
            </div>
          </div>
        </div>
        <button>sign up now</button>
      </div>
    </section>
  );
};

export default Features;
