import "../index.css"
import { Link, useLocation } from "wouter"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Tag from "../components/Tag"
import NavBtn from "../components/NavBtn"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import { useRef, useState, useEffect } from "react"
import FlipText from "../components/FlipText"
import Colorway from "../components/Colorway"
import EmailBox from "../components/EmailBox"
import Background from "../components/Background"

function Homepage() {
    const contactRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const [location] = useLocation();

    const [emailBoxOpen, setEmailBoxOpen] = useState(false)


    const handleScrollToContact = () => {
        setMenuOpen(false)
        setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 50) 
    }

    useEffect(() => {
        const hash = window.location.hash;
        if(hash === "#contact_section") {
            setTimeout(() => {
                contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [location]);

    return (
        <section className="homepage_container">
            <div className="img_bg">
                <Background />
            </div>


            <div className="header_bar">
                <Header 
                    onMenuOpen={() => setMenuOpen(true)} 
                />

                {menuOpen && (
                <Menu
                    onClose={() => setMenuOpen(false)}
                    onContactClick={handleScrollToContact}
                />
                )}
            </div>
            <div className="homepage_wrap">
                <div className="side_bar">
                        <p>DEVELOPMENT</p>
                        <p>DESIGN</p>
                        <p>PRODUCT</p>
                    </div>
                <div className="homepage_content">
                    <article className="cover">
                        <div className="presentation_container">
                            <div className="picture_resume_container">
                                <img src="/images/persona_photo.png" alt="default image" />
                                <p>
                                “Hi, I'm Duarte — I’m a front-end developer. My focus is on
                                solving problems, turning user pain points into elegant solutions,
                                through thoughtful design and clean code.”
                                </p>

                            </div>
                            <div className="pages_links">

                                <div className="skills_container">
                                    <div className="skills_tag">
                                        <Tag text="SKILLS" />
                                    </div>
                                    <div className="skills">
                                        <img src="/images/figma_icon.png" alt="figma icon" />
                                        <img src="/images/html_icon.png" alt="html icon" />
                                        <img src="/images/css_icon.png" alt="css icon" />
                                        <img src="/images/javascript_icon.png" alt="js icon" />
                                        <img src="/images/react_icon.png" alt="react icon" />
                                    </div>
                                </div>

                                <div className="features_container">
                                    <Link 
                                        to="/aboutme" 
                                        className="link"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <Colorway>
                                            About me
                                        </Colorway>
                                    </Link>
                                    <Link 
                                        to="/projects" 
                                        className="link"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <Colorway>
                                            Projects
                                        </Colorway>
                                    </Link>
                                    <Colorway
                                        onClick={handleScrollToContact}
                                    >
                                        Contact
                                    </Colorway>
                                </div>
                                
                            </div>
                        </div>
                    </article>

                    

                    <article className="about_me_container">
                        <div className="about_me_content">
                            <h2 className="article_title">About me</h2>
                            <div className="introduction">
                                <img src="/images/side_photo.png" alt="image" />
                                <div className="introduction_content">
                                    <p>
                                    Eight years into my career, I understood something had to change. I wasn’t on the right path, so I turned around. I made a 180º career shift into UX/UI and front-end development, balancing two years of intensive learning with full-time work to intentionally design the future I want.
                                    </p>
                                    <div className="btn_container">
                                        <Link 
                                            to="/aboutme" className="link"
                                            onClick={() => window.scrollTo(0, 0)}
                                        >
                                            <NavBtn text="See my journey" />
                                        </Link>
                                        <a
                                            href="https://raw.githubusercontent.com/Duarte-reis/portfolio/main/CV.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <NavBtn 
                                                text="Download my CV"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </article>

                    <article className="latest_project_container">
                        <div className="latest_project_content">
                            <h2 className="article_title">Latest project</h2>
                            <div className="latest_project_wrap">
                                <div className="project_presentation">
                                <img
                                    src="/images/travel_planner_cover.png"
                                    alt="travel planner cover"
                                    className="project_logo"
                                />
                                <div className="tools">
                                    <img src="/images/figma_icon.png" alt="figma icon" />
                                    <img src="/images/html_icon.png" alt="html icon" />
                                    <img src="/images/css_icon.png" alt="css icon" />
                                    <img src="/images/javascript_icon.png" alt="js icon" />
                                    <img src="/images/react_icon.png" alt="react icon" />
                                </div>
                            </div>
                            <div className="latest_project_resume">
                                <p className="project_resume_text">Travel Planner is a centralized application for travel agencies to streamline workflows and manage data efficiently.  Automates budgets, organizes itineraries, and generates client-ready proposals, enabling agencies to deliver accurate and high-quality travel experiences. </p>
                                <div className="project_btns_container">
                                    <Link 
                                        to="travelplanner" 
                                        className="link"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <NavBtn text="See project" />
                                    </Link>
                                    <Link 
                                        to="projects" 
                                        className="link"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <NavBtn text="All projects" />
                                    </Link>
                                </div>
                            </div> 
                            </div>
                        </div>
                    </article>

                    <article className="contact_container" id="contact_section" ref={contactRef}>
                        <h2 className="article_title">Contact</h2>
                        <div className="contact_content">
                            <ContactForm />
                            <div className="socials_container">
                                <div className="social" id="whatsapp">
                                    <img src="/images/whatsapp_icon.png" alt="whatsapp icon" />
                                    <FlipText>
                                        <span>W</span>
                                        <span>h</span>
                                        <span>a</span>
                                        <span>t</span>
                                        <span>s</span>
                                        <span>a</span>
                                        <span>p</span>
                                        <span>p</span>
                                    </FlipText>
                                </div>
                                <div className="social" id="email_social">
                                    <FlipText 
                                        as="div" 
                                        className="social"
                                        onClick={() => setEmailBoxOpen(true)}
                                    >
                                        <span>
                                            <img src="/images/email_icon.png" alt="email icon" />
                                        </span>
                                        <span id="letter">E</span>
                                        <span id="letter">m</span>
                                        <span id="letter">a</span>
                                        <span id="letter">i</span>
                                        <span id="letter">l</span>
                                        </FlipText>
                                        {emailBoxOpen && ( 
                                            <EmailBox 
                                            onClose={() => setEmailBoxOpen(false)}
                                            />
                                        )}
                                </div>
                                <div className="social">
                                    <a
                                        href="https://github.com/Duarte-reis?tab=repositories"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FlipText as="div" className="social">
                                            <span>
                                            <img src="/images/github_icon.png" alt="github icon" />
                                            </span>
                                            <span id="letter">G</span>
                                            <span id="letter">i</span>
                                            <span id="letter">t</span>
                                            <span id="letter">h</span>
                                            <span id="letter">u</span>
                                            <span id="letter">b</span>
                                        </FlipText>
                                    </a>
                                </div>
                                <div className="social">
                                    <a
                                        href="https://www.linkedin.com/in/duarte-rodrigues-7a1a0b350"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FlipText as="div" className="social">
                                            <span>
                                                <img src="/images/linkedin_icon.png" alt="linkedin icon" />
                                            </span>
                                            <span id="letter">L</span>
                                            <span id="letter">i</span>
                                            <span id="letter">n</span>
                                            <span id="letter">k</span>
                                            <span id="letter">e</span>
                                            <span id="letter">d</span>
                                            <span id="letter">i</span>
                                            <span id="letter">n</span>
                                        </FlipText>
                                    </a>
                                </div>
                                <div className="social" id="instagram">
                                    <img src="/images/instagram_icon.png" alt="instagram icon" />
                                    <FlipText>
                                        <span id="letter">I</span>
                                        <span id="letter">n</span>
                                        <span id="letter">s</span>
                                        <span id="letter">t</span>
                                        <span id="letter">a</span>
                                        <span id="letter">g</span>
                                        <span id="letter">r</span>
                                        <span id="letter">a</span>
                                        <span id="letter">m</span>
                                    </FlipText>
                                </div>
                                <div className="social">
                                    <a
                                        href="https:www.behance.net/duarterodrigues4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FlipText className="social">
                                            <span>
                                                <img src="/images/behance_icon.png" alt="behance icon" />
                                            </span>
                                            <span id="letter">B</span>
                                            <span id="letter">e</span>
                                            <span id="letter">h</span>
                                            <span id="letter">a</span>
                                            <span id="letter">n</span>
                                            <span id="letter">c</span>
                                            <span id="letter">e</span>
                                        </FlipText>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Homepage
