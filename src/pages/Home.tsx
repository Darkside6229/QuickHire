import { Link } from "react-router-dom";
import "../styles/Login.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div id="nav_space"></div>

      <div id="first">
        <div className="vid">
          <video src="/vd1.mp4" autoPlay loop muted playsInline aria-label="Background video showcasing QuickHire platform"></video>
        </div>
        <div id="mask1" className="blur">
          <div id="cont1">
            <h1>
              Hire the best <br />
              <span style={{ color: "yellowgreen" }}>freelancer for any</span>
              <br />
              job, Online.
            </h1>
            <br />
            <ul>
              <li>Fastest growing freelance marketplace</li>
              <li>Any job you can possibly think of</li>
              <li>Save up to 90% & get quotes for free</li>
              <li>Pay only when you're 100% happy</li>
            </ul>
            <Link to="/hire">
              <input type="button" value="Hire a freelancer" className="box" />
            </Link>
            <br />
            <Link to="/findwork">
              <input
                type="button"
                value="Earn money freelancing"
                className="box"
              />
            </Link>
            <br />
          </div>
        </div>
      </div>

      <div className="slider">
        <div
          className="bar"
          style={
            {
              "--width": "100px",
              "--height": "60px",
              "--quantity": "9",
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div
              className="item"
              style={{ "--position": "1" } as React.CSSProperties}
            >
              <img src="/Bar Icons/adobe-logo-darkmode.png" alt="Adobe" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "2" } as React.CSSProperties}
            >
              <img src="/Bar Icons/airbus-logo2-darkmode.png" alt="Airbus" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "3" } as React.CSSProperties}
            >
              <img src="/Bar Icons/deloitte-logo2-darkmode.png" alt="Deloitte" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "4" } as React.CSSProperties}
            >
              <img
                src="/Bar Icons/facebook-corporate-logo2-darkmode.png"
                alt="Facebook"
                loading="lazy"
              />
            </div>
            <div
              className="item"
              style={{ "--position": "5" } as React.CSSProperties}
            >
              <img src="/Bar Icons/fujitsu-logo-darkmode.png" alt="Fujitsu" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "6" } as React.CSSProperties}
            >
              <img src="/Bar Icons/google-logo-darkmode.png" alt="Google" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "7" } as React.CSSProperties}
            >
              <img src="/Bar Icons/ibm-logo2-darkmode.png" alt="IBM" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "8" } as React.CSSProperties}
            >
              <img src="/Bar Icons/nasa-logo-v4.webp" alt="NASA" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "9" } as React.CSSProperties}
            >
              <img src="/Bar Icons/telstra-logo-darkmode-1.png" alt="Telstra" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div id="second">
        <div className="vid">
          <video src="/vd2.mp4" autoPlay loop muted playsInline aria-label="Background video showcasing freelance work"></video>
        </div>

        <h1>
          <span style={{ color: "rgb(165, 255, 47)" }}>Make it real</span>
          <br />
          with QuickHire
        </h1>

        <img src="/logo.png" alt="QuickHire Logo" loading="lazy" />

        <div className="cont2">
          <div className="para">
            <h2 className="t1">The Best Talent</h2>
            Discover reliable professionals by <br />
            exploring their portfolios and <br />
            immersing yourself in the feedback <br />
            shared on their profiles.
          </div>

          <div className="para">
            <h2 className="t1">Fast bids</h2>
            Get quick, no-obligation quotes from <br />
            skilled freelancers. 80% of jobs <br />
            receive bids within 60 seconds. Your <br />
            idea is just moments from reality.
          </div>

          <div className="para">
            <h2 className="t1">Quality work</h2>
            With QuickHire's talent pool of over <br />
            60 million professionals at your <br />
            fingertips, you'll find quality talent to <br />
            get what you need done.
          </div>

          <div className="para">
            <h2 className="t1">BE in control</h2>
            Stay in the loop while on the move. <br />
            Chat with your freelancers and get <br />
            real time updates with our mobile <br />
            app. Anytime, anywhere.
          </div>

          <div id="get_started">
            <h2>
              Make your dreams a reality.
              <br />
            </h2>
            <strong>
              <Link to="/signup">Get Started Now</Link>
            </strong>
          </div>
        </div>
      </div>

      <div className="imagep">
        <div className="item_img imjpg1">
          <img src="/img1/img1_1.jpg" className="imgh" alt="Freelance work showcase" loading="lazy" />
        </div>
        <div className="item_img imjpg2">
          <img src="/img1/img1_2.jpg" className="imgh" alt="Professional collaboration" loading="lazy" />
        </div>
        <div className="item_img imjpg3">
          <img src="/img1/img1_3.jpeg" className="imgh" alt="Creative workspace" loading="lazy" />
        </div>
        <div className="item_img imjpg4">
          <img src="/img1/img1_4.jpeg" className="imgh" alt="Team project" loading="lazy" />
        </div>
        <div className="item_img imjpg5">
          <img src="/img1/img1_5.jpg" className="imgh" alt="Success story" loading="lazy" />
        </div>
      </div>

      <div id="third">
        <div className="vid">
          <video id="vid3" src="/vd3.mp4" loop autoPlay muted playsInline aria-label="Background video showcasing global talent network"></video>
        </div>

        <h1>
          <span style={{ color: "rgb(165, 255, 47)" }}>Tap into a</span>
          <br />
          global talent network
        </h1>

        <div className="cont3">
          <div className="para">
            <h2 className="t1">Post Your Job</h2>
            It's free and easy! Get lots of <br />
            competitive bids that suit your <br />
            budget in minutes. Start making <br />
            your dreams reality.
          </div>

          <div className="para">
            <h2 className="t1">Choose Freelancers</h2>
            No job is too big or complex. We've <br />
            got freelancers for jobs of any size <br />
            or budget, across 2700+ skills. Let <br />
            our talent bring your ideas to life.
          </div>

          <div className="para">
            <h2 className="t1">Pay Safely</h2>
            Only pay for work when you are <br />
            100% satisfied with the outcome. <br />
            Our milestone payment system <br />
            protects you every step of the way.
          </div>

          <div className="para">
            <h2 className="t1">We're Here To Help</h2>
            Your time is precious. Let our team <br />
            of expert recruiters and co-pilots <br />
            save you time finding talent, even <br />
            managing your job if needed.
          </div>

          <div id="create_future">
            <h2>
              Create the future.
              <br />
            </h2>
            <strong>
              <Link to="/signup">Get Started Now</Link>
            </strong>
          </div>
        </div>
      </div>

      <div className="slider" style={{ backgroundColor: "black" }}>
        <div
          className="bar"
          style={
            {
              "--width": "120px",
              "--height": "45px",
              "--quantity": "9",
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div
              className="item"
              style={{ "--position": "1" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/bloomberg-darkmode.png" alt="Bloomberg" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "2" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/business-insider-darkmode.png" alt="Business Insider" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "3" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/cnbc-darkmode.png" alt="CNBC" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "4" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/cnn-darkmode.png" alt="CNN" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "5" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/forbes-darkmode.png" alt="Forbes" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "6" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/the-new-york-times-darkmode.png" alt="The New York Times" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "7" } as React.CSSProperties}
            >
              <img src="/Bar Icons/airbus-logo2-darkmode.png" alt="Airbus" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "8" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/yahoo-finance-darkmode.png" alt="Yahoo Finance" loading="lazy" />
            </div>
            <div
              className="item"
              style={{ "--position": "9" } as React.CSSProperties}
            >
              <img src="/Bar Icons/adobe-logo-darkmode.png" alt="Adobe" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div className="imagep">
        <div className="item_img imjpg1">
          <img src="/img2/2_5.jpg" className="imgh" alt="Freelance portfolio" loading="lazy" />
        </div>
        <div className="item_img imjpg2">
          <img src="/img2/2_2.jpg" className="imgh" alt="Remote work" loading="lazy" />
        </div>
        <div className="item_img imjpg3">
          <img src="/img2/2_3.jpg" className="imgh" alt="Digital workspace" loading="lazy" />
        </div>
        <div className="item_img imjpg4">
          <img src="/img2/2_4.jpg" className="imgh" alt="Project delivery" loading="lazy" />
        </div>
        <div className="item_img imjpg5">
          <img src="/img2/2_1.jpeg" className="imgh" alt="Client satisfaction" loading="lazy" />
        </div>
      </div>

      <div id="fourth">
        <div className="vid">
          <video id="vid3" src="/vd5.mp4" loop autoPlay muted playsInline aria-label="Background video showcasing work categories"></video>
        </div>

        <h1>
          Get work done in
          <br />
          <span style={{ color: "rgb(165, 255, 47)" }}>
            over 2700 different
          </span>
          <br />
          categories
        </h1>

        <div className="cont4">
          <div className="link_list1">
            <Link to="/hire" className="ll1">
              Website Design
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              Mobile Apps
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              Android Apps
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              iPhone Apps
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              Software Architecture
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              Graphic Design
            </Link>
          </div>
          <div className="link_list2">
            <Link to="/hire" className="ll2">
              Logo Design
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Public Relations
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Logistics
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Proofreading
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Translation
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Research
            </Link>
          </div>
          <div className="link_list3">
            <Link to="/hire" className="ll1">
              Research Writing
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              Article Writing
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              Web Scraping
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              HTML
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              CSS
            </Link>
            <br />
            <Link to="/hire" className="ll1">
              HTML 5
            </Link>
          </div>
          <div className="link_list4">
            <Link to="/hire" className="ll2">
              Javascript
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Data Processing
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Python
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Wordpress
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Web Search
            </Link>
            <br />
            <Link to="/hire" className="ll2">
              Finance
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="col">
            <p className="slogan">
              "Empowering Freelancers, Elevating Projects."
              <br />
              <img src="/logo.png" alt="QuickHire Logo" loading="lazy" />
              <br />
              "Elevate your brand with our creative professionals dedicated to
              bringing your vision to life."
            </p>
          </div>
          <div className="col">
            <h2>For Client</h2>
            <ul>
              <li>
                <Link to="/hire">How to hire</Link>
              </li>
              <li>
                <Link to="/hire">Talent Marketplace</Link>
              </li>
              <li>
                <Link to="/hire">Project Catalog</Link>
              </li>
              <li>
                <Link to="/hire">Hire an agency</Link>
              </li>
              <li>
                <Link to="/hire">Enterprise</Link>
              </li>
              <li>
                <Link to="/hire">Any hire</Link>
              </li>
              <li>
                <Link to="/hire">Contract-to-hire</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>For Talent</h2>
            <ul>
              <li>
                <Link to="/findwork">How to find work</Link>
              </li>
              <li>
                <Link to="/findwork">Direct Contracts</Link>
              </li>
              <li>
                <Link to="/findwork">Find freelance jobs</Link>
              </li>
              <li>
                <Link to="/findwork">Win work with ads</Link>
              </li>
              <li>
                <Link to="/findwork">Exclusive resources with Freelancer Plus</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>
                <Link to="/contact">Help & support</Link>
              </li>
              <li>
                <Link to="/about">Reviews</Link>
              </li>
              <li>
                <Link to="/about">Blog</Link>
              </li>
              <li>
                <Link to="/about">Community</Link>
              </li>
              <li>
                <Link to="/about">Affiliate programme</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/about">Investor relations</Link>
              </li>
              <li>
                <Link to="/about">Careers</Link>
              </li>
              <li>
                <Link to="/about">Our impact</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/about">Trust, safety & security</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="ad">
              <h3>Follow us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com" title="Facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.linkedin.com" title="LinkedIn">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.youtube.com" title="YouTube">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a href="https://www.instagram.com" title="Instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
            <u>CodeCollab</u> &copy; <u>2024</u>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
