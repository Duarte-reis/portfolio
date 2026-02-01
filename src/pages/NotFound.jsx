import "../index.css"
import { useLocation, useRouter } from "wouter"
import { useRef, useState, useEffect } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Background from "../components/Background"
import NavBtn from "../components/NavBtn"



function NotFound() {

    const contactRef = useRef(null)
    const router = useRouter()

    const [menuOpen, setMenuOpen] = useState(false)
    const [location, setLocation] = useLocation();
    const [countdown, setCountdown] = useState(5);
    
    
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

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setLocation("/");
                    setTimeout(() => window.scrollTo(0, 0), 0);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [setLocation]);


    return (
        <section className="not_found_container">

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

            <div className="not_found_content">
                <div className="not_found_animation">
                    <div className="alien_disc">
                        <p>4</p>
                        <img src="/images/alien.png" />
                        <p>4</p>
                    </div>
                    <div className="ufo_beam_container">
                        <div className="ufo_beam"></div>
                    </div>
                    
                </div>

                <div className="not_found_message">
                    <p>You've been beamed to the wrong dimension</p>
                </div>

                <div className="not_found_countdown">
                    <p className="countdown">Redirecting in {countdown}s...</p>
                </div>

                
            </div>

            
        </section>
    )
}

export default NotFound