import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Questionmultiple from "../components/Questionmultiple";
import Selectbutton0 from "../components/Selectbutton0";
import Selectbutton1 from "../components/Selectbutton1";
import Selectbutton2 from "../components/Selectbutton2";
import Selectbutton3 from "../components/Selectbutton3";

const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function GameMultiple() {

    const location = useLocation();
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    const shuffleAndSetAnswers = (questionObj) => {
        if (!questionObj) return;
        const allAnswers = [questionObj.correct_answer, ...questionObj.incorrect_answers];
        
        const decodedAnswers = allAnswers.map(ans => decodeHtml(ans));

        const shuffled = decodedAnswers.sort(() => Math.random() - 0.5);
        setShuffledAnswers(shuffled);
    };

    useEffect(() => {
        const initialQuestions = location.state?.questions;

        if (initialQuestions && initialQuestions.length > 0) {
            setQuestions(initialQuestions);
            shuffleAndSetAnswers(initialQuestions[0]);
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
    const decodedCorrectAnswer = decodeHtml(correct_answer); 

    const totalQuestions = questions.length;
    const isDisabled = selectedAnswer !== null;

    const answer0 = shuffledAnswers[0];
    const answer1 = shuffledAnswers[1];
    const answer2 = shuffledAnswers[2];
    const answer3 = shuffledAnswers[3];

    
    const getButtonClass = (answer) => {
        let baseClass = "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800";

        if (selectedAnswer !== null) {
            const isCurrentAnswer = answer === selectedAnswer;
            const isCorrectAnswer = answer === decodedCorrectAnswer; 

            if (isCorrectAnswer) {
                baseClass = "bg-green-500 border-green-700 hover:bg-green-500 text-white shadow-lg";
            } else if (isCurrentAnswer && !isCorrectAnswer) {
                baseClass = "bg-red-500 border-red-700 hover:bg-red-500 text-white shadow-lg";
            } else {
                baseClass = "bg-white border-gray-200 text-gray-500 opacity-60";
            }
        }
        return `${baseClass} w-full py-3 px-4 rounded-md font-semibold transition duration-300 ease-in-out text-center`;
    };

    const handleAnswer = (answer) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(answer);

        const isCorrect = answer === decodedCorrectAnswer; 

        const scoreAfterThisAnswer = isCorrect ? score + 1 : score;

        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }

        setTimeout(() => {
            const nextIndex = currentQuestionIndex + 1;

            if (nextIndex < questions.length) {
                setCurrentQuestionIndex(nextIndex);
                setSelectedAnswer(null);
                shuffleAndSetAnswers(questions[nextIndex]);
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
                <Questionmultiple questionText={decodedQuestion} />
                <Selectbutton0
                    answerText={answer0}
                    buttonClass={getButtonClass(answer0)}
                    onAnswerClick={handleAnswer}
                    isDisabled={isDisabled}
                />
                <Selectbutton1
                    answerText={answer1}
                    buttonClass={getButtonClass(answer1)}
                    onAnswerClick={handleAnswer}
                    isDisabled={isDisabled}
                />
                <Selectbutton2
                    answerText={answer2}
                    buttonClass={getButtonClass(answer2)}
                    onAnswerClick={handleAnswer}
                    isDisabled={isDisabled}
                />
                <Selectbutton3
                    answerText={answer3}
                    buttonClass={getButtonClass(answer3)}
                    onAnswerClick={handleAnswer}
                    isDisabled={isDisabled}
                />
                <p className="mt-4 text-xs text-gray-500">
                    Pontuação atual: {score}
                </p>
            </div>
        </div>
    );
}

export default GameMultiple;