import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './NavBar.css'
import { NavBarEnglish, NavBarSpanish } from "./NavBarText";
import { useEffect, useState } from "react";
import ToggleLanguage from "../ToggleLanguage/ToggleLanguage";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const NavBar = () => {

    const { language } = useContext(LanguageContext)

    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [burguerOpen, setBurgueOpen] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    useEffect(() => {
        setWidth(window.innerWidth)
    })
    const handleNavigation = (link) => {
        setBurgueOpen(false)
        document.getElementById(link).scrollIntoView({ behavior: "smooth" })
    }

    const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const toggleBurger = () => {
        setBurgueOpen(!burguerOpen)
    }



    return (
        <>
            {
                burguerOpen ?
                    <div className="nav-bar-responsive">
                        <div className="burger" onClick={toggleBurger}>
                            <BurgerMenu />
                        </div>
                        <nav className="nav-responsive">
                            <div className="nav-info-responsive">
                                {language === LanguageTypes.SPANISH ?
                                    NavBarSpanish.map(label =>
                                        <div key={label.text} className="nav-links nav-links-responsive">
                                            <button className="button-nav" onClick={() => handleNavigation(label.link)}>{label.text}</button>
                                        </div>
                                    )
                                    :
                                    NavBarEnglish.map(label =>
                                        <div className="nav-links nav-links-responsive">
                                            <button className="button-nav" onClick={() => handleNavigation(label.link)}>{label.text}</button>
                                        </div>
                                    )
                                }
                            </div>
                        </nav>
                    </div>
                    :
                    <>
                        <div id="nav-background">
                            <nav className="nav">
                                <h2 className="nav-logo">PAULA</h2>
                                {/*isVisible && <img className="nav-logo" src={require('../../assets/logo-white.png')} alt='logo' />*/}
                                <div className="nav-info">
                                    {language === LanguageTypes.SPANISH ?
                                        NavBarSpanish.map(label =>
                                            <div key={label.text} className="nav-links">
                                                <button className="button-nav" onClick={() => handleNavigation(label.link)}>{label.text}</button>
                                            </div>
                                        )
                                        :
                                        NavBarEnglish.map(label =>
                                            <div className="nav-links">
                                                <button className="button-nav" onClick={() => handleNavigation(label.link)}>{label.text}</button>
                                            </div>
                                        )
                                    }
                                    <div className="nav-links">
                                        {width > 768 && <ToggleLanguage responsive={'right: 8rem'} />}
                                    </div>
                                </div>
                            </nav>
                            <nav className="nav-responsive-line">
                                <h2 className="nav-logo">PAULA</h2>
                                {/*<img className="nav-logo" src={require('../../assets/logo-white.png')} alt='logo' />*/}
                                <div className="nav-responsive-links">
                                    <div className=" toggle-responsive toggle">
                                        <ToggleLanguage />
                                    </div>
                                    <div className="burger-responsive" onClick={toggleBurger}>
                                        <BurgerMenu />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </>
            }

        </>
    );
}

export default NavBar; 