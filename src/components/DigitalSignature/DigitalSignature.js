import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './DigitalSignature.css';

import { digitalSignatureTextES, digitalSignatureTextEN } from "./DigitalSignatureText";
import Reason from "./components/DigitalSignatureUl";

const DigitalSignature = () => {
    const { language } = useContext(LanguageContext);

    // Crear un array de datos para cada instancia de Title
    
    const digitalSignatureText = language === LanguageTypes.SPANISH ? digitalSignatureTextES : digitalSignatureTextEN;
    
    return (
        <>
            <div className="DigitalSignature" id="DigitalSignature">
                <div className="ds-img-container">
                    <img src={require(`../../assets/firma.png`)} alt="img-digital-signature" className="img-digital-signature"/>
                    <h2 className="ds-h2">Firma Digital</h2>
                </div>
                <div className="ul-container">
                    {digitalSignatureText.map((item, index) => {
                        return (
                            <Reason key={index} text={item.ul} />
                        );
                    })}
                </div>
            </div>
        </>
    );
}


export default DigitalSignature; 