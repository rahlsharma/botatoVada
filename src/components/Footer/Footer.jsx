import React from "react";
import "./Footer.scss";
import App from "../../assets/images/App-Store.png";
import Phone from "../../assets/images/Google-Play.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top1">
          <h2>Botato Vada</h2>
          <div className="lang">
            <select>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="London">London</option>
              <option value="America">America</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
              <option value="England">England</option>
              <option value="South Africa">South Africa</option>
              <option value="Rusia">Rusia</option>
            </select>
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Polish">Polish</option>
            </select>
          </div>
        </div>
        <div className="bottom1">
          <div className="bottomContent">
            <h4>ABOUT Botato Vada</h4>
            <p>who we are</p>
            <p>blog</p>
            <p>work with us</p>
            <p>Investor Relations</p>
            <p>Report Fraud</p>
            <p>Contact Us</p>
          </div>
          <div className="bottomContent">
            <h4>BOTATOVERSE</h4>
            <p>Botato Vada</p>
            <p>Blonkit</p>
            <p>Feeding India</p>
            <p>HyperPure</p>
            <p>Botato Vada land</p>
          </div>
          <div className="bottomContent">
            <h4>FOR RESTAURANTS</h4>
            <p>Patner with Us</p>
            <p>Apps For you</p>
            <h4>For Enterprises</h4>
            <p>Botato Vada for work</p>
          </div>
          <div className="bottomContent">
            <h4>LEARN MORE</h4>
            <p>Privecy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
          <div className="bottomContent">
            <h4>SOCIAL LINKS</h4>
            <div className="links">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <FacebookIcon />
            </div>
            <img src={App} alt="app" />
            <img src={Phone} alt="app" />
          </div>
        </div>
      </div>
      <hr />
      
    </div>
  );
};

export default Footer;
