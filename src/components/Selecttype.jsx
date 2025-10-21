import { useState } from "react";
import PropTypes from 'prop-types';

function Selecttype(props) {

  const [Stypeoption, setStypeoption] = useState('');

  const handleStypeChange = (event) => {
    setStypeoption(event.target.value);
    props.sendStype(event.target.value);
  }

  return (
    <select className="border rounded-lg p-2 w-full" id="Stype" value={Stypeoption} onChange={handleStypeChange}>
      <option value='' disabled>tipo de escolha</option>
      <option value='multiple'>Multipla Escolha</option>
      <option value='boolean'>Verdadeiro ou Falso</option>
    </select>
  );
}

export default Selecttype;

Selecttype.propTypes = {
  sendStype: PropTypes.func
}

Selecttype.defaultProps = {
  sendStype: () => { }
}