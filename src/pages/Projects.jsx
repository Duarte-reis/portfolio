import "../index.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link, useLocation } from "wouter"
import { useState } from "react"
import Menu from "../components/Menu"
import NavBtn from "../components/NavBtn"

function Projects() {

    const [menuOpen, setMenuOpen] = useState(false)
    
    const [, setLocation] = useLocation(); 

    const handleScrollToContact = () => {
        setMenuOpen(false);
        setLocation("/#contact_section");
    };

    return (
        <section className="projects_container">
            <div className="img_bg">
                <img src="/images/background_img.png" alt="background" />
            </div>
            <div className="header_bar">
                <Header onMenuOpen={() => setMenuOpen(true)} />
                {menuOpen && (
                    <Menu
                        onClose={() => setMenuOpen(false)}
                        onContactClick={handleScrollToContact}
                    />
                    )
                }
            </div>
            
            <div className="projects_wrap">
                <div className="side_bar">
                        <p>DEVELOPMENT</p>
                        <p>DESIGN</p>
                        <p>PRODUCT</p>
                    </div>
                
                <div className="projects_content">
                    <div className="projects_title">
                        <h2 className="article_title">Projects</h2>
                    </div>
                    
                <article className="latest_project_container">
                        <div className="latest_project_content">
                            
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
                                    <Link to="travelplanner" className="link">
                                        <NavBtn text="See project" />
                                    </Link>
                                    
                                </div>
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

export default Projects