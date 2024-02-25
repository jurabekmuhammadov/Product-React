import pages from "../../assets/images/optimize/banner.png";
import "./optimize.scss";
const OptimizeSection = () => {
  return (
    <section id="optimize">
      <div className="container optimize__container">
        <div className="banner">
          <div className="contents">
            <h1>Join 100 Compannies who boost their business with Product</h1>
            <button>Get This</button>
          </div>
          <div className="pages">
            <img src={pages} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizeSection;
