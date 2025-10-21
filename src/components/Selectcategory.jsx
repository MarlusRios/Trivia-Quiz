import { useState } from "react";
import PropTypes from 'prop-types';

function Selectcategory(props) {
  const [Scategoryvalue, setScategoryvalue] = useState('');

  const handleScategoryChange = (event) => {
    setScategoryvalue(event.target.value);
    props.sendScategory(event.target.value)
  }

  return (
    <select className="border rounded-lg p-2 w-full" id="Stype" value={Scategoryvalue} onChange={handleScategoryChange}>
      <option value="" disabled>tipo de escolha</option>
      <option value="9">Conhecimentos Gerais</option>
      <option value="10">Livros</option>
      <option value="11">Filmes</option>
      <option value="12">Música</option>
      <option value="13">Musicais e Teatro</option>
      <option value="14">Televisão</option>
      <option value="15">Video Games</option>
      <option value="16">Jogos de Tabuleiro</option>
      <option value="17">Ciência e Natureza</option>
      <option value="18">Ciência da Computação</option>
      <option value="19">Matemática</option>
      <option value="20">Mitologia</option>
      <option value="21">Esportes</option>
      <option value="22">Geografia</option>
      <option value="23">História</option>
      <option value="24">Política</option>
      <option value="25">Artes</option>
      <option value="26">Celebridades</option>
      <option value="27">Animais</option>
      <option value="28">Veículos</option>
      <option value="29">Quadrinhos</option>
      <option value="30">Gadgets</option>
      <option value="31">Animes e Mangás</option>
      <option value="32">Desenhos Animados</option>
    </select>
  );
}

export default Selectcategory;

Selectcategory.propTypes = {
  sendScategory: PropTypes.func
}

Selectcategory.defaultProps = {
  sendStartClicked: () => { }
}