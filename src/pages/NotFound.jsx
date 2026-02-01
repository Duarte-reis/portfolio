import "../index.css"
import { Link, useLocation } from "wouter"
import { useRef, useState, useEffect } from "react"

import Header from "../components/Header"
import Menu from "../components/Menu"
import Background from "../components/Background"



function NotFound() {

    const contactRef = useRef(null)

    const [menuOpen, setMenuOpen] = useState(false)
    const [location] = useLocation();
    
    
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
        </section>
    )
}

export default NotFound