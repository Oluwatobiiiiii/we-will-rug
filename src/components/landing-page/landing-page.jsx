import "./landing-page.css";

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
    heading: "Claim your reqards",
    body: "When the 24-hour pool period concludes, we determine the winning pool. Users who bet on the correct outcome share the pool funds proportionally based on their contribution. ",
  },
];

const LandingPage = () => {
  return (
    <div className="landing" id="Home">
      <section className="navbar">
        <div className="nav">
          <div className="logo">
            <img src="logo.svg" alt="we-will-rug-logo" />
          </div>
          <div className="nav-links">
            <ul className="navbar-links">
              {navbar.map((nav, key) => (
                <li className="link" key={key}>
                  <a href={`#${nav}`} className="link">
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Navbar-btn */}
          <div className="navbar-btn">
            <button className="cta-launch">
              <a href="#" className="cta-launch-link">
                Launch Dapp
              </a>
            </button>
          </div>
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
          <img src="about-us.svg" alt="about-us" />
          <p>
            In the ever-evolving world of cryptocurrency, rug pulls have become
            a widespread problem, leaving unsuspecting investors with
            significant losses.
          </p>
          <p>
            WeWillRug is here to change that. Our innovative platform leverages
            the power of blockchain technology and predictive markets to empower
            the community to combat rug pulls and profit from their insights.
          </p>
        </div>
      </section>

      <section className="rug-graph">
        <div className="rug-graph">
          <h1>
            TOKEN<span>ONMICS</span>
          </h1>
          <div className="pie-charts">
            <img src="pie-chart.svg" alt="pie-chart" />
            <img src="details_of_pie_chart.svg" alt="details_of_pie_chart" />
          </div>
        </div>
      </section>

      <footer id="Contact">
        <div className="footer-items">
          <h3>Copyright. All Rights Reserved</h3>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
