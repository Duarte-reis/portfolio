import "../index.css"
import { Link } from "wouter"
import { useState } from "react"
import FlipText from "./FlipText"
import EmailBox from "./EmailBox"

function Header({ onMenuOpen }) {

  const [emailBoxOpen, setEmailBoxOpen] = useState(false)

  return (
    <section className="header_container">
      <div className="header_content">
        <div className="menu_container" onClick={onMenuOpen}>
          <div className="hamburguer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
       <Link 
        to="/homepage" 
        className="link"
        onClick={() => window.scrollTo(0, 0)}
      >
          <div className="logo_box">
            <img src="/images/logo.png" alt="logo" />
          </div>
       </Link>
        
        <div className="socials_container">
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
          <FlipText as="div" className="social" id="whatsapp">
            <span>
              <img src="/images/whatsapp_icon.png" alt="whatsapp icon" />
            </span>
            <p>Whatsapp</p>
          </FlipText>
          <a
            href="https://github.com/Duarte-reis?tab=respositories"
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
          <FlipText className="social" id="instagram">
              <span>
                <img src="/images/instagram_icon.png" alt="instagram icon" />
              </span>
              <p>Instagram</p>
          </FlipText>
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
      </div>
    </section>
  )
}

export default Header
