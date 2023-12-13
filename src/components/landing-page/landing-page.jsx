import "./landing-page.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/harmburger-btn.svg";
import { useState, useRef } from "react";
import close from "../../assets/icon-close.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const navbar = ["Home", "About Us", "Contact"];
const features = [
  { heading: "Go to the WeWillRug Dapp", body: "" },
  {
    heading: "Explore Predictions",
    body: "Keep an eye on the platform for upcoming predictions. These will be projects recently adding liquidity, automatically creating pools for users to bet on rug or no rug outcomes.",
  },
  {
    heading: "Place Your Bet",
    body: " Once you've assessed the project, choose whether you believe it will rug or not",
  },
  {
    heading: "Claim your rewards",
    body: "When the 24-hour pool period concludes, we determine the winning pool. Users who bet on the correct outcome share the pool funds proportionally based on their contribution. ",
  },
];

const LandingPage = () => {
  const [navBtn, setNavBtn] = useState(menu);
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    if (navBtn === menu) {
      setNavBtn(close);
    } else {
      setNavBtn(menu);
    }
  };
  return (
    <div className="landing" id="Home">
      <section className="bg">
        <div className="Navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav ref={navRef} className="flex">
            <ul className="navs flex">
              {navbar.map((nav, key) => (
                <li key={key}>
                  <a href={`#${nav}`}>{nav}</a>
                </li>
              ))}
            </ul>
            <div className="buttons flex">
              <button className="cta-btn">
                <a href="#">Launch Dapp</a>
              </button>
            </div>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <img className="nav-icon" src={navBtn} alt="" />
          </button>
        </div>

        {/* HOME SECTION */}
        <section className="hero">
          <div className="hero-text">
            <div className="pattern"></div>
            <h1>
              <span>EARN</span> FOR PREDICTING A RUG <span>PULL</span>
            </h1>
          </div>
        </section>
      </section>

      {/* Features */}
      <section className="feature">
        <h1>
          HOW <span>IT</span> WORKS
        </h1>

        {/* FEATURES SECTION */}
        <div className="features">
          {features.map((ele, index) => (
            <div key={index} className="card" data-aos="zoom-in">
              <h3>STEP {index + 1}</h3>
              <p className="features-heading">{ele.heading}</p>
              <p className="features-body">{ele.body}</p>
            </div>
          ))}
        </div>

        {/* About-us */}
        <div className="about-us" id="About Us">
          <h3>
            ABOUT <span>US</span>
          </h3>
          <img src="about-us.svg" className="about-img" alt="about-us" />
          <p>
            In the ever-evolving world of cryptocurrency, rug pulls have become
            a widespread problem, leaving unsuspecting investors with
            significant losses.WeWillRug is here to change that. Our innovative platform leverages
            the power of blockchain technology and predictive markets to empower
            the community to combat rug pulls and profit from their insights.
          </p>
          <p>
          </p>
        </div>
      </section>

      <section className="rug-graph">
        <div className="rug-graph">
          <h1>
            TOKEN<span>ONMICS</span>
          </h1>
          <div className="pie-charts">
            <img src="pie-chart.svg" className="pie" alt="pie-chart" />
            <div className="details">
              <img
                src="details_of_pie_chart.svg"
                className="details"
                alt="details_of_pie_chart"
              />
            </div>
          </div>
        </div>
      </section>

      <footer id="Contact">
        <div className="footer-items">
          <div className="copy-right">
            <h3>Copyright. All Rights Reserved</h3>
          </div>

          <div className="rug-pull-social">
            <a href="https://twitter.com/WeWillRug?t=KNtosFl1w3fc9Jrw3ocmGQ&s=09">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2xl"
                className="twitter"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a href="https://t.me/WeWillRug">
              <FontAwesomeIcon
                icon={faTelegram}
                size="2xl"
                className="telegram"
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
