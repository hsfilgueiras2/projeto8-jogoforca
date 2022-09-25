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
    const [chosenArray, setChosenArray] = useState(["empty"])
    let chosenWord;
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
        setDisplayArray(arrayTemp)

        console.log(chosenWord + chosenArray + displayArray)

    }
    function checkLetter(letter) {
        let nErrosI = nErros;
        let missed = true;
        console.log(chosenArray)
        for (let i = 0; i < chosenArray.length; i++) {
            if (letter == chosenArray[i]) {
                console.log("TEM A LETRA")
                displayArray[i] = letter;
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

    return (
        <>
            <div className="Ilustracoes">
                <img src={imgAtual}></img>
                <div className="botao-e-palavra">
                    <button onClick={()=>chooseWord()}>Escolher Palavra</button>
                    <span className="palavra">{displayArray}</span>
                </div>

            </div>
            <div className="letras">
                {alfabeto.map((letra, index) => <button key={index} onClick={() => checkLetter(letra)}>{letra}</button>)}
            </div>
            <div className="chute"></div>
        </>
    )
}
