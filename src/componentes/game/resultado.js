import react from 'react';

export default function Resultado(props){
    return(
        <>
        <div class="final-result">
            {props.resultado ? <Ganhou/> : <Perdeu/>}
        </div>
        </>
    );
}

function Ganhou(){
    return(
        <>
            <span><h3>PARABÉNS!</h3><img src='/assets/party.png'></img></span>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </>
    );
}

function Perdeu(){
    return(
        <>
            <span><h3>PUTZ..</h3><img src='/assets/sad.png'></img></span>
            <p>Você esqueceu alguns flashcards...</p>
            <p>Não desanime! Na próxima você consegue!</p>
        </>
    );
}