import React from 'react';

export default function Pergunta(props) {
  var { text } = props;

  return (
    <li>
      <h3>{text}</h3>
    </li>
  );
}