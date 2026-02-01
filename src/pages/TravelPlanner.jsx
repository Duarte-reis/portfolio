import "../index.css"
import Header from "../components/Header"
import NavBtn from "../components/NavBtn"
import Tag from "../components/Tag"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Prototype from "../components/Prototype"
import { useState, useRef } from "react"
import { useLocation } from "wouter"
import Background from "../components/Background"

function TravelPlanner() {
    // State management
    const [menuOpen, setMenuOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [, setLocation] = useLocation()
    
    // Refs
    const videoRef = useRef(null)

    // Event handlers
    const handleScrollToContact = () => {
        setMenuOpen(false)
        setLocation("/#contact_section")
    }

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause()
            setIsPlaying(false)
        } else {
            videoRef.current.play()
            setIsPlaying(true)
        }
    }

    return (
        <section className="travel_planner_container">
            <div className="img_bg">
                <Background />
            </div>

            <div className="header_bar">
                <Header onMenuOpen={() => setMenuOpen(true)} />
                {menuOpen && (
                    <Menu
                        onClose={() => setMenuOpen(false)}
                        onContactClick={handleScrollToContact}
                    />
                )}
            </div>

            <div className="travel_planner_wrap">
                <div className="side_bar">
                    <p>DEVELOPMENT</p>
                    <p>DESIGN</p>
                    <p>PRODUCT</p>
                </div>

                <div className="travel_planner_content">
                    <div className="article_title_container">
                        <h2 className="article_title">Travel planner</h2>
                    </div>

                    <div className="project_content">
                        <div className="about_project">
                            <div className="image_tools_container">
                                <img 
                                    src="/images/travel_planner_homepage.png" 
                                    alt="project homepage" 
                                />
                            </div>

                            <div className="project_overview">
                                <div className="tools_name">
                                    <p>/figma</p>
                                    <p>/html</p>
                                    <p>/css</p>
                                    <p>/javascript</p>
                                    <p>/react</p>
                                </div>

                                <div className="travel_planner_overview_content">
                                    <h3>Project overview</h3>
                                    <p>
                                        Travel Planner is a centralized application for travel 
                                        agencies to streamline workflows and manage data efficiently. 
                                        Automates budgets, organizes itineraries, and generates 
                                        client-ready proposals, enabling agencies to deliver accurate 
                                        and high-quality travel experiences.
                                    </p>

                                    <div className="project_btns">
                                        <a
                                            href="https://github.com/Duarte-reis/travel_planner.git"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <NavBtn text="Github" />
                                        </a>
                                        <a
                                            href="https://www.behance.net/gallery/241516675/Travel-Planner-UXUI-Case-Study"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <NavBtn text="Behance" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="problem_solution_container">
                        <div className="problem_container">
                            <div className="timeline_container">
                                <div className="timeline_line_container_top">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_linear_line"></div>
                                </div>
                            </div>
                            <div className="text_container">
                                <h3>Problem</h3>
                                <p>
                                    Travel agencies, especially those managing group travel, 
                                    still rely on manual, fragmented tools like Excel and Word.
                                </p>
                                <p>
                                    This lack of a centralized system leads to inefficiencies, 
                                    higher error risk, and significant time spent on repetitive 
                                    administrative tasks, reducing team productivity.
                                </p>
                                <p>
                                    As a result, valuable time is taken away from trip 
                                    personalization and client relationships, while operational 
                                    delays and inconsistencies negatively impact the customer 
                                    experience and trust.
                                </p>
                            </div>
                        </div>

                        <div className="solution_container">
                            <div className="timeline_container">
                                <div className="timeline_line_container_top">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_linear_line"></div>
                                </div>
                            </div>
                            <div className="text_container">
                                <h3>Solution</h3>
                                <p>
                                    Travel Planner is an all-in-one platform that simplifies 
                                    group travel planning by replacing fragmented tools with a 
                                    single, integrated system. It automates budget creation, 
                                    centralizes itinerary management, and generates professional, 
                                    client-ready proposals.
                                </p>
                                <p>
                                    By consolidating all data in one place, teams no longer need 
                                    to switch between spreadsheets or multiple documents, reducing 
                                    manual work, errors, and inconsistencies.
                                </p>
                                <p>
                                    Repetitive processes that once took hours become faster and 
                                    easier to manage, allowing teams to maintain better control 
                                    over costs, margins, and the content presented to clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Tag text="PROTOTYPE" />
                    <Prototype />
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default TravelPlanner