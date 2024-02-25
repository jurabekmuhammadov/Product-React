import client1 from "../../assets/images/clients/client-1.png";
import client2 from "../../assets/images/clients/client-2.png";
import client3 from "../../assets/images/clients/client-3.png";
import stars from "../../assets/images/clients/stars.png";
import "./clients.scss";

const ClientsSection = () => {
  return (
    <section id="clients">
      <div className="container clients__container">
        <div className="title">
          <h1>What Clients Say</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="top">
              <span>
                <img src={stars} alt="" />
              </span>
              <p>
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
            </div>
            <div className="bottom">
              <div className="avatar">
                <img src={client1} alt="client" />
              </div>
              <div className="info">
                <h4>Wahid Ari</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <span>
                <img src={stars} alt="" />
              </span>
              <p>
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
            </div>
            <div className="bottom">
              <div className="avatar">
                <img src={client2} alt="client" />
              </div>
              <div className="info">
                <h4>Wahid Ari</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <span>
                <img src={stars} alt="" />
              </span>
              <p>
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
            </div>
            <div className="bottom">
              <div className="avatar">
                <img src={client3} alt="client" />
              </div>
              <div className="info">
                <h4>Wahid Ari</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
