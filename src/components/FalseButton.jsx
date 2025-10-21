import PropTypes from "prop-types";

function FalseButton(props) {
    return (
        <button
            className={`w-full h-12 rounded-lg text-black font-bold ${props.buttonClass}`}
            disabled={props.isDisabled}
            onClick={props.onClick}>False
        </button>
    )
}

FalseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonClass : PropTypes.string.isRequired,
    isDisabled : PropTypes.bool.isRequired,
}   

export default FalseButton;