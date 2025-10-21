import PropTypes from 'prop-types';

function Startbutton(props) {
  return (
    <>
      <button onClick={props.sendStartClicked} className="w-40 h-12 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700">
        Start
      </button>
    </>
  );
}

export default Startbutton;

Startbutton.propTypes = {
  sendStartClicked: PropTypes.func
}

Startbutton.defaultProps = {
  sendStartClicked: () => { }
}