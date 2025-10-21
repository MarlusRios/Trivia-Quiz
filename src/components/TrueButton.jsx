import propTypes from 'prop-types';

function TrueButton(props) {
    return (
        <button
            className={`w-full h-12 rounded-lg text-black font-bold ${props.buttonClass}`}
            disabled={props.isDisabled}
            onClick={props.onClick}>True
        </button>
    )
}

TrueButton.propTypes = {
    onClick: propTypes.func.isRequired,
    buttonClass: propTypes.string.isRequired,
    isDisabled: propTypes.bool.isRequired,
}

export default TrueButton;