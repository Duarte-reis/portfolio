import "../index.css"
import Header from "../components/Header"
import Menu from "../components/Menu"
import ActTag from "../components/ActTag"
import Footer from "../components/Footer"
import { useState } from "react"
import { useLocation } from "wouter"
import NavBtn from "../components/NavBtn"
import Background from "../components/Background"

function AboutMe() {

    const [menuOpen, setMenuOpen] = useState(false)
    
    const [, setLocation] = useLocation(); 

    const handleScrollToContact = () => {
        setMenuOpen(false);
        setLocation("/#contact_section");
    };

    return (
        <section className="about_me_page_container">
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
                    )
                }
            </div>

            <div className="about_me_page_wrap">
                <div className="side_bar">
                        <p>DEVELOPMENT</p>
                        <p>DESIGN</p>
                        <p>PRODUCT</p>
                    </div>

                    <div className="about_me_page_content">
                        <div className="article_title_container">
                            <h2 className="article_title">About me</h2>
                        </div>
                        <div className="about_me_intro_container">
                            <div className="about_me_intro_title">
                                <h2 className="catch_phrase_title">I spent 8 years building the wrong carreer</h2>
                            </div>
                            <h3 className="catch_phrase_midle">Now I'm building the right one</h3>
                            <div className="about_me_intro_subtitle">
                                <h4 className="catch_phrase_bottom">This is my story</h4>
                                <img className="catch_phrase_bottom_icon" src="/images/chevron_double_down.png" alt="chevron down icon" />
                            </div>
                        </div>

                    <article className="act_one_container">
                        <div className="act_title">
                            <ActTag 
                                text="ACT I | 2017 - 2020"
                            />
                            <h2>THE DREAM</h2>
                        </div>
                        <div className="act_storyline">
                            <div className="timeline_container">
                                <div className="timeline_line_container_top">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_line"></div>
                                </div>
                                <div className="timeline_line_container_center">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_line"></div>
                                </div>
                                <div className="timeline_line_container_bottom">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_linear_line"></div>
                                </div> 
                            </div>
                            <div className="storyline_container">
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/student_logo.png" alt="academic logo" />
                                        <h4>2017: Bachelor's in tourism</h4>
                                    </div>
                                    <p className="feeling_description">Completed my first degree, ready to conquer the world!</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“I’m ready for this”</p>
                                    </div>
                                </div>
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/receptionist_icon.png" alt="receptionist icon" />
                                        <h4>2017 - 2018: Hotel receptionist</h4>
                                    </div>
                                    <p className="feeling_description">First job in the industry. Reality starts to set in</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“This isn't it...”</p>
                                    </div>
                                </div>
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/graduation_icon.png" alt="graduation icon" />
                                        <h4>2018 - 2020: Masters</h4>
                                    </div>
                                    <p className="feeling_description">Decided to pursue a master's degree in tourism.</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“I need more qualifications”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </article>

                    <div className="afirmation">
                        <p>“I invested 6 years in education, only to realize the problem wasn't my qualifications, it was the path itself."</p>
                    </div>

                    

                    

                    <article className="act_two_container">
                        <div className="act_title">
                            <ActTag 
                                text="ACT II | 2021 - 2023"
                            />
                            <h2>THE AWAKENING</h2>
                        </div>
                        <div className="act_storyline">
                            <div className="timeline_container">
                                <div className="timeline_line_container_top">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_line"></div>
                                </div>
                                <div className="timeline_line_container_center">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_line"></div>
                                </div>
                                <div className="timeline_line_container_bottom">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_linear_line"></div>
                                </div> 
                            </div>
                            <div className="storyline_container">
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/airplane_icon.png" alt="airplane icon" />
                                        <h4>2021: Travel agent</h4>
                                    </div>
                                    <p className="feeling_description">New role, new hope. Things seemed better at first.</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“This is better”</p>
                                    </div>
                                </div>
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/low_battery_icon.png" alt="low battery icon" />
                                        <h4>2021 - 2022: The slow burn</h4>
                                    </div>
                                    <p className="feeling_description">Watching colleagues stuck in the same position for years.</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“Where is this going?”</p>
                                    </div>
                                </div>
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/bulb_icon.png" alt="bulb icon" />
                                        <h4>2023: The breaking point</h4>
                                    </div>
                                    <p className="feeling_description">Two realizations: No progression. No personal fulfillment.</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“In 10 years i’ll be in the same place...”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className="afirmation" id="second_afirmation">
                        <p>“This path will lead nowhere. I need to change.”</p>
                    </div>

                    <article className="act_three_container">
                        <div className="act_title">
                            <ActTag 
                                text="ACT III | 2023 - 2025"
                            />
                            <h2>THE GRIND: LEAVING A DOUBLE LIFE</h2>
                        </div>
                        <div className="act_storyline">
                            <div className="timeline_container">
                                <div className="timeline_line_container_top">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_line"></div>
                                </div>
                                <div className="timeline_line_container_center">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_line"></div>
                                </div>
                                <div className="timeline_line_container_bottom">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_linear_line"></div>
                                </div> 
                            </div>
                            <div className="storyline_container">
                                <div className="the_double_life">
                                    <div className="story_board">
                                    <div className="the_grind_story_title">
                                        <div className="title">
                                            <img src="/images/sun_icon.png" alt="sun icon" />
                                            <h4>Day</h4>
                                        </div>
                                        <img src="/images/airplane_icon.png" alt="airplane icon" />
                                    </div>
                                    <p className="feeling_description">Travel Agent</p>
                                    <p className="feeling_description">(Full time)</p>
                                    <div className="time_frame">
                                        <img src="/images/clock_icon.png" alt="clock icon" />
                                        <p>8 hours / day</p>
                                    </div>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“Trapped”</p>
                                    </div>
                                </div>
                                <div className="story_board">
                                    <div className="the_grind_story_title">
                                        <div className="title">
                                            <img src="/images/moon_icon.png" alt="moon icon" />
                                            <h4>Night</h4>
                                        </div>
                                        <img src="/images/code_tags_icon.png" alt="code tags icon" />
                                    </div>
                                    <p className="feeling_description">UX/UI Design: FLAG (Lisbon)</p>
                                    <p className="feeling_description">Front-end: FLAG (Lisbon)</p>
                                    <div className="time_frame">
                                        <img src="/images/clock_icon.png" alt="clock icon" />
                                        <p>3-4 hours / night</p>
                                    </div>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“This is my way out”</p>
                                    </div>
                                </div>
                                </div>
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/rotate_right_icon.png" alt="rotate icon" />
                                        <h4>2 years of change</h4>
                                    </div>
                                    <ul className="feeling_description">
                                        <li>- Working full time</li>
                                        <li>- Studying 3-4 hours every night</li>
                                        <li>- Exhausting</li>
                                        <li>- Not giving up</li>
                                    </ul>
                                    <div className="achievement_caption">
                                        <div className="line_break"></div>
                                        <p className="feeling_description">Achievement: 2 complete tech certifications </p>
                                        <p className="feeling_description">Skills acquired: figma | html | css | javascript | react</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className="afirmation" id="third_afirmation">
                        <p>“For 2 years, I worked a job I wanted to leave while studying the career I want to build."</p>
                    </div>

                    <article className="act_four_container">
                        <div className="act_title">
                            <ActTag 
                                text="ACT IV | 2025"
                            />
                            <h2>THE LEAP</h2>
                        </div>
                        <div className="act_storyline">
                            <div className="timeline_container">
                                <div className="timeline_line_container_top">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_line"></div>
                                </div>
                                <div className="timeline_line_container_bottom">
                                    <div className="timeline_dot top"></div>
                                    <div className="timeline_linear_line"></div>
                                </div> 
                            </div>
                            <div className="storyline_container">
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/exit_icon.png" alt="exit icon" />
                                        <h4>2025: Left the travel agency</h4>
                                    </div>
                                    <p className="feeling_description">Made the leap. No safety net. Pure commitment.</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“This is my chance”</p>
                                    </div>
                                </div>
                                <div className="story_board">
                                    <div className="story_title">
                                        <img src="/images/magnify_icon.png" alt="magnify icon" />
                                        <h4>Now: Seeking my first role</h4>
                                    </div>
                                    <p className="feeling_description">Ready to apply everything I've learned and built. Creating experiences that actually matter for real users.</p>
                                    <div className="feeling_caption">
                                        <p>|</p>
                                        <p>“Purpose driven”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <div className="afirmation" id="fourth_afirmation">
                        <p>“I’m building my best future and I paid my dues to earn it."</p>
                    </div>

                    <article className="experience_container">
                        <h2>WHAT I BRING</h2>
                        <div className="experience_skills">
                            <div className="acquired_skill_up">
                                <img src="/images/magic_staff_icon.png" alt="magic staff icon" />
                                <p>UX/UI certification</p>
                            </div>
                            <div className="acquired_skill_down">
                                <img src="/images/code_tags_icon.png" alt="code tags icon" />
                                <p>Front-end certification</p>
                            </div>
                            <div className="acquired_skill_up">
                                <img src="/images/group_icon.png" alt="group of people icon" />
                                <p>8 years customer xp</p>
                            </div>
                            <div className="acquired_skill_down">
                                <img src="/images/bullseye_icon.png" alt="bullseye icon" />
                                <p>100% commitment</p>
                            </div>
                            <div className="acquired_skill_up">
                                <img src="/images/lightning_bolt_icon.png" alt="lightning bolt" />
                                <p>Proven resilience</p>
                            </div>
                            <div className="acquired_skill_down">
                                <img src="/images/brain_icon.png" alt="brain icon" />
                                <p>Strategic thinking</p>
                            </div>
                        </div>
                    </article>

                    
                    <div className="cv_btn_container">
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
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default AboutMe