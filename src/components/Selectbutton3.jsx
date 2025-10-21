import PropTypes from 'prop-types';

function Selectbutton3(props) {
    return (
        <div>
            <button
                className={`w-full h-12 rounded-lg text-black font-bold ${props.buttonClass}`}
                disabled={props.isDisabled}
                onClick={() => props.onAnswerClick(props.answerText)}>{props.answerText}</button>
        </div>
    );
}

export default Selectbutton3;

Selectbutton3.propTypes = {
    answerText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    onAnswerClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}

Selectbutton3.defaultProps = {
    answerText: 'Default Answer',
    buttonClass: 'bg-grey-500',
    onAnswerClick: () => { },
    isDisabled: false,
}