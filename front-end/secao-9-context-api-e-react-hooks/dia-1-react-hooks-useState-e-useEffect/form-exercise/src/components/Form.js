import React, { useState } from 'react'

function Form() {
  
  const [value, setValue] = useState({});

  function handleChange (event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form id="form">
      <fieldset id="fieldset">
        <p><label htmlFor="name">
          <input id="name" name="name" type="text" placeholder="Nome completo..." value={ value.name } onChange={ handleChange }/>
        </label>
        <label htmlFor="age">
          <input id="age" name="age" type="number" placeholder="Idade" value={ value.age } onChange={ handleChange }/>
        </label>
        <label htmlFor="city">
          <input id="city" name="city" type="text" placeholder="Sua cidade..." value={ value.city } onChange={ handleChange }/>
        </label></p>

        <p>Selecione seu módulo atual:</p>
        <label htmlFor="fundamentos">Fundamentos</label>
        <input type="radio" id="fundamentos" name="modulo" value="fundamentos" onChange={ handleChange } checked={ value.modulo === 'fundamentos'}/>
        
        <label htmlFor="front-end">Front-end</label>
        <input type="radio" id="front-end" name="modulo" value="frontend" onChange={ handleChange } checked={ value.modulo === 'frontend'}/>

        <label htmlFor="back-end">Back-end</label>
        <input type="radio" id="back-end" name="modulo" value="backend" onChange={ handleChange } checked={ value.modulo === 'backend'}/>

        <label htmlFor="ciencia-da-computacao">Ciência da computação</label>
        <input type="radio" id="ciencia-da-computacao" name="modulo" value="ciencia" onChange={ handleChange } checked={ value.modulo === 'ciencia'}/>

        <p><button type="button">Enviar informações</button></p>
      </fieldset>
    </form>
  );
}

export default Form;
