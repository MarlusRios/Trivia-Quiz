import PropTypes from "prop-types";

function QuestBoolean(props) {
    return (
        <h3 className="text-xl font-semibold mb-4">
            {props.questionText}
        </h3>
    );
}

export default QuestBoolean;

QuestBoolean.propTypes = {
    questionText: PropTypes.string.isRequired,
}