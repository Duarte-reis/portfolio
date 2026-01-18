import { useState } from "react";
import "../index.css"

function EmailBox({ onClose }) {

    const email = "duartereisrs@gmail.com";
    const [showBanner, setShowBanner] = useState(false);

    const [bannerClass, setBannerClass] = useState("")

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);

            setBannerClass("slide-down");   
            setShowBanner(true);

            setTimeout(() => {
                setBannerClass("slide-up"); 
                setTimeout(() => setShowBanner(false), 500);
            }, 1000); 
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="email_box_container">
            <div className="nav_btn">
                <p 
                    onClick={copyToClipboard}
                >
                    {email}
                </p>
                <img 
                    onClick={onClose}
                    src="/images/close_icon_gray.png" 
                    alt="close icon"
                />
            </div>
            
            {showBanner && (
                <div className={`banner ${bannerClass} `}>
                    <p>Email copied</p>
                    <img src="/images/check-mark-btn.png" alt="check mark icon" />
                </div>
            )}
        </div>
    )
}

export default EmailBox