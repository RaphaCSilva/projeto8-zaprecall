import React from 'react';

export default function Pergunta(props) {
  var { n, Q } = props;
  function virarPergunta(){
    
  }
  const [texto, setTexto] = React.useState(true);
  const [flipped, setFlipped] = React.useState(false);

  let text;
  let modo;
  function virarPergunta(){
    setTexto(false);
    setFlipped(true);
  }
  if(texto){
    text = "pergunta";
    modo = "front";
  }else {
    text = Q;
    modo = "flipped";
    n = null;
  }

  return (
    <li className = {modo}>
      <h3> {text} {n}</h3>   <img src="assets/img/play.png" alt="" onClick={virarPergunta}/>
    </li>
  );
}