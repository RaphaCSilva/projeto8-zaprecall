import React from 'react';

export default function Pergunta(props) {
  var { n, Q, R } = props;
  function virarPergunta(){
    
  }
  const [texto, setTexto] = React.useState(true);
  const [flipped, setFlipped] = React.useState(false);
  const [resposta, setRespostas] = React.useState(false);
  const [minimenu, setMinimenu] = React.useState(false);
  
  let text;
  let modo;
  let img;
  let botoes;

  function virarPergunta(){
    setTexto(false);
    setFlipped(true);
  }
  function virarRespondido(){
    setTexto(true);
    setFlipped(false);
  }

  if(texto){
    text = "pergunta";
    modo = "front";
    img = play();
  }else {
    text = Q;
    modo = "flipped";
    n = null;
    img = setinha();
  }

  function setinha(){
    return (
      <img src="assets/img/setinha.png" alt="" onClick={exibirrespostas}/>
    );
  }
  function play(){
    return (
      <img src="assets/img/play.png" alt="" onClick={virarPergunta}/>
    );
  }

  function exibirrespostas(){
    setMinimenu(true);
  }

  if(minimenu){
    img = null;
    text = R;
    botoes = (
      <div className='menuBotoes'>
        <div className='nao' onClick={riscaNao}>
          <h5>Não lembrei</h5>
        </div>
        <div className='quase' onClick={riscaQuase}>
          <h5>Quase não lembrei</h5>
        </div>
        <div className='sim' onClick={riscaSim}>
          <h5>Zap!</h5>
        </div>
      </div>);  
  }

  function riscaSim(){
    setTexto(true);
    setFlipped(false);
    botoes = (""); 
  }
  function riscaQuase(){
    setTexto(true);
    setFlipped(false);
    botoes = (""); 
  }
  function riscaNao(){
    setTexto(true);
    setFlipped(false);
    botoes = (""); 
  }

  return (
    <li className = {modo}>
      <h3> {text} {n}</h3>{img}{botoes}
    </li>
  );
}