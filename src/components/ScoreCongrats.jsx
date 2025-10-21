// ScoreCongrats.jsx
import PropTypes from "prop-types";

function ScoreCongrats(props) {
    return (
        <div className="flex flex-col items-center gap-2">

            <p className="text-xl font-semibold text-gray-700">
                O seu Score foi:
            </p>
            <p className="text-5xl font-extrabold text-black">
                {props.textToShow}
            </p>
        </div>
    );
}

export default ScoreCongrats;

ScoreCongrats.propTypes = {
    textToShow: PropTypes.string.isRequired,
}