import "../index.css"
import { Link } from "wouter"
import FlipText from "./FlipText";
import EmailBox from "./EmailBox";
import { useState } from "react";

function Menu({ onClose, onContactClick }) {

  const handleContactClick = () => {
    onClose();
    onContactClick();
  };

  const [emailBoxOpen, setEmailBoxOpen] = useState(false)
  
  
  return (

    <section className="nav_menu_container">
      <svg className="menu_border" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect 
          x="1" 
          y="1" 
          width="98" 
          height="98" 
          rx="6" 
          ry="6" 
          fill="none" 
          stroke="var(--gray-medium)" 
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="close_btn" onClick={onClose}>
        <img src="/images/close_icon.png" alt="close button" />
      </div>

      <div className="menu_links">
        <Link 
          to="/aboutme" 
          className="link" 
          onClick={() => {
            onClose();
            window.scrollTo(0, 0);
          }}
        >
          <FlipText>
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span className="letter">m</span>
            <span>e</span>
          </FlipText>
        </Link>
        <Link 
          to="/projects" 
          className="link" 
          onClick={() => {
            onClose();
            window.scrollTo(0, 0);
          }}
        >
          <FlipText>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </FlipText>
        </Link>
        <FlipText onClick={handleContactClick}>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </FlipText>
      </div>
      
      <div className="socials_container" id="menu_socials_container">
        <FlipText 
          as="div" 
          className="social"
          onClick={() => setEmailBoxOpen(true)}
        >
          <span>
            <img src="/images/email_icon.png" alt="email icon" />
          </span>
          <p>Email</p>
        </FlipText>
          {emailBoxOpen && ( 
            <EmailBox 
              onClose={() => setEmailBoxOpen(false)}
            />
          )}
        <div className="social" id="whatsapp">
          <img src="/images/whatsapp_icon.png" alt="whatsapp icon" />
          <p>Whatsapp</p>
        </div>
        <a
            href="https://github.com/Duarte-reis?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlipText as="div" className="social">
                <span>
                  <img src="/images/github_icon.png" alt="github icon" />
                </span>
                <p>Github</p>
            </FlipText>
        </a>
        <a
            href="https://www.linkedin.com/in/duarte-rodrigues-7a1a0b350"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlipText as="div" className="social">
                <span>
                  <img src="/images/linkedin_icon.png" alt="linkedin icon" />
                </span>
                <p>Linkedin</p>
            </FlipText>
          </a>
        <div className="social" id="instagram">
          <img src="/images/instagram_icon.png" alt="instagram icon" />
        </div>
        <a
            href="https:www.behance.net/duarterodrigues4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlipText className="social">
                <span>
                  <img src="/images/behance_icon.png" alt="behance icon" />
                </span>
                <p>Behance</p>
            </FlipText>
          </a>
      </div>
    </section>

  )
  
}

export default Menu
