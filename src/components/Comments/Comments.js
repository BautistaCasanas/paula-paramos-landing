import { useContext,useState } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Comments.css'
import Message from "./components/Message/Message";
// import { EducationEnglish, EducationSpanish } from "./EducationText";
// import Title from "./components/Title/Title";

const Comments = () => {
    const { language } = useContext(LanguageContext);

    // Seguir igual como ' " " ' para seguir formato de "mensaje"
    const titlesData = [
        { comment: '"Los servicios de traducción provistos son de gran calidad y eficiencia. Muy recomendable"', name: "Leticia Arena"},
        { comment: '"Excelente servicio, muy profesional y eficiente. Muy recomendable"', name: "María Laura"},
        { comment: '"Muy buena atención y servicio. Muy recomendable"', name: "Ricasa S.A."},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titlesData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + titlesData.length) % titlesData.length);
    };

    return (
        <>
            <div className="Comments" id="Comments">
                <div className="comments-container">
                    <button onClick={handlePrev}>&lt;</button>
                    <Message
                        comment={titlesData[currentIndex].comment}
                        name={titlesData[currentIndex].name}
                    />
                    <button onClick={handleNext}>&gt;</button>
                </div>
            </div>
        </>
    );
}


export default Comments; 