import palavras from "./palavras";
import react, { useState } from "react";
import React from "react";
import forca0 from "./imgs/forca0.png"
import forca1 from "./imgs/forca1.png"
import forca2 from "./imgs/forca2.png"
import forca3 from "./imgs/forca3.png"
import forca4 from "./imgs/forca4.png"
import forca5 from "./imgs/forca5.png"
import forca6 from "./imgs/forca6.png"
export default function App() {
    const [venceu, setVenceu] = useState(false);
    const [jogoIniciado, setJogoIniciado] = useState(false);
    const [chosenArray, setChosenArray] = useState(["empty"])
    const [chute, setChute] = useState("");
    let chosenWord;
    const [letrasChutadas, setLetrasChutadas] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const arrayImgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const [nErros, setNErros] = useState(0);
    const [imgAtual, setImgAtual] = useState(forca0);
    const [displayArray, setDisplayArray] = useState([])
    function chooseWord() {
        const arrayTemp = [];
        chosenWord = palavras[[Math.floor(Math.random() * palavras.length)]];
        setChosenArray(chosenWord.split(""))
        for (let i = 0; i < chosenWord.split("").length; i++) {
            arrayTemp.push("_");
        }
        setNErros(0)
        setImgAtual(forca0)
        setDisplayArray(arrayTemp)
        setLetrasChutadas([])
        setJogoIniciado(true)
        console.log(chosenWord + chosenArray + displayArray)
        
    }
    function checkLetter(letter) {
        console.log(letrasChutadas)
        setLetrasChutadas([...letrasChutadas,letter])
        let nErrosI = nErros;
        let missed = true;
        console.log(chosenArray)
        for (let i = 0; i < chosenArray.length; i++) {
            const letrinha = chosenArray[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            console.log(letrinha)
            if (letter == letrinha) {
                console.log("TEM A LETRA")
                displayArray[i] = chosenArray[i];
                console.log(displayArray)
                setDisplayArray([...displayArray]);
                missed = false
            }
        }
        if(missed===true){
            console.log("ERROU");
            nErrosI++;
            setNErros(nErrosI);
            console.log("NUMERO DE ERROS:",nErrosI)
            setImgAtual(arrayImgs[nErrosI])
        }
    }
    function chutarPalavra(){
        if(arraysEqual(chute.split(""),chosenArray)){
            alert("VOCE VENCEU");
            setVenceu(true);
        }
        else{
            setNErros(6);
            setImgAtual(forca6);
            alert("VOCE PERDEU")
        }
    }
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }
      function disabled(){}
    return (
        <>
            <div className="Ilustracoes">
                <img data-identifier="game-image" src={imgAtual}></img>
                <div className="botao-e-palavra">
                    <button data-identifier="choose-word" onClick={()=>chooseWord()}>Escolher Palavra</button>
                    <span data-identifier="word" className="palavra">{displayArray}</span>
                </div>

            </div>
            <div className="letras">
                {alfabeto.map((letra, index) => <button data-identifier="letter" key={index} className={letrasChutadas.includes(letra)?"usado":""} onClick={() =>{letrasChutadas.includes(letra)?disabled():checkLetter(letra)}}>{letra}</button>)}
            </div>
            <div className="chute">
                <span>Ja sei a palavra!</span>
                <input data-identifier="type-guess" onChange={event => {console.log(event.target.value);setChute(event.target.value)}} ></input>
                <button data-identifier="guess-button" className={jogoIniciado==false?"usado":""} onClick={()=> jogoIniciado==true ? chutarPalavra() : disabled()}>Chutar</button>
            </div>
        </>
    )
}
