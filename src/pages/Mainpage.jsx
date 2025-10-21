import Title from "../components/Title";
import Selectnumber from "../components/Selectnumber";
import Selectcategory from "../components/Selectcategory";
import Selectdificult from "../components/Selectdificult";
import Selecttype from "../components/Selecttype";
import Startbutton from "../components/Startbutton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get_questions } from "../hooks/apiService";

function Main_page() {
    const navigate = useNavigate();

    const [optionScategory, setOptionScategory] = useState('');
    const [optionSnumber, setOptionSnumber] = useState('');
    const [optionSdificult, setOptionSdificult] = useState('');
    const [optionStype, setOptionStype] = useState('');

    const handleclick = async () => {
        const quizType = optionStype;

        if (!quizType) {
            alert("Por favor, selecione um tipo de questão.");
            return;
        }

        const amount = optionSnumber || 10;

        console.log("Parâmetros Enviados:", {
            amount: amount,
            category: optionScategory,
            difficulty: optionSdificult,
            type: quizType
        });

        const questionsData = await get_questions(
            amount,
            optionScategory,
            optionSdificult,
            quizType 
        );

        if (!questionsData || questionsData.response_code !== 0) {
            alert("Erro ao buscar as questões. Tente novamente.");
            return;
        }

        console.log("Dados das perguntas recebidos:", questionsData);
        const questions = questionsData.results;

        if (questions.length === 0) {
            alert("Nenhuma pergunta foi retornada pela API. Tente mudar as opções.");
            return;
        }

        const navigateOptions = { state: { questions: questions } };

        if (quizType === 'multiple') {
            navigate('/quiz/multiple', navigateOptions);

        } else if (quizType === 'boolean') {
            navigate('/quiz/boolean', navigateOptions);

        }
    }
    const handleScategory = (value) => {
        setOptionScategory(value);
        console.log("Categoria selecionada:", value);
    }

    const handleSnumber = (value) => {
        setOptionSnumber(value);
        console.log("Número de questões selecionado:", value);
    }

    const handleSdificult = (value) => {
        setOptionSdificult(value);
        console.log("Dificuldade selecionada:", value);
    }
    const handleStype = (value) => {
        setOptionStype(value);
        console.log("Tipo de questão selecionado:", value);
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-green-200">
            <div className="flex flex-col items-center gap-6">
                <div className="bg-white border-2 border-black rounded-md p-8 flex flex-col gap-4 w-96">
                    <Title />
                    <Selectnumber sendSnumber={handleSnumber} />
                    <Selectcategory sendScategory={handleScategory} />
                    <Selectdificult sendSdificult={handleSdificult} />
                    <Selecttype sendStype={handleStype} />
                </div>
                <Startbutton sendStartClicked={handleclick} />
            </div>
        </div>
    );
}

export default Main_page;