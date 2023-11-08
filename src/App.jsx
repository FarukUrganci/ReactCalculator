import * as math from 'mathjs'
import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
let clr = "#00ad45"

const [text,setText] = useState("");
const [result,setResult] = useState("");

const addToText = (val) => {
  setText( (text)=> [...text,val + " "])
}

const calculateResult = () => {
  const input = text.join("");
  try {
    const result = math.evaluate(input);
    setResult(result);
  } 
  catch (error) {
    setResult("Hata:Çok uzun ya da Yanlış işlem");
  }
}

const resetInput = () => {
  setText("")
  setResult("")
}

return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} results={result} />
        <div className="row">
          <Button symbol={7} handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color={clr} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color={clr} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color={clr} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={calculateResult}/>
          <Button symbol="-" color={clr} handleClick={addToText}/>
        </div>
      <Button symbol="Clear" color="red" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
