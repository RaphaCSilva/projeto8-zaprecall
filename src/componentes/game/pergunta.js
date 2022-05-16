import React from 'react';

export default function Pergunta(props) {
  var { n, Q, R } = props;
  function virarPergunta(){
    
  }
  const [texto, setTexto] = React.useState(true);
  const [flipped, setFlipped] = React.useState(false);
  const [resposta, setRespostas] = React.useState(false);
  const [minimenu, setMinimenu] = React.useState(false);
  const [riscogreen, setRiscogreen] = React.useState(false);
  const [riscored, setRiscored] = React.useState(false);
  const [riscoorange, setRiscoorange] = React.useState(false);
  const [plays, setPlays] = React.useState(0);

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
  if(flipped){
    modo = "flipped";
  }else{
    modo = "front";
  }
  if(texto){
    text = "pergunta";
    img = play();
  }else {
    text = Q;
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
        <div className='sim' onClick={()=>{riscaSim()}}>
          <h5>Zap!</h5>
        </div>
      </div>);  
  }

  function riscaSim(){
    setTexto(true);
    setMinimenu(false);
    setRiscogreen(true);
    setPlays(plays++);
  }
  function riscaQuase(){
    setTexto(true); 
    setMinimenu(false);
    setRiscoorange(true);

  }
 function riscaNao(){
    setTexto(true);
    setMinimenu(false);
    setRiscored(true);
    setPlays(plays++);
  }


  if(riscogreen){
    modo = "front green";
  }
  if(riscored){
    modo = "front red";
  }
  if(riscoorange){
    modo = "front orange";
  }


  return (
    <>
    <li className = {modo}>
      <h3> {text} {n}</h3>{img}{botoes}
    </li>
    <div className="menu">
    <h4> {plays}/8 CONCLUIDAS</h4>
    </div>
    </>
  );

}