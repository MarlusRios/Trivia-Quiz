import PropTypes from 'prop-types';

function Selectbutton1(props) {
    return (
        <div>
            <button
                className={`w-full h-12 rounded-lg text-black font-bold ${props.buttonClass}`}
                disabled={props.isDisabled}
                onClick={() => props.onAnswerClick(props.answerText)}>{props.answerText}</button>
        </div>
    );
}

export default Selectbutton1;

Selectbutton1.propTypes = {
    answerText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    onAnswerClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}

Selectbutton1.defaultProps = {
    answerText: 'Default Answer',
    buttonClass: 'bg-grey-500',
    onAnswerClick: () => { },
    isDisabled: false,
}