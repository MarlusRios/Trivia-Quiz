import Congrats from "../components/Congrats";
import ScoreCongrats from "../components/ScoreCongrats";
import Restart from "../components/Restart";
import { useLocation, useNavigate } from "react-router-dom";

function FinishPage() {

    const navigate = useNavigate();
    const locate = useLocation();

    const handleclick = () => {
        navigate('/');
    }

    const scoreraw = locate.state?.finalScore || 0;
    const totalquest = locate.state?.totalQuestions || 1;

    const score = `${scoreraw} de ${totalquest}`;
    console.log(`FinishPage: Score recebido: ${scoreraw}, Total: ${totalquest}, String formatada: ${score}`);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-green-200 p-4">
            <Congrats />
            <div className="bg-white border-2 border-black rounded-md p-8 flex flex-col gap-4 w-96 mb-4">
                <ScoreCongrats
                    textToShow={score}
                />
            </div>
            <Restart sendFinishClicked={handleclick} />
        </div>
    );
}

export default FinishPage;