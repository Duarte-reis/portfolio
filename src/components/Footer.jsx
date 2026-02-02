import "../index.css"
import { Link, useLocation } from "wouter"
import FlipText from "./FlipText"
import NavBtn from "./NavBtn"

function Footer() {

    const [, setLocation] = useLocation()

    const handleScrollToContact = () => {
        setLocation("/#contact_section")
    }

    return (

        <section className="footer_container">
            <div className="footer_content">
                <div className="nav_links_container">
                    <div className="nav_links">
                        <Link 
                            to="aboutme" 
                            className="link"
                            onClick={() => window.scrollTo(0, 0)}
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
                            to="projects" 
                            className="link"
                            onClick={() => window.scrollTo(0, 0)}
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
                        <FlipText onClick={handleScrollToContact}>
                            <span>C</span>
                            <span>o</span>
                            <span>n</span>
                            <span>t</span>
                            <span>a</span>
                            <span>c</span>
                            <span>t</span>
                        </FlipText>
                    </div>
                    <div className="footer_logo_box">
                        <Link 
                            to="homepage" 
                            className="link"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <img src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="socials_container">
                    <div className="social" id="whatsapp">
                        <img src="/images/whatsapp_icon.png" alt="whatsapp icon" />
                    </div>
                    <a
                        href="https://github.com/Duarte-reis?tab=respositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FlipText as="div" className="social">
                            <span>
                                <img src="/images/github_icon.png" alt="github icon" />
                            </span>
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
                <p>duartereisrs@gmail.com</p>
                <div className="footer_title">
                    <div className="footer_text">
                        <h1>THINK</h1>
                        <h1>CREATE</h1>
                        <h1>LAUNCH</h1>
                    </div>

                    <div className="easter_egg">
                        <Link 
                            to="notfound" 
                            className="link"
                        >
                            <NavBtn 
                                text="Easter egg"
                            />
                        </Link>
                        
                    </div>
                </div>
                
                <div className="footer_legal">
                    <small>2025.All right reserved. Duarte.</small> 
                </div>    
            </div>
        </section>

    )
    
}

export default Footer