import React from 'react';

export default function InputText({placeholder, inputName, id, query}) {
  return (
    <input type="text" id={id} name={inputName} placeholder={placeholder} className="input-text" value={query}></input>
  )
}
