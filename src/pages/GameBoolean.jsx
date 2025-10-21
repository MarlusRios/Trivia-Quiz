import FalseButton from "../components/FalseButton";
import TrueButton from "../components/TrueButton";
import QuestBoolean from "../components/QuestBoolean";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function GameBoolean() {

    const location = useLocation();
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        const initialQuestions = location.state?.questions;

        if (initialQuestions && initialQuestions.length > 0) {
            setQuestions(initialQuestions);
        } else {
            navigate('/');
        }
    }, [location.state, navigate]);

    if (questions.length === 0) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-green-200">
                <div className="text-xl font-bold">Carregando Questões...</div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) return null;

    const rawQuestion = currentQuestion.question;
    const decodedQuestion = decodeHtml(rawQuestion); 

    const { correct_answer } = currentQuestion; 

    const totalQuestions = questions.length;
    const isDisabled = selectedAnswer !== null;

    const answerTrue = "True";
    const answerFalse = "False";

    const getButtonClass = (answer) => {
        let baseClass = "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800";

        if (selectedAnswer !== null) {
            const isCurrentAnswer = answer === selectedAnswer;
            const isCorrectAnswer = answer === correct_answer;

            if (isCorrectAnswer) {
                baseClass = "bg-green-500 border-green-700 hover:bg-green-500 text-white shadow-lg";
            } else if (isCurrentAnswer && !isCorrectAnswer) {
                baseClass = "bg-red-500 border-red-700 hover:bg-red-500 text-white shadow-lg";
            } else {
                baseClass = "bg-white border-gray-200 text-gray-500 opacity-60";
            }
        }
        return `${baseClass} transition duration-300 ease-in-out`;
    };

    const handleAnswer = (answer) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(answer);

        const isCorrect = answer === correct_answer;

        const scoreAfterThisAnswer = isCorrect ? score + 1 : score;

        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }

        setTimeout(() => {
            const nextIndex = currentQuestionIndex + 1;

            if (nextIndex < questions.length) {
                setCurrentQuestionIndex(nextIndex);
                setSelectedAnswer(null);
            } else {
                navigate('/quiz/finish', {
                    state: {
                        finalScore: scoreAfterThisAnswer,
                        totalQuestions: totalQuestions
                    }
                });
            }
        }, 1500);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-green-200">
            <div className="bg-white border-2 border-black rounded-md p-8 flex flex-col gap-4 w-96 max-w-lg">

                <h2 className="text-sm text-gray-600">
                    Questão {currentQuestionIndex + 1} de {totalQuestions}
                </h2>

                <QuestBoolean questionText={decodedQuestion} />

                <FalseButton
                    onClick={() => handleAnswer(answerFalse)}
                    buttonClass={getButtonClass(answerFalse)}
                    isDisabled={isDisabled}
                />

                <TrueButton
                    onClick={() => handleAnswer(answerTrue)}
                    buttonClass={getButtonClass(answerTrue)}
                    isDisabled={isDisabled}
                />

                <p className="mt-4 text-xs text-gray-500">
                    Pontuação atual: {score}
                </p>
            </div>
        </div>
    );
}

export default GameBoolean;