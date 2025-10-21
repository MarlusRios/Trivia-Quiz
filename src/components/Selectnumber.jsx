import { useState } from "react";
import PropTypes from 'prop-types';

function Selectnumber(props) {
  const [Snumbervalue, setSnumbervalue] = useState('');

  const handleSnumberChange = (event) => {
    setSnumbervalue(event.target.value);
    props.sendSnumber(event.target.value)
  }

  return (
    <>
      <select className="border rounded-lg p-2 w-full" id='Snumber' value={Snumbervalue} onChange={handleSnumberChange}>
        <option value='' disabled>numero de questões</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>
    </>
  );
}

export default Selectnumber;

Selectnumber.propTypes = {
  sendSnumber: PropTypes.func
}

Selectnumber.defaultProps = {
  sendSnumber: () => { }
}