import pic1 from "../../assets/images/strategies/pic-1.png";
import pic2 from "../../assets/images/strategies/pic-2.png";
import pic3 from "../../assets/images/strategies/pic-3.png";
import "./strategies.scss";

const StrategiesSection = () => {
  return (
    <section id="strategies">
      <div className="container strategies__container">
        <div className="title">
          <h1>Contents Strategies</h1>
          <p>
            We focus on ergonomics and meeting you where you work. It`s only a
            keystroke away.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="top">
              <img src={pic1} alt="picture" />
            </div>
            <div className="bottom">
              <p>
                By <span>Wahid Ari</span> | 03 March 2019
              </p>
              <h4>Increasing Prosperity With Positive Thinking</h4>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={pic2} alt="picture" />
            </div>
            <div className="bottom">
              <p>
                By <span>Wahid Ari</span> | 03 March 2019
              </p>
              <h4>Motivation Is The First Step To Success</h4>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={pic3} alt="picture" />
            </div>
            <div className="bottom">
              <p>
                By <span>Wahid Ari</span> | 03 March 2019
              </p>
              <h4>Success Steps For Your Personal Or Business</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategiesSection;
