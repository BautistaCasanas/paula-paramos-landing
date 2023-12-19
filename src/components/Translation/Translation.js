import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Translation.css'


import { translationsTextES, translationsTextEN } from "./TranslationText";
import TranslationsText from "./components/TranslationsText";

const Translation = () => {
    const { language } = useContext(LanguageContext);

    
    const translation = language === LanguageTypes.SPANISH ? translationsTextES : translationsTextEN;

    return (
        <>
            <div className="Translation" id="Translation">
                <div className="translation-text-container">
                    <h2 className="h2-translations">{language === LanguageTypes.SPANISH ? "Traducciones" : "Translations"}</h2>
                    {translation.map((translationTextES) => (
                        <TranslationsText
                            text={translationTextES.text}
                        />   
                    ))}
                </div>
                {/* <div className="translation-img-container">  */}
                    <img src={require(`../../assets/traducciones.jpg`)} alt="img-translation" className="img-translation"/>
                    {/* <button className="btn-translation">{language === LanguageTypes.SPANISH ? "Traducí ahora" : "Translate now"}</button> */}
                {/* </div> */}
            </div>
        </>
    );
}


export default Translation; 