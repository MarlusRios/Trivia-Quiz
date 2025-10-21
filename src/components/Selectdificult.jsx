import { useState } from "react";
import PropTypes from 'prop-types';

function Selectdificult(props) {
  const [Sdificultvalue, setSdificultvalue] = useState('');

  const handleSdificultChange = (event) => {
    setSdificultvalue(event.target.value);
    props.sendSdificult(event.target.value)
  }

  return (
    <>
      <select className="border rounded-lg p-2 w-full" id='Sdificult' value={Sdificultvalue} onChange={handleSdificultChange}>
        <option value='' disabled>dificuldade</option>
        <option value='easy'>Fácil</option>
        <option value='medium'>Médio</option>
        <option value='hard'>Difícil</option>
      </select>
    </>
  );
}

export default Selectdificult;

Selectdificult.propTypes = {
  sendSdificult: PropTypes.func
}

Selectdificult.defaultProps = {
  sendSdificult: () => { }
}