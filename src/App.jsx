import { useState } from 'react'
import './app.css'
import Text from './Text';
import './inputtext.css';


function App() {
  function Onclick(value){
    console.log("clicked", value);
    setAlphabet((prev) => {
      if (prev.length < word.word.length) {
        return [...prev, value];
      }
      return prev;
    });
}

function pickRandomWord(){
  return wordsList[Math.floor(Math.random()*wordsList.length)];
} 

function checkWord(){
  let totalword=alphabet.join("");
  if(totalword==word.word){
    setScore(score+10);
    setWord(pickRandomWord());
    setAlphabet([]);
  }
  else{
    setScore(score-2);
    setAlphabet([]);
  }
}

function removelast(){
  let newWord=alphabet.slice(0,-1);
  setAlphabet(newWord);
}
const wordsList=[
  {word: "APPLE", description: "It is Fruit in Red Color"},
  {word: "MANGO", description: "It is Fruit in Yellow Color and is available in Summer"},
  {word: "GUAVA", description: "It is Fruit in Green Color and in big size"},
  {word: "ORANGE", description: "It is Fruit in Orange Color"},
  {word: "BANANA", description: "It is Fruit in Yellow Color and is available in all seasons"},
  {word: "GRAPE", description: "It is Fruit in Green Color and in small size"},
  {word: "DRAGONFRUIT", description: "It is Fruit in Pink Color and in big size"}
]
const [alphabet, setAlphabet] = useState([]);
const [word, setWord] = useState(pickRandomWord());
const row1 = ['Q','W','E','R','T','Y','U','I','O','P'];
const row2 = ['A','S','D','F','G','H','J','K','L'];
const row3 = ['Z','X','C','V','B','N','M'];
const [score, setScore] = useState(0);

  return (
    <>
    <div className="App">
      <h1> GUESS THE WORD </h1>
      <p className='score'>SCORE : {score}</p>
      <div className='InputLetters'>
        {
          alphabet.map((item)=>{
            return <Text value={item} />
          })
        }
      </div>
      <p style={{fontSize: 20}}>{word.description}</p>
      <div className='KeyboardContainer'>
        {
          row1.map((value)=>{
            return <div className='Keyboard' onClick={()=>Onclick(value)}>{value}</div>
          })
        }
        <div className='lineBreak'></div>
        {
          row2.map((value)=>{
            return <div className='Keyboard' onClick={()=>Onclick(value)}>{value}</div>
          })
        }
        <div className='lineBreak'></div>
        {
          row3.map((value)=>{
            return <div className='Keyboard' onClick={()=>Onclick(value)}>{value}</div>
          })
        }
      </div>
      <button className='submission' onClick={removelast}>REMOVE</button>
      <button className='submission' onClick={checkWord}>SUBMIT</button>
    </div>
    </>
  )
}

export default App
