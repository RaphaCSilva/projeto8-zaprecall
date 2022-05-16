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
        <div className='nao'>
          <h5>Não lembrei</h5>
        </div>
        <div className='quase'>
          <h5>Quase não lembrei</h5>
        </div>
        <div className='sim'>
          <h5>Zap!</h5>
        </div>
      </div>);  
  }
  return (
    <li className = {modo}>
      <h3> {text} {n}</h3>{img}{botoes}
    </li>
  );
}