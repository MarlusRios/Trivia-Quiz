import PropTypes from "prop-types";

function Restart(props) {
    return (
        <>
            <button onClick={props.sendFinishClicked} className="w-40 h-12 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700">
                jogar novamente
            </button>
        </>
    );
}

export default Restart;

Restart.propTypes = {
    sendFinishClicked: PropTypes.func
}

Restart.defaultProps = {
    sendFinishClicked: () => { }
}