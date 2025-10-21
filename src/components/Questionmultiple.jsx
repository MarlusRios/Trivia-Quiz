import PropTypes from 'prop-types'; 

function Questionmultiple(props) {
    return (
        <h3 className="text-xl font-semibold mb-4">
            {props.questionText}
        </h3>
    );
}

export default Questionmultiple;

Questionmultiple.propTypes = {
    questionText: PropTypes.string.isRequired
}                                                                                                        