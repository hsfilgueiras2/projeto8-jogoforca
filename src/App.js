
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const chosenWord = palavras[[Math.floor(Math.random()*palavras.length)]];
import palavras from "./palavras";
function App(){
    return(
        <>
        <div className="Ilustracoes">
            <img></img>
            <div className="botao-e-palavra">
                <button></button>
                <span className="palavra"></span>
            </div>

        </div>
        <div className="letras"></div>
        <div className="chute"></div>
        </>
    )
}