const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="left">
          <a href="#">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.13307 34.4586C1.40988 34.4586 1.6082e-07 33.0487 1.49105e-07 31.3255L7.4635e-08 20.3719L7.88626 20.3719L7.88626 20.3598L12.6263 20.3598C13.8482 20.3285 14.8821 19.2632 14.8821 18.01C14.8821 16.7254 13.8168 15.6602 12.5323 15.6602L6.26614 15.6602L6.26614 15.6622L4.26149e-08 15.6622L2.13006e-08 12.5271C9.58529e-09 10.8039 1.40988 9.39404 3.13307 9.39404L12.5323 9.39404C14.9134 9.39404 16.9499 10.24 18.6104 11.9318C20.3023 13.5924 21.1482 15.6289 21.1482 18.01C21.1482 20.3598 20.3336 22.3963 18.6731 24.0568C17.0126 25.7173 15.0074 26.5946 12.6576 26.6259L6.26614 26.6259L6.26614 31.3255C6.26614 33.0487 4.85626 34.4586 3.13307 34.4586Z"
                fill="#02BC6B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.0974 5.75781C28.5589 9.11995 30.3031 13.3073 30.3031 18.0673C30.3031 22.7473 28.6319 26.9307 25.2239 30.3034L20.3852 25.7508C22.5046 23.6533 23.545 21.128 23.545 18.0673C23.545 14.9832 22.4733 12.4619 20.303 10.3538L25.0974 5.75781Z"
                fill="#02897A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5055 -3.14562e-08C37.4912 4.97781 40 11.1499 40 18.2338C40 25.2071 37.5923 31.3753 32.6885 36.3638L28.0187 31.8009C31.6715 28.085 33.4614 23.5781 33.4614 18.2338C33.4614 12.8358 31.6112 8.33276 27.8787 4.60616L32.5055 -3.14562e-08Z"
                fill="#035B81"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 26.6523L6.26614 26.6523L6.26614 31.326C6.26614 33.0492 4.85626 34.459 3.13307 34.459C1.40988 34.459 4.34898e-08 33.0492 3.17744e-08 31.326L0 26.6523Z"
                fill="#028E37"
              />
            </svg>
            <h2>Product</h2>
          </a>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <a style={{ fontWeight: "600" }} href="#">
                  Product
                </a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </nav>
          <div className="buttons">
            <button className="in">Sign In</button>
            <button className="up">Sign Up</button>
            <button className="mode">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                  fill="#02897A"
                />
                <path
                  d="M19 12C19 8.134 15.865 5 12 5V19C15.865 19 19 15.866 19 12Z"
                  fill="#02897A"
                />
              </svg>
            </button>
          </div>
          <div className="responsive__menu">
            <button id="toggleMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
                fill="#02897a"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
