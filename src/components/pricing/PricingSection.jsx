import "./pricing.scss";
const PricingSection = () => {
  return (
    <section id="pricing">
      <div className="container pricing__container">
        <div className="title">
          <h1>Price Table</h1>
          <p>We offer competitive price</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="top">
              <h5>Free</h5>
              <p>Brief price description</p>
            </div>
            <div className="middle">
              <h1>0</h1>
              <div className="month">
                <span>$</span>
                <p>Per / month</p>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <p>Only 2 Operators</p>
                </li>
                <li>
                  <p>Notifications</p>
                </li>
                <li>
                  <p>Landing Pages</p>
                </li>
              </ul>
              <button>Order Now</button>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <h5>Standart</h5>
              <p>Brief price description</p>
            </div>
            <div className="middle">
              <h1>5</h1>
              <div className="month">
                <span>$</span>
                <p>Per / month</p>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <p>5+ Operators</p>
                </li>
                <li>
                  <p>Notifications</p>
                </li>
                <li>
                  <p>Landing Pages</p>
                </li>
              </ul>
              <button>Order Now</button>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <h5>Premium</h5>
              <p>Brief price description</p>
            </div>
            <div className="middle">
              <h1>10</h1>
              <div className="month">
                <span>$</span>
                <p>Per / month</p>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <p>10+ Operators</p>
                </li>
                <li>
                  <p>Notifications</p>
                </li>
                <li>
                  <p>Landing Pages</p>
                </li>
              </ul>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
